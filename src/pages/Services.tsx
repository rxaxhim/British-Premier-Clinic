import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Phone, Calendar, Users, Brain, Heart, School, Building, Star, Globe, ArrowLeftRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  category: string;
}

const services: Service[] = [
  // For Adults
  {
    id: "psychiatry-adult",
    title: "Psychiatry",
    description: "Medical diagnosis and evidence-based treatment for mood, anxiety, trauma, bipolar, and psychotic disorders.",
    fullDescription:
      "Our board-certified psychiatrists provide comprehensive medical diagnosis and evidence-based treatment for a wide range of mental health conditions including mood disorders, anxiety disorders, trauma-related conditions, bipolar disorder, and psychotic disorders. We offer integrated care with medication management, ensuring personalized treatment plans that address your unique needs and circumstances.",
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    category: "adults",
  },
  {
    id: "psychology-adult",
    title: "Psychology",
    description: "Individual therapy using CBT, DBT, ACT, and trauma-informed approaches.",
    fullDescription:
      "Our licensed psychologists provide individual therapy using evidence-based approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), and trauma-informed care. These therapeutic interventions help adults reduce symptoms, build resilience, and improve daily functioning while developing healthy coping strategies.",
    icon: <Heart className="h-6 w-6 text-red-500" />,
    category: "adults",
  },
  {
    id: "mental-health-assessments",
    title: "Comprehensive Mental Health Assessments",
    description: "In-depth evaluations to clarify diagnosis and guide personalized treatment plans.",
    fullDescription:
      "Our comprehensive mental health assessments involve in-depth evaluations of medical, psychological, cognitive, and behavioral factors. These thorough assessments help clarify diagnoses and guide the development of personalized treatment plans tailored to your specific needs and goals.",
    icon: <Users className="h-6 w-6 text-purple-600" />,
    category: "adults",
  },
  {
    id: "womens-mental-health",
    title: "Women's Mental Health",
    description: "Care tailored to hormonal, reproductive, and life-stage needs.",
    fullDescription:
      "Specialized care addressing the unique mental health needs of women throughout different life stages. Our services include treatment for PMS/PMDD, comprehensive perinatal and postpartum mental health support, and management of menopause-related mental health concerns, all delivered with understanding of hormonal and reproductive factors.",
    icon: <Heart className="h-6 w-6 text-pink-500" />,
    category: "adults",
  },
  {
    id: "tms-therapy",
    title: "Transcranial Magnetic Stimulation (TMS)",
    description: "Non-invasive brain stimulation for treatment-resistant depression.",
    fullDescription:
      "TMS is a non-invasive brain stimulation treatment option for treatment-resistant depression and other mental health conditions. Delivered by our trained clinicians, TMS therapy uses magnetic fields to stimulate nerve cells in the brain, offering hope for those who haven't responded to traditional treatments.",
    icon: <Brain className="h-6 w-6 text-indigo-600" />,
    category: "adults",
  },
  {
    id: "couples-therapy-adult",
    title: "Couples Therapy",
    description: "Structured sessions to rebuild trust and enhance communication.",
    fullDescription:
      "Our couples therapy sessions are designed to rebuild trust, enhance communication, and resolve conflicts for healthier, more connected relationships. Using evidence-based approaches, we help couples develop better understanding, improve intimacy, and create lasting positive changes in their relationship dynamics.",
    icon: <Heart className="h-6 w-6 text-rose-500" />,
    category: "adults",
  },

  // For Children & Adolescents
  {
    id: "child-psychology",
    title: "Child & Adolescent Psychology",
    description: "Developmentally attuned therapy for anxiety, depression, trauma, and behavior issues.",
    fullDescription:
      "Our child and adolescent psychologists provide developmentally appropriate therapy for young people experiencing anxiety, depression, trauma, behavioral issues, and autism spectrum conditions. We use age-appropriate therapeutic techniques that engage children and adolescents while addressing their unique developmental needs.",
    icon: <Heart className="h-6 w-6 text-green-500" />,
    category: "children",
  },
  {
    id: "child-psychiatry",
    title: "Child & Adolescent Psychiatry",
    description: "Diagnostic reviews and medication management coordinated with family and school.",
    fullDescription:
      "Our child and adolescent psychiatrists provide comprehensive diagnostic reviews and medication management when needed. We work closely with families and schools to ensure coordinated care that supports the child's overall development and wellbeing in all environments.",
    icon: <Brain className="h-6 w-6 text-teal-600" />,
    category: "children",
  },
  {
    id: "school-readiness",
    title: "School Readiness Program",
    description: "Preparatory support for pre-K and early grades.",
    fullDescription:
      "Our school readiness program provides preparatory support for children entering pre-K and early grades. We focus on developing attention skills, self-regulation, fine motor abilities, and social-emotional skills that are essential for academic success and positive school experiences.",
    icon: <School className="h-6 w-6 text-amber-600" />,
    category: "children",
  },
  // {
  //   id: "adhd-management-child",
  //   title: "ADHD Management",
  //   description: "Comprehensive assessment, behavioral strategies, and parent coaching.",
  //   fullDescription:
  //     "Our ADHD management program includes comprehensive assessment, evidence-based behavioral strategies, parent coaching, and medication management when appropriate. We provide ongoing support to help children and families develop effective strategies for managing ADHD symptoms at home and school.",
  //   icon: <Brain className="h-6 w-6 text-orange-600" />,
  //   category: "children",
  // },
  {
    id: "social-skills-training",
    title: "Social Skills Training",
    description: "Small-group or individual coaching to build communication and peer relationships.",
    fullDescription:
      "Our social skills training programs help children and adolescents develop better communication abilities, perspective-taking skills, and healthy peer relationships. Available in both small-group and individual formats, these programs are tailored to each child's developmental level and social needs.",
    icon: <Users className="h-6 w-6 text-cyan-600" />,
    category: "children",
  },
  {
    id: "developmental-assessments",
    title: "Neurodevelopmental Assessments & Treatments including ADHD & Autism",
    description: "Testing for learning differences, giftedness, autism, and developmental delays.",
    fullDescription:
      "Comprehensive testing and assessment services to identify learning differences, giftedness, autism spectrum conditions, and developmental delays. These assessments provide valuable insights that guide educational planning and therapeutic interventions to support each child's unique strengths and needs.",
    icon: <School className="h-6 w-6 text-emerald-600" />,
    category: "children",
  },

  // For Schools
  {
    id: "school-psychiatric-evaluations",
    title: "Psychiatric Evaluations",
    description: "Consultation and diagnostic input to inform individualized school plans.",
    fullDescription:
      "We provide psychiatric evaluations and consultation services to schools, offering diagnostic input that informs individualized education plans and appropriate referrals. Our evaluations help school teams better understand students' mental health needs and develop effective support strategies.",
    icon: <Brain className="h-6 w-6 text-violet-600" />,
    category: "schools",
  },
  {
    id: "school-assessments",
    title: "School-Based Assessments",
    description: "Educational and psychological testing to identify learning styles and support needs.",
    fullDescription:
      "Our school-based assessment services include educational and psychological testing designed to identify students' learning styles, strengths, and support needs. These assessments help educators develop targeted interventions and accommodations that promote academic success.",
    icon: <School className="h-6 w-6 text-blue-500" />,
    category: "schools",
  },
  {
    id: "school-crisis-support",
    title: "Grief & Crisis Support",
    description: "On-site or virtual services to help students and staff process loss.",
    fullDescription:
      "We provide immediate grief and crisis support services to schools, available both on-site and virtually. Our trained professionals help students and staff process loss, trauma, and critical incidents while working to restore safety and stability in the school environment.",
    icon: <Heart className="h-6 w-6 text-red-600" />,
    category: "schools",
  },
  {
    id: "school-behavior-management",
    title: "Behavior Management (PBIS-aligned)",
    description: "Data-driven plans and teacher coaching to reduce disruptive behavior.",
    fullDescription:
      "Our behavior management services align with Positive Behavioral Interventions and Supports (PBIS) frameworks. We provide data-driven behavior plans, teacher coaching, and progress monitoring to effectively reduce disruptive behaviors and promote positive school climates.",
    icon: <Users className="h-6 w-6 text-lime-600" />,
    category: "schools",
  },

  // For Couples
  {
    id: "couples-psychiatric-evaluations",
    title: "Psychiatric Evaluations for Couples",
    description: "Assessment of individual and relational mental health factors.",
    fullDescription:
      "Comprehensive psychiatric evaluations that assess both individual and relational mental health factors impacting the partnership. These evaluations help identify underlying mental health conditions that may be affecting the relationship and guide appropriate treatment planning.",
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    category: "couples",
  },
  {
    id: "couples-therapy",
    title: "Couples Therapy",
    description: "Evidence-based frameworks to strengthen connection and resolve conflict.",
    fullDescription:
      "Our couples therapy services utilize evidence-based frameworks such as Emotionally Focused Therapy (EFT) and Gottman Method to strengthen emotional connection and effectively resolve conflicts. We help couples develop better communication skills and rebuild intimacy in their relationships.",
    icon: <Heart className="h-6 w-6 text-pink-600" />,
    category: "couples",
  },
  {
    id: "relationship-awareness",
    title: "Relationship Awareness Program",
    description: "Proactive skills training to deepen compatibility and intimacy.",
    fullDescription:
      "A proactive program designed to enhance relationship satisfaction through skills training that deepens compatibility, intimacy, and long-term satisfaction. This preventive approach helps couples strengthen their bond before problems arise.",
    icon: <Heart className="h-6 w-6 text-rose-400" />,
    category: "couples",
  },
  {
    id: "couples-grief-management",
    title: "Grief Management for Couples",
    description: "Joint support to process shared or individual losses.",
    fullDescription:
      "Specialized grief counseling for couples processing shared or individual losses. We provide joint support to help partners navigate grief together, rebuild their relationship after loss, and find ways to honor their experiences while moving forward.",
    icon: <Heart className="h-6 w-6 text-indigo-500" />,
    category: "couples",
  },

  // For Corporates
  {
    id: "employee-assistance",
    title: "Employee Assistance Program (EAP)",
    description: "Confidential counseling and crisis response to improve employee well-being.",
    fullDescription:
      "Comprehensive Employee Assistance Programs offering confidential counseling, crisis response, and referral services that improve employee well-being and productivity. Our EAP services provide immediate support for personal and work-related challenges affecting your workforce.",
    icon: <Building className="h-6 w-6 text-gray-600" />,
    category: "corporates",
  },
  {
    id: "aviation-mental-health",
    title: "Aviation Sector Mental Health",
    description: "Tailored programs for flight crews addressing stress and performance.",
    fullDescription:
      "Specialized mental health programs tailored specifically for aviation professionals, including flight crews and aviation staff. Our services address unique challenges such as sleep disruption, high-stress environments, and safety-critical performance requirements in the aviation industry.",
    icon: <Building className="h-6 w-6 text-sky-600" />,
    category: "corporates",
  },
  {
    id: "executive-coaching",
    title: "Transformational Executive Coaching",
    description: "1:1 leadership coaching to enhance emotional intelligence and decision-making.",
    fullDescription:
      "Personalized executive coaching focused on transformational leadership development. Our 1:1 coaching enhances emotional intelligence, improves decision-making capabilities, and increases executive influence and effectiveness in complex organizational environments.",
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    category: "corporates",
  },
  {
    id: "resilience-building",
    title: "Resilience-Building Programs",
    description: "Customized training to strengthen coping and psychological safety.",
    fullDescription:
      "Customized organizational training programs designed to strengthen employee coping skills, adaptability, and psychological safety. These programs help build more resilient teams capable of thriving in challenging and changing work environments.",
    icon: <Building className="h-6 w-6 text-emerald-500" />,
    category: "corporates",
  },

  // Personalized Packages
  {
    id: "intensive-evaluation",
    title: "Intensive Mental & Medical Health Evaluation",
    description: "Comprehensive multi-disciplinary review for accurate diagnosis.",
    fullDescription:
      "A comprehensive, multi-disciplinary evaluation that fast-tracks accurate diagnosis and care planning. This intensive assessment integrates medical, psychological, and social factors to provide a complete understanding of your mental health needs and optimal treatment path.",
    icon: <Star className="h-6 w-6 text-amber-500" />,
    category: "personalized",
  },
  {
    id: "intensive-coaching",
    title: "Intensive Personalized Coaching",
    description: "High-touch daily or weekly coaching to accelerate growth.",
    fullDescription:
      "High-intensity, personalized coaching delivered through daily or weekly sessions designed to accelerate personal or professional growth. This intensive approach provides continuous support and guidance for rapid, sustainable positive changes in your life.",
    icon: <Star className="h-6 w-6 text-orange-500" />,
    category: "personalized",
  },
  {
    id: "life-changing-skills",
    title: "Life-Changing Skills",
    description: "Structured skill-building in emotional regulation and communication.",
    fullDescription:
      "A structured program focused on developing fundamental life skills including emotional regulation, effective communication, and sound decision-making. These evidence-based skill-building sessions create lasting positive changes in how you navigate life's challenges.",
    icon: <Star className="h-6 w-6 text-green-600" />,
    category: "personalized",
  },
  {
    id: "career-counselling",
    title: "Career Counselling",
    description: "Strengths discovery and transition planning for fulfilling career paths.",
    fullDescription:
      "Comprehensive career counseling services including strengths discovery, vocational testing, and transition planning to help you find and pursue fulfilling career paths. We help you align your talents, interests, and values with meaningful professional opportunities.",
    icon: <Star className="h-6 w-6 text-violet-500" />,
    category: "personalized",
  },

  // Community Services
  {
    id: "awareness-program",
    title: "Awareness Program",
    description: "Outreach talks and workshops to reduce stigma and promote early access to care.",
    fullDescription:
      "Comprehensive community outreach program including talks, workshops, and campaigns across Dubai designed to reduce mental health stigma, educate the public about mental health resources, and promote early access to care. We work to build a more informed and supportive community.",
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    category: "community",
  },
];

const ServiceModal = ({ service }: { service: Service }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="hover:bg-blue-500 hover:text-white hover:border-none">
          Read More
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {service.icon}
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-left">{service.fullDescription}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button asChild className="flex items-center gap-2">
            <Link to="/contact">
              <Calendar className="h-4 w-4 text-white" />
              Book Appointment
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="flex items-center gap-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-none"
          >
            <a href="tel:+971523052680" aria-label="Call Now">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Services = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("adults");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
      // Scroll to services section after a short delay to ensure content is rendered
      setTimeout(() => {
        const servicesSection = document.getElementById("services-section");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [searchParams]);

  const getServicesByCategory = (category: string) => {
    return services.filter((service) => service.category === category);
  };

  const getCategoryTitle = (category: string) => {
    const titles = {
      adults: "For Adults",
      children: "For Children & Adolescents",
      schools: "For Schools",
      couples: "For Couples",
      corporates: "For Corporates",
      personalized: "Personalized Packages",
      community: "Community Services",
    };
    return titles[category as keyof typeof titles] || category;
  };

  const getCategoryDescription = (category: string) => {
    const descriptions = {
      adults: "Comprehensive mental health services designed for adult patients",
      children: "Specialized care for children, adolescents, and their families",
      schools: "Professional support services for educational institutions",
      couples: "Relationship counseling and support for partners",
      corporates: "Workplace mental health and wellness programs",
      personalized: "Intensive, customized care packages for individual needs",
      community: "Community outreach and awareness programs",
    };
    return descriptions[category as keyof typeof descriptions] || "";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HeroBanner */}
      <HeroBanner
        eyebrow="Services"
        title="Our Services"
        description="Comprehensive psychiatry & psychology care assessments, therapy, and medication management tailored to you."
        badges={["Therapy & Assessments", "Medication Management"]}
      />

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Evidence-Based Mental Health Care</h2>
            <p className="text-lg text-muted-foreground">
              At our clinic, we believe that mental health care should be accessible, effective, and tailored to each
              individual's unique needs. Our comprehensive range of services spans across different age groups, settings,
              and specialized requirements, ensuring that everyone receives the care they deserve.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Expert Team</h3>
                <p className="text-muted-foreground">
                  Board-certified psychiatrists, licensed psychologists, and specialized therapists
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Personalized Care</h3>
                <p className="text-muted-foreground">
                  Treatment plans tailored to your specific needs, goals, and circumstances
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Evidence-Based</h3>
                <p className="text-muted-foreground">Treatments backed by scientific research and proven effectiveness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* ===== Filter bar ===== */}
            <div className="mb-8">
              {/* Mobile: horizontal scroller */}
              <div className="lg:hidden -mx-4 px-4">
                <div
                  className="
                    overflow-x-auto
                    [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                  "
                >
                  <TabsList
                    className="
                      inline-flex gap-2 min-w-max
                      bg-muted p-1 rounded-md
                    "
                    aria-label="Service categories"
                  >
                    <TabsTrigger value="adults" className="shrink-0 px-3 py-2 text-sm  data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900">
                      Adults
                    </TabsTrigger>
                    <TabsTrigger value="children" className="shrink-0 px-3 py-2 text-sm  data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900">
                      Children
                    </TabsTrigger>
                    <TabsTrigger value="schools" className="shrink-0 px-3 py-2 text-sm  data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900">
                      Schools
                    </TabsTrigger>
                    <TabsTrigger value="couples" className="shrink-0 px-3 py-2 text-sm  data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900">
                      Couples
                    </TabsTrigger>
                    <TabsTrigger value="corporates" className="shrink-0 px-3 py-2 text-sm  data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900">
                      Corporate
                    </TabsTrigger>
                    <TabsTrigger value="personalized" className="shrink-0 px-3 py-2 text-sm  data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900">
                      Personalized
                    </TabsTrigger>
                    <TabsTrigger value="community" className="shrink-0 px-3 py-2 text-sm  data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900">
                      Community
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Swipe hint (mobile only) */}
                <div className="mt-4 sm:hidden flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ArrowLeftRight className="h-4 w-4 motion-safe:animate-pulse" />
                  <span>Swipe to explore</span>
                </div>
              </div>

              {/* Desktop: tidy grid */}
              <div className="hidden lg:block">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 px-1 py-0">
                  <TabsTrigger className="h-10 shrink-0 px-3 text-sm data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900" value="adults">Adults</TabsTrigger>
                  <TabsTrigger className="h-10 shrink-0 px-3 text-sm data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900" value="children">Children</TabsTrigger>
                  <TabsTrigger className="h-10 shrink-0 px-3 text-sm data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900" value="schools">Schools</TabsTrigger>
                  <TabsTrigger className="h-10 shrink-0 px-3 text-sm data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900" value="couples">Couples</TabsTrigger>
                  <TabsTrigger className="h-10 shrink-0 px-3 text-sm data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900" value="corporates">Corporate</TabsTrigger>
                  <TabsTrigger className="h-10 shrink-0 px-3 text-sm data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900" value="personalized">Personalized</TabsTrigger>
                  <TabsTrigger className="h-10 shrink-0 px-3 text-sm data-[state=active]:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-950 data-[state=active]:via-blue-900 data-[state=active]:to-red-900" value="community">Community</TabsTrigger>
                </TabsList>
              </div>
            </div>
            {/* ===== End filter bar ===== */}

            {["adults", "children", "schools", "couples", "corporates", "personalized", "community"].map(
              (category) => (
                <TabsContent key={category} value={category} className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">{getCategoryTitle(category)}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      {getCategoryDescription(category)}
                    </p>
                    <Badge variant="secondary" className="text-sm">
                      {getServicesByCategory(category).length} Services Available
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getServicesByCategory(category).map((service) => (
                      <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            {service.icon}
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ServiceModal service={service} />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </section>


      {/* Why Choose Our Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Assessment</h3>
                    <p className="text-muted-foreground">
                      Every treatment begins with thorough evaluation to understand your unique needs and circumstances.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold mb-2">Collaborative Approach</h3>
                    <p className="text-muted-foreground">
                      We work with you, your family, and other providers to ensure coordinated, effective care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold mb-2">Culturally Sensitive</h3>
                    <p className="text-muted-foreground">
                      Our services respect and incorporate cultural backgrounds and values into treatment planning.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      We offer various appointment options including in-person, virtual, and crisis support services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Gradient (matches your spec) */}
      <section className="py-20 bg-muted/30 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="relative overflow-hidden text-white
                        bg-gradient-to-br from-blue-950 via-blue-900 to-red-900
                        rounded-none md:rounded-2xl
                        -mx-4 sm:-mx-6 md:mx-auto
                        px-4 sm:px-6 md:p-8 py-8
                        md:max-w-6xl md:shadow-lg md:ring-1 md:ring-white/10"
            >
              {/* subtle highlights like HeroBanner */}
              <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />

              <div className="relative text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Take the first step towards better mental health. Our compassionate team is here to support you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90" asChild>
                    <Link to="/contact">Book an Appointment</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-none text-blue-500 border-primary-foreground hover:bg-blue-500 hover:text-white hover:border-none"
                    asChild
                  >
                    <a href="tel:+971523052680" className="flex items-center justify-center gap-2" aria-label="Call us now">
                      <Phone className="h-4 w-4" />
                      <span>Call Us</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
