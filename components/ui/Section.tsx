interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export function Section({ id, title, subtitle, className = "", children, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? "bg-[#0d0d14]" : "bg-[#0a0a0f]"} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg text-white/60 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
