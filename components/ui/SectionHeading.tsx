type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
  className?: string;
};

export function SectionHeading({ title, description, align = "center", id, className = "" }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto max-w-[917px] text-center" : ""} ${className}`}>
      <h2 id={id} className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.2] font-semibold text-ink">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-[1.6] text-body sm:text-lg">{description}</p>}
    </div>
  );
}
