import Image from "next/image";

type Item = { src: string; caption: string };

export function GalleryMasonry({ images }: { images: Item[] }) {
  return <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">{images.map((img) => <figure key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10"><Image src={img.src} alt={img.caption} width={800} height={1000} className="h-auto w-full object-cover" /><figcaption className="bg-black/40 p-3 text-sm text-white/80">{img.caption}</figcaption></figure>)}</div>;
}
