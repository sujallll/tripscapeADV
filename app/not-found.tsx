import Link from "next/link";

export default function NotFound() {
  return <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"><h1 className="text-4xl font-semibold">Trip not found</h1><p className="mt-3 text-white/70">This route does not exist yet.</p><Link href="/destinations" className="mt-6 rounded-full border border-white/20 px-5 py-2">Go to Destinations</Link></div>;
}
