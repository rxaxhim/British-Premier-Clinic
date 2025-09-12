import React from "react";
import { Link } from "react-router-dom";

type Cta = {
  label: string;
  /** Prefer this for in-app routes so basename is respected */
  to?: string;
  /** For external links or when you intentionally want a full reload */
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "solid" | "outline";
  target?: string;
  rel?: string;
  className?: string;
} | undefined;

type HeroBannerProps = {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  badges?: string[];
  className?: string;
  gradientClassName?: string;
  center?: boolean;
  children?: React.ReactNode;
  primaryCta?: Cta;
  secondaryCta?: Cta;
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
  primaryCta,
  secondaryCta,
}: HeroBannerProps) {
  const align = center
    ? "text-center items-center justify-center"
    : "text-left items-start justify-start";

  const Buttonish = ({ cta }: { cta: NonNullable<Cta> }) => {
    const common =
      "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/40";
    const outline =
      "bg-transparent border border-white text-white hover:bg-white hover:text-blue-950";

    const classes = `${common} ${outline} ${cta.className || ""}`;

    if (cta?.to) {
      return (
        <Link to={cta.to} target={cta.target} rel={cta.rel} className={classes}>
          {cta.label}
        </Link>
      );
    }
    if (cta?.href) {
      return (
        <a href={cta.href} target={cta.target} rel={cta.rel} className={classes}>
          {cta.label}
        </a>
      );
    }
    return (
      <button onClick={cta?.onClick} className={classes} type="button">
        {cta?.label}
      </button>
    );
  };

  return (
    <section
      className={[
        "relative overflow-hidden text-white",
        gradientClassName || "bg-gradient-to-br from-blue-950 via-blue-900 to-red-900",
        className,
      ].join(" ")}
    >
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

        {(primaryCta || secondaryCta) && (
          <div className={`flex ${align} w-full`}>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {primaryCta && <Buttonish cta={primaryCta} />}
              {secondaryCta && <Buttonish cta={{ variant: "outline", ...secondaryCta }} />}
            </div>
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
