"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref: string;
  meta?: string;
  priceLabel?: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
  onActiveChange?: (index: number | null) => void;
}

export const ExpandingCards = React.forwardRef<HTMLUListElement, ExpandingCardsProps>(
  ({ className, items, defaultActiveIndex = 0, onActiveChange, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(defaultActiveIndex);
    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth >= 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    React.useEffect(() => {
      onActiveChange?.(activeIndex);
    }, [activeIndex, onActiveChange]);

    const gridStyle = React.useMemo(() => {
      if (activeIndex === null) return {};

      if (isDesktop) {
        const columns = items.map((_, index) => (index === activeIndex ? "5fr" : "1fr")).join(" ");
        return { gridTemplateColumns: columns };
      }

      const rows = items.map((_, index) => (index === activeIndex ? "5fr" : "1fr")).join(" ");
      return { gridTemplateRows: rows };
    }, [activeIndex, items, isDesktop]);

    const handleInteraction = (index: number) => setActiveIndex(index);

    return (
      <ul
        className={cn(
          "grid h-[620px] w-full gap-2 transition-[grid-template-columns,grid-template-rows] duration-500 ease-out md:h-[520px]",
          className,
        )}
        style={{
          ...gridStyle,
          ...(isDesktop ? { gridTemplateRows: "1fr" } : { gridTemplateColumns: "1fr" }),
        }}
        ref={ref}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <li
              key={item.id}
              className={cn(
                "group relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-2xl border border-[rgba(63,94,60,0.2)] bg-white shadow-sm md:min-w-[72px]",
                isActive && "ring-1 ring-brand-light/40",
              )}
              onMouseEnter={() => handleInteraction(index)}
              onFocus={() => handleInteraction(index)}
              onClick={() => handleInteraction(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleInteraction(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              aria-label={`${item.title} trip${isActive ? ", expanded" : ""}`}
              data-active={isActive ? "true" : "false"}
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                fill
                sizes="(max-width: 767px) 100vw, 420px"
                priority={index === defaultActiveIndex}
                className={cn(
                  "object-cover transition-all duration-500 ease-out",
                  isActive ? "scale-100 grayscale-0" : "scale-110 grayscale",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t transition-opacity duration-500",
                  isActive
                    ? "from-brand-navy/90 via-brand-navy/45 to-brand-navy/10"
                    : "from-black/80 via-black/45 to-black/10",
                )}
              />

              <article className="absolute inset-0 flex flex-col justify-end gap-2 p-4 md:p-5">
                <h3
                  className={cn(
                    "font-display origin-left text-sm font-medium uppercase tracking-wider text-white/80 transition-all duration-300 ease-out md:rotate-90",
                    isActive ? "opacity-0 md:opacity-0" : "opacity-100",
                  )}
                >
                  {item.title}
                </h3>

                <div
                  className={cn(
                    "text-brand-light transition-all duration-300 ease-out",
                    isActive ? "opacity-100 delay-75" : "opacity-0",
                  )}
                >
                  {item.icon}
                </div>

                <h3
                  className={cn(
                    "font-display text-xl text-white transition-all duration-300 ease-out md:text-2xl",
                    isActive ? "opacity-100 delay-150" : "opacity-0",
                  )}
                >
                  {item.title}
                </h3>

                {item.meta ? (
                  <p
                    className={cn(
                      "text-xs font-medium uppercase tracking-wider text-white/60 transition-all duration-300 ease-out",
                      isActive ? "opacity-100 delay-[180ms]" : "opacity-0",
                    )}
                  >
                    {item.meta}
                  </p>
                ) : null}

                <p
                  className={cn(
                    "max-w-md text-sm leading-relaxed text-white/85 transition-all duration-300 ease-out",
                    isActive ? "opacity-100 delay-[225ms]" : "opacity-0",
                  )}
                >
                  {item.description}
                </p>

                {item.priceLabel ? (
                  <p
                    className={cn(
                      "font-display text-lg text-brand-light transition-all duration-300 ease-out",
                      isActive ? "opacity-100 delay-[260ms]" : "opacity-0",
                    )}
                  >
                    {item.priceLabel}
                  </p>
                ) : null}

                <Link
                  href={item.linkHref}
                  prefetch={isActive}
                  onClick={(event) => event.stopPropagation()}
                  className={cn(
                    "trip-cta-glow mt-1 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-out hover:border-brand-light hover:bg-brand",
                    isActive ? "opacity-100 delay-300" : "pointer-events-none opacity-0",
                  )}
                >
                  View Details
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    );
  },
);

ExpandingCards.displayName = "ExpandingCards";
