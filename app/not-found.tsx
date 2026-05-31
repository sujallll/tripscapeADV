import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted">This route does not exist.</p>
      <Link href="/#trips" className="btn-primary mt-6 rounded-full px-5 py-2 text-sm font-semibold">
        View Trips
      </Link>
    </div>
  );
}
