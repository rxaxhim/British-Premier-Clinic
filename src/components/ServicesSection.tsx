import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Heart,
  Users,
  Shield,
  Zap,
  Target,
  ArrowRight,
  Clock,
  Award,
  HeartHandshake,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
  featured: boolean;
  tabTrigger: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: Brain,
      title: "Child & Adolescent Psychiatry",
      description: "Specialized psychiatric care for children and teens, focusing on early diagnosis, emotional regulation, and family-centered treatment to support healthy development.",
      features: ["Early Intervention", "Developmental Assessments", "Collaborative Care Planning"],
      color: "secondary",
      featured: true,
      tabTrigger: "children"
    },
    {
      icon: Brain,
      title: "Adult Psychiatry",
      description: "Comprehensive mental health assessment and treatment for adults dealing with depression, anxiety, bipolar disorder, and other psychiatric conditions.",
      features: ["Medication Management", "Psychotherapy", "Crisis Intervention"],
      color: "primary",
      featured: true,
      tabTrigger: "adults"
    },
    {
      icon: Heart,
      title: "Child & Adolescent Psychology",
      description: "Specialized care for children and teenagers, addressing behavioral issues, learning difficulties, ADHD, and developmental challenges.",
      features: ["Family Therapy", "Behavioral Interventions", "School Consultation"],
      color: "secondary",
      featured: true,
      tabTrigger: "children"
    },
    {
      icon: Users,
      title: "Family Therapy",
      description: "Strengthen family relationships and improve communication through evidence-based family therapy approaches.",
      features: ["Couples Counseling", "Parent Training", "Conflict Resolution"],
      color: "accent",
      featured: true,
      tabTrigger: "couples"
    },
    {
      icon: Shield,
      title: "Trauma & PTSD Treatment",
      description: "Specialized treatment for trauma survivors using EMDR, CBT, and other evidence-based approaches for healing.",
      features: ["EMDR Therapy", "Cognitive Processing", "Exposure Therapy"],
      color: "medical-trust",
      featured: true,
      tabTrigger: "adults"
    },
    {
      icon: Zap,
      title: "Anxiety Disorders",
      description: "Comprehensive treatment for various anxiety disorders including GAD, panic disorder, phobias, and social anxiety.",
      features: ["CBT Techniques", "Mindfulness Training", "Exposure Therapy"],
      color: "medical-calm",
      featured: true,
      tabTrigger: "adults"
    },
    {
      icon: Target,
      title: "ADHD Assessment & Treatment",
      description: "Complete ADHD evaluation and personalized treatment plans for children, adolescents, and adults.",
      features: ["Comprehensive Testing", "Medication Management", "Behavioral Strategies"],
      color: "medical-warm",
      featured: true,
      tabTrigger: "children"
    },
    {
      icon: HeartHandshake,
      title: "Couples Therapy",
      description: "Evidence-based counseling to improve communication, rebuild trust, and strengthen connection.",
      features: ["Emotionally Focused Therapy (EFT)", "Gottman-informed strategies", "Conflict & repair skills"],
      color: "relationship-calm",
      featured: true,
      tabTrigger: "couples"
    },
    {
      icon: HeartPulse,
      title: "Women’s Mental Health",
      description: "Specialized care across PMS/PMDD, perinatal/postpartum, and menopause-related mental health.",
      features: ["Hormone-informed care", "Perinatal & postpartum support", "Trauma- & culture-sensitive"],
      color: "women-care",
      featured: true,
      tabTrigger: "adults"
    }
  ];

  const specialties = [
    "Evidence-Based Treatment",
    "Multilingual Support",
    "Flexible Scheduling",
    "Telehealth Options"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-4">
              Comprehensive Mental Health Services
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Expert Care for Every{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Stage of Life
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our team of experienced psychiatrists and psychologists provide personalized,
              evidence-based treatment tailored to your unique needs and circumstances.
            </p>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {specialties.map((specialty, index) => (
              <Badge
                key={specialty}
                variant="outline"
                className="animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            const isOdd = services.length % 2 === 1; // odd number of cards

            return (
              <Card
                key={service.title}
                className={`relative group hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-scale-in
                ${service.featured ? "ring-2 ring-primary/20 shadow-medium" : "hover:shadow-medium"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.featured && (
                  <Badge className="absolute -top-3 left-4 bg-gradient-primary text-primary-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                )}

                <CardHeader className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className={`h-6 w-6 text-${service.color}`} />
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Treatment Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <Link to={`/services?tab=${service.tabTrigger}#services-section`} className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>



        {/* Call to Action */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards better mental health. Our compassionate team is here to support you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              asChild
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Schedule Consultation</span>
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild className="border-primary text-blue-500 hover:bg-blue-500 hover:text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Confidential & Secure • DHA/CDA Licensed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;