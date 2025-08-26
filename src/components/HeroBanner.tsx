import React from "react";

type HeroBannerProps = {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  badges?: string[];
  className?: string;
  gradientClassName?: string;
  center?: boolean; // default true
  children?: React.ReactNode;
};

export default function HeroBanner({
  eyebrow,
  title,
  description,
  badges = [],
  className = "",
  gradientClassName,
  center = true,
  children,
}: HeroBannerProps) {
  const align = center
    ? "text-center items-center justify-center"
    : "text-left items-start justify-start";

  return (
    <section
      className={[
        "relative overflow-hidden text-white",
        gradientClassName || "bg-gradient-to-br from-blue-950 via-blue-900 to-red-900",
        className,
      ].join(" ")}
    >
      {/* Subtle radial highlights */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col gap-4">
        {eyebrow && (
          <div className={`flex ${align} w-full`}>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-white/90 backdrop-blur">
              {eyebrow}
            </span>
          </div>
        )}

        <div className={`flex ${align} w-full`}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow max-w-4xl mx-auto">
            {title}
          </h1>
        </div>

        {description && (
          <div className={`flex ${align} w-full`}>
            <p className="mt-1 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        )}

        {(badges.length > 0 || children) && (
          <div className={`flex ${align} w-full`}>
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-white/90 backdrop-blur"
                >
                  {b}
                </span>
              ))}
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
