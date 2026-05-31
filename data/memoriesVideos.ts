export type MemoryVideo = {
  id: string;
  title: string;
  location: string;
  src: string;
  poster: string;
};

export const memoryVideos: MemoryVideo[] = [
  {
    id: "spiti-roads",
    title: "Spiti Diaries",
    location: "Spiti Valley",
    src: "https://videos.pexels.com/video-files/6963395/6963395-hd_720_1280_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1626014896506-6f5f2a57bc50?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "goa-coast",
    title: "Coastal Crew",
    location: "Goa",
    src: "https://videos.pexels.com/video-files/3571264/3571264-hd_720_1280_24fps.mp4",
    poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mountain-trail",
    title: "Trail Moments",
    location: "Manali",
    src: "https://videos.pexels.com/video-files/4828850/4828850-hd_720_1280_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
  },
];
