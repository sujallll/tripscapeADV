export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
      <div className="brush-divider" />
      {subtitle ? <p className="lead mt-4 max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}
