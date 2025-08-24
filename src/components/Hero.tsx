import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Phone,
  Star,
  Award,
  Shield,
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import LogoTilt from "@/components/LogoTilt";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import { ColourfulText } from "@/components/ui/colourful-text";

const Hero = () => {
  // Gave each stat icon its own brand-friendly color
  const stats = [
    { icon: Award, label: "Years of Excellence", value: "15+", color: "text-amber-300" },
    { icon: Heart, label: "Patients Treated", value: "10K+", color: "text-rose-400", fill: "fill-rose-400" },
    { icon: Shield, label: "Success Rate", value: "95%", color: "text-emerald-300" },
    { icon: Star, label: "Patient Rating", value: "4.9/5", color: "text-yellow-300", fill: "fill-yellow-300" }
  ];

  const features = [
    "Expert Psychiatrists & Psychologists",
    "Evidence-Based Treatment Methods",
    "Multilingual Support Available",
    "Flexible Appointment Scheduling"
  ];

  return (
    <section className="relative min-h-[90svh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <picture>
        <source srcSet={heroBg} media="(min-width: 768px)" />
        <img
          src={heroBgMobile}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-36 md:pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-5">
              {/* Logo + Clinic Name */}
              <div className="space-y-3">
                <div className="flex justify-center sm:justify-start">
                  {/* Slot that reserves just a little vertical space */}
                  <div className="relative h-8 sm:h-9 md:h-10 w-24">
                    {/* Position the existing 260px LogoTilt so it appears small */}
                    <div
                      className="
                        absolute left-1/2 -translate-x-1/2
                        -top-10 sm:-top-12 md:-top-14
                        origin-bottom
                        pointer-events-none
                        scale-[2.5] sm:scale-[2.5] md:scale-[2.5]
                      "
                    >
                      <div className="pointer-events-auto">
                        <LogoTilt />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinic Name under the logo */}
                <div className="text-center sm:text-left leading-tight">
                  <span className="block font-bold text-lg sm:text-xl">
                    <ColourfulText text="BRITISH PREMIER" fixedColor="#0b2a6f" />
                  </span>
                  <span
                    className="
                      block
                      text-base sm:text-lg
                      font-medium
                      text-[#991b1b]           /* darker red */
                      tracking-[0.015em]       /* subtle letterspacing for readability */
                      leading-tight
                      [font-kerning:normal]    /* enable kerning */
                    "
                  >
                    Psychiatry
                    <span className="relative -top-[1px] mx-1 text-[0.9em] font-semibold">
                      &amp;
                    </span>
                    Psychology
                  </span>
                </div>

                <div className="flex justify-center sm:justify-start">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30 backdrop-blur-sm uppercase tracking-wider"
                  >
                    Premier Mental Health Care in UAE
                  </Badge>
                </div>
              </div>

              <h1 className="text-center sm:text-left text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Expert Mental Health Care{" "}
                <span className="bg-gradient-to-r from-accent-light to-secondary-light bg-clip-text text-transparent">
                  Within Reach
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Professional psychiatric and psychological services providing compassionate,
                evidence-based treatment for individuals and families across the UAE.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start space-x-2 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 mt-0.5 text-secondary-light flex-shrink-0" />
                  <span className="text-white/90 text-sm leading-6">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all hover:scale-105 shadow-large font-semibold"
                asChild
              >
                <Link to="/appointment" className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm font-semibold"
                asChild
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call +971 4 321 9494</span>
                </Link>
              </Button>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <span className="text-white/90 text-sm">4.9/5 Patient Rating</span>
              </div>
              <div className="text-white/90 text-sm">✓ DHA Licensed &amp; Regulated</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className={`h-8 w-8 mb-3 ${stat.color} ${stat.fill ?? ""}`} />
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-4 tracking-tight">Need Immediate Support?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent-light" />
                  <span className="text-white/90">24/7 Crisis Helpline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-accent-light" />
                  <span className="text-white/90">Same-day Appointments Available</span>
                </div>
              </div>
              <Button
                className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                asChild
              >
                <Link to="/contact">Get Help Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
