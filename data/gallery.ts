export type MemoryImage = {
  src: string;
  alt: string;
};

export const memoryGalleryImages: MemoryImage[] = [
  { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=640&q=75", alt: "Sunrise at high altitude with the crew" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=640&q=75", alt: "Roads that made us stop and stare" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=640&q=75", alt: "Moments from the road" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=640&q=75", alt: "Golden hour and good stories" },
  { src: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=640&q=75", alt: "Summit smiles and shared wins" },
  { src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=640&q=75", alt: "Night drives and conversations" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=640&q=75", alt: "Mountain peaks at dawn" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=640&q=75", alt: "Himalayan vistas with friends" },
  { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=640&q=75", alt: "Starry skies on the trail" },
  { src: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=640&q=75", alt: "Beach bonfire memories" },
  { src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=640&q=75", alt: "Campfire stories under the stars" },
  { src: "https://images.unsplash.com/photo-1504280390367-361c66761323?auto=format&fit=crop&w=640&q=75", alt: "Tent life and trail mornings" },
];

export const memoryGalleryRowOne = memoryGalleryImages.slice(0, 6);
export const memoryGalleryRowTwo = memoryGalleryImages.slice(6, 12);

/** @deprecated use memoryGalleryImages */
export const galleryImages = memoryGalleryImages.map((img) => ({ src: img.src, caption: img.alt }));
