"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MemoryVideo } from "@/data/memoriesVideos";
import { LazyReelVideo } from "@/components/home/memories/LazyReelVideo";
import { useContainerWidth } from "@/hooks/useContainerWidth";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const CARD_WIDTH = 280;
const CARD_GAP = 24;
const SWIPE_THRESHOLD = 50;

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function ReelCard({
  video,
  active,
  className = "",
}: {
  video: MemoryVideo;
  active: boolean;
  className?: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className={`memory-reel group/reel mx-auto w-full max-w-[280px] ${className}`}
    >
      <div className="memory-reel-glass relative aspect-[9/16] overflow-hidden rounded-[1.75rem]">
        <LazyReelVideo video={video} active={active} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-brand-navy/20" />
        <div className="on-dark absolute bottom-0 left-0 right-0 p-5">
          <p className="tagline">{video.location}</p>
          <h4 className="font-display mt-1 text-lg">{video.title}</h4>
        </div>
      </div>
    </motion.article>
  );
}

function CarouselControls({
  onPrev,
  onNext,
  onDot,
  count,
  activeIndex,
}: {
  onPrev: () => void;
  onNext: () => void;
  onDot: (index: number) => void;
  count: number;
  activeIndex: number;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        className="memory-carousel-btn absolute left-0 top-[42%] z-20 -translate-y-1/2 sm:left-1"
        aria-label="Previous video"
      >
        <ChevronLeft size={22} strokeWidth={2.2} />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="memory-carousel-btn absolute right-0 top-[42%] z-20 -translate-y-1/2 sm:right-1"
        aria-label="Next video"
      >
        <ChevronRight size={22} strokeWidth={2.2} />
      </button>
      <div className="mt-8 flex items-center justify-center gap-2.5" role="tablist" aria-label="Video slides">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to video ${index + 1}`}
            onClick={() => onDot(index)}
            className={`memory-carousel-dot ${index === activeIndex ? "memory-carousel-dot--active" : ""}`}
          />
        ))}
      </div>
    </>
  );
}

function ReelCarousel({ videos }: { videos: MemoryVideo[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => wrapIndex(prev + dir, videos.length));
    },
    [videos.length],
  );

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") paginate(-1);
      if (event.key === "ArrowRight") paginate(1);
    };

    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [paginate]);

  return (
    <div
      ref={carouselRef}
      tabIndex={0}
      className="relative px-11 outline-none sm:px-14 focus-visible:ring-2 focus-visible:ring-brand-light/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-2xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Video memories carousel"
    >
      <div className="relative mx-auto min-h-[480px] max-w-[280px] overflow-hidden sm:min-h-[500px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_event, info: PanInfo) => {
              if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
              else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
            }}
            style={{ touchAction: "pan-y" }}
          >
            <ReelCard video={videos[index]} active />
          </motion.div>
        </AnimatePresence>
      </div>

      <CarouselControls
        onPrev={() => paginate(-1)}
        onNext={() => paginate(1)}
        onDot={(i) => {
          setDirection(i > index ? 1 : -1);
          setIndex(i);
        }}
        count={videos.length}
        activeIndex={index}
      />
    </div>
  );
}

export function MemoryReelShowcase({ videos }: { videos: MemoryVideo[] }) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { ref, width } = useContainerWidth<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);
  const minWidthForThree = CARD_WIDTH * 3 + CARD_GAP * 2;
  const showGrid = mounted && !isMobile && width >= minWidthForThree;

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="mx-auto min-h-[520px] max-w-[280px] rounded-[1.75rem] bg-white/5" aria-hidden />;
  }

  return (
    <div ref={ref}>
      {showGrid ? (
        <div className="grid grid-cols-3 gap-6">
          {videos.map((video) => (
            <ReelCard key={video.id} video={video} active />
          ))}
        </div>
      ) : (
        <ReelCarousel videos={videos} />
      )}
    </div>
  );
}
