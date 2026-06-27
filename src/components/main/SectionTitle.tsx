type SectionTitleProps = {
  text: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "center" | "left";
};

const SectionTitle = ({
  text,
  eyebrow,
  subtitle,
  align = "center",
}: SectionTitleProps) => {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left"
      }`}
    >
      {eyebrow && (
        <span className="eyebrow mb-3">
          <span className="w-6 h-px bg-[var(--color-accent)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3">
        {text}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-muted)] mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
