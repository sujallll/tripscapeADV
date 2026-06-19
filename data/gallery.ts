export type MemoryImage = {
  src: string;
  alt: string;
};

export const memoryGalleryImages: MemoryImage[] = [
  { src: "/memories/1.jpeg", alt: "Snow adventure on the rooftop bus" },
  { src: "/memories/2.jpeg", alt: "Beach volleyball at golden hour" },
  { src: "/memories/3.jpeg", alt: "Crew vibes on the beach" },
  { src: "/memories/4.jpeg", alt: "Night out with the squad" },
  { src: "/memories/5.jpeg", alt: "Sunset views from the rooftop cafe" },
  { src: "/memories/6.jpeg", alt: "Beach days with the boys" },
  { src: "/memories/7.jpeg", alt: "Group photo at Cafe Sissu, Himachal" },
  { src: "/memories/8.jpeg", alt: "End of trip beach photo" },
  { src: "/memories/9.jpeg", alt: "Mountain cottages in the valley" },
  { src: "/memories/10.jpeg", alt: "Cozy stay on the hills" },
  { src: "/memories/11.jpeg", alt: "Waking up to snowfall" },
  { src: "/memories/12.jpeg", alt: "Warm lights on a cold mountain night" },
];

export const memoryGalleryRowOne = memoryGalleryImages.slice(0, 6);
export const memoryGalleryRowTwo = memoryGalleryImages.slice(6, 12);

/** @deprecated use memoryGalleryImages */
export const galleryImages = memoryGalleryImages.map((img) => ({ src: img.src, caption: img.alt }));
