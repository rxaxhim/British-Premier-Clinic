import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Clock, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import drSarahImg from "@/assets/sarah.jpg";
import drMichaelImg from "@/assets/michael.jpg";
import drEmilyImg from "@/assets/emily.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide empathetic, patient-centered care that prioritizes your comfort and well-being."
    },
    {
      icon: Shield,
      title: "Trust & Privacy",
      description: "Your privacy and trust are paramount. We maintain the highest standards of confidentiality."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from treatment to patient experience."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work together with you and your family to create personalized treatment plans."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "5,000+", label: "Patients Helped" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Director",
      credentials: "MD, PhD in Psychology",
      experience: "15 years",
      specialties: ["Anxiety Disorders", "Depression", "PTSD"],
      photo: drSarahImg, // 👈 new
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Psychiatrist",
      credentials: "MD, Board Certified",
      experience: "12 years",
      specialties: ["Bipolar Disorder", "Addiction", "Family Therapy"],
      photo: drMichaelImg, // 👈 new
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Child Psychologist",
      credentials: "PhD, Licensed Psychologist",
      experience: "10 years",
      specialties: ["Child Psychology", "ADHD", "Autism Spectrum"],
      photo: drEmilyImg, // 👈 new
    },
  ];

  const YEAR_PILL = "text-xs rounded-full px-2.5 py-0.5 bg-[hsl(var(--secondary))]/10 border border-[hsl(var(--secondary))]/25 text-[hsl(var(--secondary))]";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
      eyebrow="About"
      title="About Us"
      description="Dedicated psychiatry & psychology care grounded in science and compassion."
      badges={["Multidisciplinary team", "Evidence-based care"]}
      primaryCta={{
        label: "Schedule Consultation",
        href: "/British-Premier-Clinic/contact",
        className:
          "bg-gradient-primary text-primary-foreground hover:opacity-90 border-0 hover:text-primary-foreground",
      }}
      secondaryCta={{
        label: "Our Services",
        href: "/services",
        className:
          "bg-transparent border border-white text-white hover:bg-white hover:text-primary transition-all",
      }}
      />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-700 via-blue-600 to-red-700 bg-clip-text text-transparent mb-3">
                      {stat.number}
                    </div>
                    <div className="font-medium text-sm bg-gradient-to-br from-blue-700 via-blue-600 to-red-700 bg-clip-text text-transparent">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2009, our practice began with a simple mission: to make quality mental health care 
                    accessible and approachable for everyone in our community. What started as a small clinic has 
                    grown into a comprehensive mental health center.
                  </p>
                  <p>
                    We believe that mental health is just as important as physical health, and everyone deserves 
                    access to compassionate, professional care. Our team combines years of clinical experience 
                    with the latest research-based treatments.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of patients, offering everything from individual therapy 
                    to specialized treatment programs, all while maintaining the personal touch that has defined 
                    our practice from the beginning.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Background image */}
                  <img
                    src="https://plus.unsplash.com/premium_photo-1679429321023-dff2ea455b0c?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Blurred overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                  {/* Foreground content */}
                  <div className="relative text-center text-white">
                    <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-white/90 px-6">
                      Empowering individuals to achieve mental wellness through compassionate, evidence-based care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape the care we provide to our patients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Link to Full Doctor Profiles */}
        <div className="mt-12 md:mt-16">
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
              <h3 className="text-2xl font-semibold mb-4">Clinical Services</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Review our comprehensive suite of clinical services.
              </p>
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Card with background image */}
              <div className="order-2 md:order-1">
                <div className="aspect-square relative rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Background image */}
                  <img
                    src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
                    alt="Holistic approach background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Blurred overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                  {/* Foreground content */}
                  <div className="relative text-center text-white">
                    <Star className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
                    <p className="text-white/90 px-6">
                      We treat the whole person, not just symptoms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We believe that mental health is a journey, not a destination. Every individual comes to us 
                    with unique experiences, challenges, and strengths. Our approach is to meet you where you are 
                    and walk alongside you on your path to wellness.
                  </p>
                  <p>
                    Our treatment philosophy is grounded in evidence-based practices while recognizing the 
                    importance of cultural sensitivity, individual preferences, and collaborative care. We 
                    integrate traditional therapeutic approaches with innovative techniques to create 
                    personalized treatment plans.
                  </p>
                  <p>
                    We also believe in the power of prevention and education. By providing resources, workshops, 
                    and community outreach programs, we aim to reduce stigma and promote mental health awareness 
                    throughout our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Sensitivity Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Cultural Sensitivity</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We honor and respect the diverse cultural backgrounds of our patients, integrating traditional 
                    values with modern psychiatric care. Our approach recognizes that mental health treatment must 
                    align with cultural beliefs and family dynamics.
                  </p>
                  <p>
                    Our multilingual team ensures that language is never a barrier to receiving quality care. 
                    We understand that feeling heard and understood in your native language is crucial for 
                    effective treatment.
                  </p>
                  <p>
                    Cultural competency isn't just a practice for us—it's a core value that shapes every 
                    interaction and treatment plan we develop.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-muted-foreground font-medium">Languages Spoken</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Ensuring effective communication across diverse communities
                    </p>
                  </div>
                </div>
              </div>

              {/* Card with background image */}
              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Background image */}
                  <img
                    src="https://images.unsplash.com/photo-1651421479704-470a78eef530?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Culturally inclusive care background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Blurred overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                  {/* Foreground content */}
                  <div className="relative text-center text-white">
                    <Users className="h-20 w-20 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Culturally Inclusive Care</h3>
                    <p className="text-white/90 px-6">
                      Respecting traditions while delivering excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by professional organizations and the community.
              </p>
            </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="rounded-xl border border-border/60 bg-gradient-to-br from-primary/5 to-transparent shadow-sm hover:shadow-md hover:border-border/80 transition-all">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Best Mental Health Practice 2023</h3>
                    <p className="text-sm text-muted-foreground">Regional Healthcare Excellence Awards</p>
                  </CardContent>
                </Card>

                <Card className="rounded-xl border border-border/60 bg-gradient-to-br from-secondary/5 to-transparent shadow-sm hover:shadow-md hover:border-border/80 transition-all">
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Community Impact Award</h3>
                    <p className="text-sm text-muted-foreground">City Health & Wellness Initiative</p>
                  </CardContent>
                </Card>

                <Card className="rounded-xl border border-border/60 bg-gradient-to-br from-accent/5 to-transparent shadow-sm hover:shadow-md hover:border-border/80 transition-all">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Patient Choice Award</h3>
                    <p className="text-sm text-muted-foreground">State Medical Association</p>
                  </CardContent>
                </Card>
              </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 relative overflow-hidden text-white bg-gradient-to-br from-blue-950 via-blue-900 to-red-900">
        {/* subtle hero-style highlights */}
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Real stories from real people who have found healing and hope through our care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">
                    "The compassionate care I received here changed my life. The staff truly listens and
                    creates a safe space for healing."
                  </p>
                  <p className="font-semibold text-white">- Sarah M.</p>
                </CardContent>
              </Card>

              <Card className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">
                    "Professional, caring, and effective. I finally found the help I needed after struggling
                    for years with anxiety."
                  </p>
                  <p className="font-semibold text-white">- Michael R.</p>
                </CardContent>
              </Card>

              <Card className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">
                    "The team approach here is amazing. Everyone works together to ensure the best care
                    possible. Highly recommend!"
                  </p>
                  <p className="font-semibold text-white">- Jennifer L.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Community Involvement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Involvement</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're committed to supporting mental health awareness and education in our community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Initiatives</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Mental Health Workshops</h4>
                      <p className="text-muted-foreground text-sm">
                        Free monthly workshops on stress management, mindfulness, and emotional wellness.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">School Partnerships</h4>
                      <p className="text-muted-foreground text-sm">
                        Collaborating with local schools to provide mental health education and support.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Crisis Support</h4>
                      <p className="text-muted-foreground text-sm">
                        24/7 crisis intervention and support services for those in immediate need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card with background image */}
              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Background image */}
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Community background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Blurred overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                  {/* Foreground content */}
                  <div className="relative text-center text-white">
                    <Users className="h-20 w-20 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Community First</h3>
                    <p className="text-white/90 px-6">
                      Building a stronger, healthier community together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our experienced professionals are dedicated to providing you with the highest quality care.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/5] bg-muted">
                    {member.photo ? (
                      <>
                        <img
                          src={member.photo}
                          alt={`${member.name} – ${member.role}`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover"
                          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        />
                        {/* subtle top gradient for text separation if needed later */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                        <Users className="h-16 w-16 text-primary" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.credentials}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{member.experience}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Link to Full Doctor Profiles */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Want to learn more about our doctors and their expertise?
              </p>
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90" size="lg" asChild>
                <Link to="/doctors">View All Doctor Profiles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Success Metrics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our success is measured not just in clinical outcomes, but in cultural satisfaction and the trust our patients place in us.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="border-0 shadow-sm bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <h3 className="font-semibold mb-2">Cultural Satisfaction</h3>
                  <p className="text-sm text-muted-foreground">
                    Patients report feeling culturally understood and respected
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-gradient-to-br from-secondary/5 to-transparent">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">94%</div>
                  <h3 className="font-semibold mb-2">Clinical Outcomes</h3>
                  <p className="text-sm text-muted-foreground">
                    Patients achieve significant improvement within 12 weeks
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-gradient-to-br from-accent/5 to-transparent">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">96%</div>
                  <h3 className="font-semibold mb-2">Patient Retention</h3>
                  <p className="text-sm text-muted-foreground">
                    Patients continue their treatment journey with us
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">87%</div>
                  <h3 className="font-semibold mb-2">Patient Referrals</h3>
                  <p className="text-sm text-muted-foreground">
                    Patients actively recommend our services to others
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Key Performance Indicators</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <p className="text-sm text-muted-foreground">Cultural sensitivity acknowledged</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">96%</div>
                  <p className="text-sm text-muted-foreground">Family involvement satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">94%</div>
                  <p className="text-sm text-muted-foreground">Language accommodation rated excellent</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <p className="text-sm text-muted-foreground">Religious considerations respected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Accreditations & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Accreditations & Certifications</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence is validated by prestigious certifications from leading medical institutions across the UK and UAE.
              </p>
            </div>
            
            {/* Medical Certifications */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Medical Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="h-8 w-8 text-primary" />
                      <Badge variant="outline" className={YEAR_PILL}>2018</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">Royal College of Psychiatrists</h4>
                    <p className="text-sm text-muted-foreground mb-2">Full membership and certification in psychiatric practice</p>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                      <Badge variant="outline" className={YEAR_PILL}>2015</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">General Medical Council (UK)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Licensed medical practitioner with specialist registration</p>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Star className="h-8 w-8 text-primary" />
                      <Badge variant="outline" className={YEAR_PILL}>2017</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">British Psychological Society</h4>
                    <p className="text-sm text-muted-foreground mb-2">Chartered psychologist status and continuing professional development</p>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* UAE Healthcare Licenses */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">UAE Healthcare Licenses</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Heart className="h-8 w-8 text-secondary" />
                      <Badge variant="outline" className={YEAR_PILL}>2018</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">Dubai Health Authority</h4>
                    <p className="text-sm text-muted-foreground mb-2">Licensed healthcare provider in Dubai with full practice authorization</p>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Shield className="h-8 w-8 text-secondary" />
                      <Badge variant="outline" className={YEAR_PILL}>2018</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">UAE Ministry of Health</h4>
                    <p className="text-sm text-muted-foreground mb-2">National healthcare provider license with specialist endorsement</p>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Users className="h-8 w-8 text-secondary" />
                      <Badge variant="outline" className={YEAR_PILL}>2019</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">Dubai Healthcare City</h4>
                    <p className="text-sm text-muted-foreground mb-2">Authorized healthcare facility within premium medical district</p>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quality & Cultural Certifications */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">Quality & Cultural Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="h-8 w-8 text-accent" />
                      <Badge variant="outline" className={YEAR_PILL}>2020</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">ISO 9001:2015</h4>
                    <p className="text-sm text-muted-foreground mb-2">Quality management systems certification for healthcare services</p>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Users className="h-8 w-8 text-accent" />
                      <Badge variant="outline" className={YEAR_PILL}>2019</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">Cultural Competency Institute</h4>
                    <p className="text-sm text-muted-foreground mb-2">Advanced certification in cross-cultural healthcare delivery</p>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Star className="h-8 w-8 text-accent" />
                      <Badge variant="outline" className={YEAR_PILL}>2021</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">Joint Commission International</h4>
                    <p className="text-sm text-muted-foreground mb-2">International healthcare quality and patient safety standards</p>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Verification Summary */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6">Verified & Trusted</h3>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
                All our certifications and licenses are current, verified, and publicly accessible. We maintain the highest 
                standards of transparency and accountability in our practice, ensuring patients receive care that meets both 
                British medical excellence and UAE healthcare standards.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">9</div>
                  <div className="text-sm text-muted-foreground">Active Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">7</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Countries Licensed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step towards better mental health. We're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90" asChild>
                <Link to="/contact">Book Your Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;