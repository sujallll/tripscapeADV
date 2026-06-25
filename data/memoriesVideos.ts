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
    src: "https://res.cloudinary.com/dvye1aziw/video/upload/q_auto:eco,vc_h264,br_2m/v1782389620/IMG_2797_z1xc2i.mp4",
    poster: "/memories/7.jpeg",
  },
  {
    id: "reel-2",
    title: "Mountain Escape",
    location: "Himachal Pradesh",
    src: "https://res.cloudinary.com/dvye1aziw/video/upload/q_auto:eco,vc_h264,br_2m/v1782386961/IMG_2864_onf3nz.mp4",
    poster: "/memories/1.jpeg",
  },
  {
    id: "reel-3",
    title: "Coastal Crew",
    location: "Goa",
    src: "https://res.cloudinary.com/dvye1aziw/video/upload/q_auto:eco,vc_h264,br_2m/v1782389632/IMG_2863_xenyyc.mp4",
    poster: "/memories/3.jpeg",
  },
];
