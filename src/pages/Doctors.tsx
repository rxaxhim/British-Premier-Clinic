import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Calendar, Award, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import YaraPFP from "@/assets/yara-profile-photo.png";
import AnvitaPFP from "@/assets/anvita-profile-photo.png";
import AnnabelPFP from "@/assets/annabel-profile-photo.png";
import ImranPFP from "@/assets/imran-profile-photo.png";

interface Clinician {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  experience?: string;
  education: string[];
  certifications: string[];
  bio: string;
  email?: string;
  phone?: string;
  image: string;
  availability?: string;
}

const clinicians: Clinician[] = [

  {
    id: "1",
    name: "Dr.  Imran Mushtaq",
    title: "Consultant Psychiatrist",
    specializations: [
      "Child & Adolescent Psychiatry",
      "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      "Autism Spectrum Disorder (ASD)",
      "Learning Difficulties & Learning Disabilities",
      "Behavioral & Oppositional Disorders",
      "Depression",
      "Anxiety Disorders",
      "Psychiatric Assessment & Diagnosis",
      "Systemic Therapy",
      "Cognitive Behavioural Therapy (CBT)",
      "Adult Psychiatry (Limited Referrals)"
    ],
    experience: "20+ years",
    education: [
      "Medical Training in the United Kingdom",
      "Specialty Training in Psychiatry",
      "Background Training in Paediatrics"
    ],
    certifications: [
      "Consultant Psychiatrist",
      "Licensed by Dubai Health Authority (UAE)",
      "Licensed by General Medical Council (UK)",
      "Licensed by Irish Medical Council (Ireland)",
      "Fellow of the Royal College of Psychiatrists (UK)",
      "Fellow of the Royal College of Paediatrics and Child Health (UK)",
      "Fellow of the European Board of Psychiatry (FEBP)"
    ],
    bio: `Dr Imran Mushtaq is a UK-trained Consultant Psychiatrist with over 20 years of expertise in the psychiatry field. He is licensed by the Dubai Health Authority (UAE), General Medical Council (UK) and Irish Medical Council (Ireland). 
    
    He specialises in child and adolescent mental health and is known for his calm, gentle, and composed approach to patient care. With extensive experience in assessing, diagnosing, and treating mental health conditions, he is particularly skilled in working with children and young people facing various psychological challenges and disorders. Dr. Mushtaq's primary focus is on children and adolescents, though he also accepts referrals for adults. 
    
    He started out his career as a paediatrician and then he gained experience in the area of psychiatry. He has worked as a consultant psychiatrist in the UK, Australia and Ireland. He has been awarded Fellowships by the Royal College of Psychiatrists (UK), the Royal College of Paediatrics and Child Health (UK), as well as the European Board of Psychiatry (FEBP). He has been involved in teaching, training and supervision of medical students, junior doctors, nurses and higher trainees in child and adolescent psychiatry in the UK, Ireland and Australia. He has an honorary position with a medical university in Africa. 
    
    Although Dr Mushtaq can treat any psychiatry-related disorders, he specialises in ADHD, ASD, Learning Difficulties/Learning Disabilities, Behavioural Problems/Oppositional Behaviours, Depression, and Anxiety Disorders. He is particularly interested in Systemic and Cognitive Behavioural Therapy (CBT). 
    
    His therapies include a variety of holistic approaches in supporting a person to overcome their difficulties and problems. He can support patients who speak English, Urdu, Punjabi and Hindi. Dr Mushtaq is unable to provide medico-legal opinions or reports or provide care for clients with substance use disorders.
    
    Dr Mushtaq has published more than 40 articles in peer-reviewed scientific journals. He has presented at national and international conferences in the UK, Europe, Asia and Australia. He reviews journals' articles related to child and adolescent mental health. He is a children's writer and writes in the Urdu language. He has published many award-winning children's books and is also the chief editor of an Urdu Children's monthly magazine.`,
    // email: "j.thompson@britishpremier.com",
    // phone: "(416) 555-0126",
    image: ImranPFP,
    // availability: "Monday - Friday, 9:00 AM - 3:00 PM"
  },
  {
    id: "2",
    name: "Anvita",
    title: "Psychologist",
    specializations: [
      "Child & Adolescent Psychology",
      "Young Adult Mental Health",
      "Autism Spectrum Disorder (ASD)",
      "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      "Learning Difficulties",
      "Mood Disorders",
      "Anxiety Disorders",
      "Behavioral Issues",
      "Trauma",
      "Grief & Loss"
    ],
    // experience: "15+ years",
    education: [
      "Master of Arts in Clinical Psychology - Eastern Illinois University"
    ],
    certifications: [
    "Licensed Psychologist - Illinois Department of Financial and Professional Regulation (IDFPR)",
    "Licensed Psychologist - Community Development Authority (CDA), Dubai"
  ],
    bio: `Anvita brings with her a deep cultural relatability and sensitivity, and is dedicated to understanding and supporting the subjective cultural experiences and challenges that shape her clients’ lifestyle. She integrates evidence-based therapies like CBT, DBT, and mindfulness along with a person-centered approach to therapy. 

    Currently supporting clients within the UAE, Anvita works with children, adolescents and adults experiencing a wide range of emotional, behavioral, and developmental challenges. She also utilizes diverse neuropsychological/psychological assessments to accurately identify developmental and social-emotional concerns and create individualized treatment plans. She further aims to empower the adults in a child’s life and facilitates parent guidance workshops to help create a thriving environment for the child.`,
    // email: "test@gmail.com",
    // phone: "(416) 555-0124",
    image: AnvitaPFP,
    // availability: "Tuesday - Saturday, 8:00 AM - 4:00 PM"
  },
  // {
  //   id: "3",
  //   name: "Yara",
  //   title: "Psychotherapist",
  //   specializations: [
  //     "Emotional Regulation Difficulties",
  //     "Mood-Related Concerns",
  //     "Trauma & Trauma Recovery",
  //     "Relationship Challenges",
  //     "Identity Exploration",
  //     "Life Transitions & Adjustment Issues",
  //     "Adolescent Mental Health",
  //     "Adult Mental Health",
  //     "Couples Counseling",
  //     "Family Therapy"
  //   ],
  //   // experience: "12+ years",
  //   education: [
  //     "Master's Degree in Professional Clinical Counseling (PCC)"
  //   ],
  //   certifications: [
  //     "Licensed Associate Professional Counselor (LAPC) - Pennsylvania",
  //     "Child Development Associate (CDA) - Pennsylvania",
  //     "Licensed Psychotherapist - Dubai, Pennsylvania"
  //   ],
  //   bio: `My name is Yara. I am a bilingual psychotherapist fluent in Arabic and English, with education and clinical training in the United States. I hold a master’s degree in Professional Clinical Counseling (PCC) and am currently licensed in Dubai and in Pennsylvania (LAPC, CDA). I work with adolescents and adults, including individuals, couples, and families, navigating emotional regulation difficulties, mood related concerns, trauma, relationship challenges, identity exploration, and major life transitions.
    
  //   My aim is to provide a warm, nonjudgmental, and culturally sensitive space where you feel supported, understood, and respected. My approach is collaborative and grounded in curiosity, supporting insight, agency, and meaningful change by building on your strengths. 
    
  //   My work is trauma informed and integrative, drawing from both depth oriented and evidence based approaches. I am trained in Acceptance and Commitment Therapy (ACT), Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy (DBT), emotion focused and solution focused approaches, while also integrating psychodynamic and humanistic perspectives. Together, we focus on developing practical tools, deepening self awareness, strengthening relationships, and fostering resilience, self compassion, and sustainable growth.`,
  //   // email:"test@gmail.com",
  //   // phone: "(416) 555-0123",
  //   image: YaraPFP,
  //   // availability: "Monday - Friday, 9:00 AM - 5:00 PM"
  // },
  // {
  //   id: "4",
  //   name: "Ms. Annabel George",
  //   title: "Psychologist",
  //   specializations: [
  //     "Self-Improvement & Personal Growth",
  //     "Stress Management",
  //     "Academic & Career Concerns",
  //     "Anxiety Disorders",
  //     "Phobias",
  //     "Mood Disorders",
  //     "Family Concerns",
  //     "Relationship Issues",
  //     "Procrastination",
  //     "Behavioral Issues",
  //     "Self-Harm",
  //     "Abuse & Trauma",
  //     "Student & Young Adult Mental Health",
  //     "Corporate & Workplace Mental Health",
  //     "Group Therapy & Workshops"
  //   ],
  //   // experience: "10+ years",
  //   education: [
  //     "Master's Degree in Counselling Psychology - University of Mumbai (Distinction)"
  //   ],
  //   certifications: [
  //     "Psychologist - India",
  //     "Psychologist - United Arab Emirates",
  //     "Consultant Psychologist (Online Platforms)"
  //   ],
  //   bio : `Ms. Annabel George is a Psychologist with a master's in counselling psychology from University of Mumbai, India where she earned her degree with distinction. 
    
  //   She has worked as a psychologist at various schools and centres  back in India and the UAE. She is also a consultant psychologist on several online platform. 
    
  //   She works with clients from a wide variety of age-groups and backgrounds - students, parents, young adults, as well as people in the corporate sector. She has been successful in assisting them as they deal with several different issues such as stress, anxiety, phobias, academic concern or career related issues, mood disorders, family concerns, relationships, procrastination, behavioural issues, self-harm, abuse and has also worked with clients focused on self-improvement. 
    
  //   Apart from individual sessions she also held group sessions and several workshops on confidence building, communication skills, non-judgmental listening, and career growth. 
    
  //   She makes use of Cognitive behavioural therapy, art and play therapy, interpersonal psychotherapy and solution-focused brief therapy in her sessions depending on what is relevant for the client. 
    
  //   She wants to help people deal with the challenges and concerns they are faced with. To help them grow as individuals and live their lives to the fullest. Additionally, she wants people to understand the importance of mental health and wellbeing and freely seek help when it's required.
    
  //   “In my sessions, the aim is on identifying the client's concerns and working through it together. I believe that people know the path that they are on… and when their car breaks down along the way… I'd like to be the one who provides them with the right tools so that they know how to fix it and deal with it should such a situation arise again”.`,
  //   // email: "e.rodriguez@britishpremier.com",
  //   // phone: "(416) 555-0125",
  //   image: AnnabelPFP,
  //   // availability: "Monday - Thursday, 10:00 AM - 6:00 PM"
  // },
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
          className="grid gap-8 justify-center items-stretch"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
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
                  <Badge
                    variant="secondary"
                    className={`mt-2 ${!clinician.experience ? "invisible" : ""}`}
                  >
                    {clinician.experience ? `${clinician.experience} Experience` : "\u00A0"}
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

                {clinician.availability && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{clinician.availability}</span>
                  </div>
                )}


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
                              {clinician.experience && (
                                <Badge variant="secondary" className="mt-2">
                                  {clinician.experience} Experience
                                </Badge>
                              )}
                          </div>
                          <div className="space-y-3">
                            {clinician.email && (
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="w-4 h-4 text-primary" />
                                <a
                                  href={`mailto:${clinician.email}`}
                                  className="hover:text-primary"
                                >
                                  {clinician.email}
                                </a>
                              </div>
                            )}

                            {clinician.phone && (
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="w-4 h-4 text-primary" />
                                <a
                                  href={`tel:${clinician.phone}`}
                                  className="hover:text-primary"
                                >
                                  {clinician.phone}
                                </a>
                              </div>
                            )}

                            {clinician.availability && (
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{clinician.availability}</span>
                              </div>
                            )}
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
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{clinician.bio}</p>
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
                          {clinician.email && (
                            <Button
                              variant="outline"
                              className="flex-1 border-primary text-blue-500 hover:bg-blue-500 hover:text-white"
                              asChild
                            >
                              <a href={`mailto:${clinician.email}`}>Send Email</a>
                            </Button>
                          )}
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
                        href="tel:+971523052680"
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
