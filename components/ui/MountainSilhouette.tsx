export function MountainSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M0 80 L45 28 L78 52 L110 18 L145 48 L175 32 L200 55 L200 80 Z" />
    </svg>
  );
}
