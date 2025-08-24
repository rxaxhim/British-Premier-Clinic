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
      title: "15+ Years Excellence",
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
      description: "Same-day appointments available with evening and weekend hours to fit your busy lifestyle.",
      stats: "24/7 Support"
    },
    {
      icon: Globe,
      title: "Multilingual Care",
      description: "Services available in English, Arabic, Hindi, Urdu, and French to serve our diverse community.",
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
    "MOH Approved", 
    "ISO Certified",
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
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-scale-in border-0 bg-gradient-card"
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
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left - Certifications */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Accredited & Certified
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our clinic meets the highest international standards for mental health care, 
                ensuring you receive safe, effective, and ethical treatment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={cert}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Patient Testimonial */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed">
                  "The care I received at British Premier was exceptional. The team's 
                  compassion and expertise helped me through my most challenging times. 
                  I highly recommend their services to anyone seeking mental health support."
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Verified Patient</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Patients Served</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-secondary">4.9</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">95%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;