export type MemoryVideo = {
  id: string;
  title: string;
  location: string;
  src: string;
  poster: string;
};

export const memoryVideos: MemoryVideo[] = [
  {
    id: "reel-1",
    title: "Adventure Diaries",
    location: "Himachal Pradesh",
    src: "/videos/IMG_2797.MP4",
    poster: "/memories/7.jpeg",
  },
  {
    id: "reel-2",
    title: "Coastal Crew",
    location: "Goa",
    src: "/videos/IMG_2863.MP4",
    poster: "/memories/3.jpeg",
  },
];
