import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Clock, 
  Globe, 
  Shield, 
  Heart,
  CheckCircle,
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Over a decade of providing premier mental health services in the UAE with outstanding patient outcomes.",
      stats: "95% Success Rate"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Board-certified psychiatrists and licensed psychologists with international training and experience.",
      stats: "20+ Specialists"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Flexible appointments available with evening and weekend hours to fit your busy lifestyle.",
      stats: "24/7 Support"
    },
    {
      icon: Globe,
      title: "Multilingual Care",
      description: "Services available in English, Arabic, Hindi, and Urdu to serve our diverse community.",
      stats: "5+ Languages"
    },
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "Strict confidentiality protocols and secure treatment environments for your peace of mind.",
      stats: "100% Confidential"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Patient-centered approach with personalized treatment plans tailored to individual needs.",
      stats: "4.9/5 Rating"
    }
  ];

  const certifications = [
    "DHA Licensed",
    "CDA Licensed",
    "MOH Approved", 
    "International Standards"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <Badge variant="secondary">
            Why Choose British Premier
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Leading Mental Health Care{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              in the UAE
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're committed to providing the highest standard of mental health care 
            with a focus on compassion, expertise, and measurable outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group rounded-xl border border-border/60 bg-gradient-card hover:border-border transition-all duration-300 hover:shadow-large hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.stats}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span>Verified & Trusted</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="animate-fade-in">
          {/* full-bleed on mobile, normal within container from md+ */}
          <div className="-mx-4 sm:-mx-6 md:mx-0">
            <div
              className="relative overflow-hidden text-white
                        bg-gradient-to-br from-blue-950 via-blue-900 to-red-900
                        rounded-none md:rounded-2xl
                        px-4 sm:px-6 md:p-10 py-8
                        md:shadow-lg md:ring-1 md:ring-white/10"
            >
              {/* subtle highlights like HeroBanner */}
              <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />

              <div className="relative text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                  <Shield className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium">Accredited &amp; Certified</span>
                </div>
                <h3 className="text-2xl font-bold">Trusted Standards of Care</h3>
                <p className="text-white/90 leading-relaxed">
                  We adhere to rigorous regulatory and quality benchmarks to ensure safe, effective, and ethical care.
                </p>
              </div>

              <div className="relative mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mx-auto max-w-3xl">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-3 ring-1 ring-white/15"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Shield className="h-5 w-5 text-white shrink-0" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
