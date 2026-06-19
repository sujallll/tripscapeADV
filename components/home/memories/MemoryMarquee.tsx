"use client";

import Image from "next/image";
import type { MemoryImage } from "@/data/gallery";

const PHOTO_WIDTH = 288;
const PHOTO_HEIGHT = 208;

export function MemoryMarquee({
  images,
  direction,
}: {
  images: MemoryImage[];
  direction: "ltr" | "rtl";
}) {
  const track = [...images, ...images];

  return (
    <div
      className="marquee-row group/row relative overflow-hidden"
      aria-label={`Photo marquee moving ${direction === "ltr" ? "left to right" : "right to left"}`}
    >
      <div className="marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20" />
      <div className="marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20" />

      <div
        className={`marquee-track flex w-max gap-4 ${direction === "ltr" ? "marquee-ltr" : "marquee-rtl"}`}
      >
        {track.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className="memory-photo group/photo relative shrink-0 overflow-hidden rounded-2xl"
            style={{ width: PHOTO_WIDTH, height: PHOTO_HEIGHT }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={PHOTO_WIDTH}
              height={PHOTO_HEIGHT}
              sizes="288px"
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 ease-out group-hover/photo:scale-[1.06] group-hover/photo:brightness-110"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
