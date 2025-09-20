import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Calendar, Award, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface Clinician {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  experience: string;
  education: string[];
  certifications: string[];
  bio: string;
  email: string;
  phone: string;
  image: string;
  availability: string;
}

const clinicians: Clinician[] = [
  {
    id: "1",
    name: "Dr. Sarah Mitchell",
    title: "Clinical Psychologist",
    specializations: ["Anxiety Disorders", "Depression", "Cognitive Behavioral Therapy"],
    experience: "12+ years",
    education: ["PhD in Clinical Psychology - University of Toronto", "MSc in Psychology - McGill University"],
    certifications: ["Licensed Clinical Psychologist", "CBT Specialist Certification"],
    bio: "Dr. Sarah Mitchell is a dedicated clinical psychologist with over 12 years of experience in treating anxiety disorders and depression. She specializes in Cognitive Behavioral Therapy and has helped hundreds of patients overcome their mental health challenges. Dr. Mitchell believes in a collaborative approach to therapy, working closely with her patients to develop personalized treatment plans.",
    email: "s.mitchell@britishpremier.com",
    phone: "(416) 555-0123",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    availability: "Monday - Friday, 9:00 AM - 5:00 PM"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    title: "Psychiatrist",
    specializations: ["Bipolar Disorder", "ADHD", "Medication Management"],
    experience: "15+ years",
    education: ["MD - University of British Columbia", "Psychiatry Residency - Toronto General Hospital"],
    certifications: ["Royal College of Physicians and Surgeons of Canada", "ADHD Specialist"],
    bio: "Dr. Michael Chen is a board-certified psychiatrist with extensive experience in treating mood disorders and ADHD. He takes a comprehensive approach to mental health care, combining medication management with therapeutic interventions. Dr. Chen is known for his patient-centered approach and his ability to help patients find the right treatment balance.",
    email: "m.chen@britishpremier.com",
    phone: "(416) 555-0124",
    image: "https://images.pexels.com/photos/29995617/pexels-photo-29995617.jpeg",
    availability: "Tuesday - Saturday, 8:00 AM - 4:00 PM"
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    title: "Clinical Social Worker",
    specializations: ["Family Therapy", "Trauma Counseling", "Addiction Recovery"],
    experience: "10+ years",
    education: ["MSW - University of Toronto", "BSW - York University"],
    certifications: ["Registered Social Worker (RSW)", "Trauma-Informed Care Specialist"],
    bio: "Dr. Emily Rodriguez is a compassionate clinical social worker who specializes in family therapy and trauma counseling. She has extensive experience working with individuals and families affected by trauma and addiction. Dr. Rodriguez uses evidence-based practices to help her clients heal and build stronger relationships.",
    email: "e.rodriguez@britishpremier.com",
    phone: "(416) 555-0125",
    image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg",
    availability: "Monday - Thursday, 10:00 AM - 6:00 PM"
  },
  {
    id: "4",
    name: "Dr. James Thompson",
    title: "Child & Adolescent Psychologist",
    specializations: ["Child Psychology", "Autism Spectrum Disorders", "Behavioral Therapy"],
    experience: "8+ years",
    education: ["PhD in Developmental Psychology - McMaster University", "MA in Child Psychology - University of Waterloo"],
    certifications: ["Licensed Child Psychologist", "Applied Behavior Analysis (ABA) Certified"],
    bio: "Dr. James Thompson specializes in working with children and adolescents, particularly those on the autism spectrum. He uses play therapy and behavioral interventions to help young clients develop important life skills. Dr. Thompson works closely with families to create supportive environments for children's growth and development.",
    email: "j.thompson@britishpremier.com",
    phone: "(416) 555-0126",
    image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg",
    availability: "Monday - Friday, 9:00 AM - 3:00 PM"
  },
  {
    id: "5",
    name: "Dr. Lisa Park",
    title: "Neuropsychologist",
    specializations: ["Memory Disorders", "Cognitive Assessment", "Brain Injury Recovery"],
    experience: "14+ years",
    education: ["PhD in Neuropsychology - University of Western Ontario", "MSc in Neuroscience - Queen's University"],
    certifications: ["Board Certified Neuropsychologist", "Cognitive Rehabilitation Specialist"],
    bio: "Dr. Lisa Park is a skilled neuropsychologist who specializes in cognitive assessment and rehabilitation. She works with patients who have experienced brain injuries, memory disorders, and other neurological conditions. Dr. Park uses comprehensive testing and evidence-based interventions to help patients optimize their cognitive functioning.",
    email: "l.park@britishpremier.com",
    phone: "(416) 555-0127",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
    availability: "Wednesday - Sunday, 8:00 AM - 4:00 PM"
  },
  {
    id: "6",
    name: "Dr. Robert Kumar",
    title: "Counseling Psychologist",
    specializations: ["Couples Therapy", "Grief Counseling", "Stress Management"],
    experience: "11+ years",
    education: ["PhD in Counseling Psychology - University of Calgary", "MA in Clinical Psychology - Carleton University"],
    certifications: ["Licensed Counseling Psychologist", "Gottman Method Couples Therapy"],
    bio: "Dr. Robert Kumar is an experienced counseling psychologist who helps individuals and couples navigate life's challenges. He specializes in relationship counseling, grief therapy, and stress management. Dr. Kumar believes in creating a safe, non-judgmental space where clients can explore their feelings and develop healthy coping strategies.",
    email: "r.kumar@britishpremier.com",
    phone: "(416) 555-0128",
    image: "https://images.pexels.com/photos/4270371/pexels-photo-4270371.jpeg",
    availability: "Tuesday - Saturday, 11:00 AM - 7:00 PM"
  }
];

const Doctors = () => {
  const [selectedClinician, setSelectedClinician] = useState<Clinician | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* HeroBanner */}
      <HeroBanner
        eyebrow="Clinicians"
        title="Our Clinicians"
        description="Meet our team of psychiatrists, psychologists, and therapists."
        badges={["Board-certified", "Evidence-based care"]}
      />

      {/* Clinicians Grid */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch ${
            clinicians.length % 3 === 1 ? "justify-items-center" : ""
          }`}
        >
          {clinicians.map((clinician, index) => (
            <Card
              key={clinician.id}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
                flex flex-col h-full
                ${
                  clinicians.length % 3 === 1 && index === clinicians.length - 1
                    ? "lg:col-span-3 lg:max-w-md lg:mx-auto"
                    : ""
                }`}
            >
              <CardHeader className="text-center pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage
                    src={clinician.image}
                    alt={clinician.name}
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback className="text-xl font-bold">
                    {clinician.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-card-foreground">{clinician.name}</h3>
                <p className="text-primary font-semibold">{clinician.title}</p>
                <Badge variant="secondary" className="mt-2">
                  {clinician.experience} Experience
                </Badge>
              </CardHeader>

              {/* 👇 CardContent grows to fill height, button pinned bottom */}
              <CardContent className="space-y-4 flex flex-col flex-grow">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinician.specializations.slice(0, 2).map((spec, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}

                      {clinician.specializations.length > 2 && (
                        <div className="w-full">
                          <Badge variant="outline" className="text-xs">
                            +{clinician.specializations.length - 2} more
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>


                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{clinician.availability}</span>
                </div>

                {/* 👇 pinned to bottom */}
                <div className="mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full border-primary text-blue-500 hover:bg-blue-500 hover:text-white"
                        variant="outline"
                        onClick={() => setSelectedClinician(clinician)}
                      >
                        Read More
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      {/* <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{clinician.name}</DialogTitle>
                      </DialogHeader> */}

                      {/* --- dialog body unchanged --- */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Profile Image and Basic Info */}
                        <div className="md:col-span-1 space-y-4">
                          <Avatar className="w-32 h-32 mx-auto">
                            <AvatarImage
                              src={clinician.image}
                              alt={clinician.name}
                              className="object-cover w-full h-full"
                            />
                            <AvatarFallback className="text-2xl font-bold">
                              {clinician.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="text-center">
                            <h3 className="text-xl font-bold">{clinician.name}</h3>
                            <p className="text-primary font-semibold">{clinician.title}</p>
                            <Badge variant="secondary" className="mt-2">
                              {clinician.experience} Experience
                            </Badge>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="w-4 h-4 text-primary" />
                              <a href={`mailto:${clinician.email}`} className="hover:text-primary">
                                {clinician.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="w-4 h-4 text-primary" />
                              <a href={`tel:${clinician.phone}`} className="hover:text-primary">
                                {clinician.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span>{clinician.availability}</span>
                            </div>
                          </div>
                        </div>

                        {/* Detailed Info */}
                        <div className="md:col-span-2 space-y-6">
                          {/* Bio */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <Users className="w-5 h-5 text-primary" />
                              About
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">{clinician.bio}</p>
                          </div>

                          {/* Specializations */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <Award className="w-5 h-5 text-primary" />
                              Specializations
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {clinician.specializations.map((spec, idx) => (
                                <Badge key={idx} variant="secondary">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Education */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <BookOpen className="w-5 h-5 text-primary" />
                              Education
                            </h4>
                            <ul className="space-y-2">
                              {clinician.education.map((edu, idx) => (
                                <li key={idx} className="text-muted-foreground">
                                  • {edu}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Certifications */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <Award className="w-5 h-5 text-primary" />
                              Certifications
                            </h4>
                            <ul className="space-y-2">
                              {clinician.certifications.map((cert, idx) => (
                                <li key={idx} className="text-muted-foreground">
                                  • {cert}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-6">
                        <Button className="flex-1" asChild>
                          <Link to="/contact">Book Appointment</Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-primary text-blue-500 hover:bg-blue-500 hover:text-white"
                          asChild
                        >
                          <a href={`mailto:${clinician.email}`}>Send Email</a>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>


      {/* Our Approach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left max-w-2xl mx-auto md:max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Collaborative Approach to Care
              </h2>

              <p className="text-lg text-muted-foreground mb-6 max-w-prose mx-auto md:mx-0">
                At British Premier Psychiatric Clinic, we believe in a team-based approach to mental health care.
                Our doctors work together to ensure you receive comprehensive, coordinated treatment.
              </p>

              {/* left-aligned list even on mobile */}
              <div className="space-y-4 text-left mx-auto md:mx-0 max-w-prose">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Evidence-Based Treatment</h4>
                    <p className="text-muted-foreground">We use proven therapeutic methods backed by research.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Personalized Care Plans</h4>
                    <p className="text-muted-foreground">Every treatment plan is tailored to your unique needs and goals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ongoing Support</h4>
                    <p className="text-muted-foreground">We provide continuous care and adjust treatment as you progress.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Quality Care Guaranteed</h3>
                <p className="text-muted-foreground mb-6">
                  All our doctors are licensed professionals with extensive training and experience in their specialties.
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
                      <a
                        href="tel:+971526372821"
                        className="flex items-center justify-center gap-2"
                        aria-label="Call us now"
                      >
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

export default Doctors;
