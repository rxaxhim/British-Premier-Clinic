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
  CheckCircle,
  ClipboardPlus
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import brandLogo from "@/assets/BP-logo.png"; // big logo at the top
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const stats = [
    { icon: Award, label: "Years of Experience Internationally", value: "35+", color: "text-amber-300" },
    { icon: Heart, label: "Patients Treated by Our Clinicians", value: "10K+", color: "text-rose-400" },
    // { icon: Shield, label: "Success Rate", value: "95%", color: "text-emerald-300" },
    // { icon: Star, label: "Patient Rating", value: "4.9/5", color: "text-yellow-300" }
  ];

  const features = [
    "Experienced Psychiatrists & Psychologists",
    "Evidence-Based Treatment Methods",
    "DHA/CDA Licensed & Regulated",
    "Flexible Appointment Scheduling"
  ];

  return (
    <section className="relative min-h-[90svh] md:min-h-screen flex items-center justify-center overflow-hidden bg-white md:bg-transparent">
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
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" /> */}

      {/* Content (logo is its own row, in flow) */}
      <div className="relative z-10 container mx-auto px-4 pt-4 sm:pt-6 md:pt-8 pb-16 md:pb-18">
        {/* Top logo row — centered, reduced bottom margin */}
        <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
          <img
            src={brandLogo}
            alt="British Premier logo"
            className="w-[65vw] max-w-[22rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem] xl:max-w-[36rem] h-auto drop-shadow-2xl"
            loading="eager"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="relative">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-2xl  border border-white/20" />
            <div className="relative space-y-8 p-6 sm:p-8 rounded-2xl animate-fade-in-up">
              <div className="space-y-5">
                <div className="flex justify-center sm:justify-start">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30 backdrop-blur-sm uppercase tracking-wider"
                  >
                    Premier Mental Health Care in UAE
                  </Badge>
                </div>

                <h1 className="text-center sm:text-left text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Expert Mental Health Care{" "}
                  <span className="bg-gradient-to-br from-sky-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-md">
                    Within Reach
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Professional psychiatric and psychological services providing compassionate,
                  evidence-based treatments/intervention for Children, Adolescents, Adults, and Families across the UAE.
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
                  <Link to="/contact" className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Appointment</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white bg-white/10 backdrop-blur-sm font-semibold hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-colors"
                  asChild
                >
                  <Link to="/services" className="flex items-center space-x-2">
                    <ClipboardPlus className="h-5 w-5" />
                    <span>Explore Services</span>
                  </Link>
                </Button>
              </div>
            </div>
            {/* Trust */}
            {/* <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <span className="text-white/90 text-sm">4.9/5 Patient Rating</span>
              </div>
              <div className="text-white/90 text-sm">✓ DHA Licensed &amp; Regulated</div>
            </div> */}
          </div>

          {/* Right Column */}
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-black/15 transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* colored icon */}
                  <stat.icon className={`h-8 w-8 mb-3 ${stat.color}`} />
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Card */}
            <div className= "bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-4 tracking-tight">Need Assistance?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent-light" />
                  <span className="text-white/90">Confidential enquiries (non-emergency)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-accent-light" />
                  <span className="text-white/90">Flexible appointments available</span>
                </div>
              </div>

              <Button
                variant="outline"
                asChild
                className="w-full mt-4 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-none"
              >
                <a
                  href="https://wa.me/971526372821"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                  aria-label="Message on WhatsApp"
                >
                  <FaWhatsapp className="h-5 w-5 transition-transform duration-200 ease-out group-hover:scale-110" />
                  Message on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-float">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;