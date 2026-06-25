"use client";

import type { MemoryVideo } from "@/data/memoriesVideos";

export function LazyReelVideo({
  video,
  active,
}: {
  video: MemoryVideo;
  active: boolean;
}) {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay={active}
      muted
      loop
      playsInline
      preload={active ? "auto" : "none"}
      poster={video.poster}
      aria-label={`${video.title} — ${video.location}`}
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}
