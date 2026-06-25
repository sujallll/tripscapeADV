"use client";

import { useEffect, useRef } from "react";
import type { MemoryVideo } from "@/data/memoriesVideos";

export function LazyReelVideo({
  video,
  active,
}: {
  video: MemoryVideo;
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (active) {
      void el.play().catch(() => undefined);
    } else {
      el.pause();
    }
  }, [active]);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
      poster={video.poster}
      aria-label={`${video.title} — ${video.location}`}
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}
