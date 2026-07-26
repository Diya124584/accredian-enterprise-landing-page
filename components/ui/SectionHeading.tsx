interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      <span className="text-sm font-semibold uppercase tracking-wide text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl">{heading}</h2>
    </div>
  );
}
