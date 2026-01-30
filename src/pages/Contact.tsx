import React, { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
  CheckCircle,
  Shield,
  Car,
  Navigation,
  ArrowRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import valetParking from "@/assets/valet-parking.png";
import { FaWhatsapp } from "react-icons/fa";

const API_URL = "https://urgbdxszsa.execute-api.us-east-2.amazonaws.com/prod/contact";
const CLIENT_ID = "britishpremier";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [botField, setBotField] = useState("");

  // New: controls the success video overlay
  const [showAppointmentVideo, setShowAppointmentVideo] = useState(false);
  const closeVideo = () => setShowAppointmentVideo(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (botField.trim() !== "") return;

    setIsSubmitting(true);
    try {
      const payload = {
        clientId: CLIENT_ID,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message,
      };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        /* ignore */
      }

      if (!res.ok) {
        const msg =
          (data && (data.error || (data.errors && data.errors.join(", ")))) ||
          `Request failed (${res.status})`;
        throw new Error(msg);
      }

      setIsSubmitted(true);
      setShowAppointmentVideo(true); // show the success video overlay
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "Click Here to Email Us",
      action: "mailto:info.britishpremier@gmail.com",
      description: "Get a response within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+971 52 305 2680",
      action: "tel:+971523052680",
      description: "Mon-Sat, 9AM-6PM GST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kia Flagship Building",
      action: "https://maps.app.goo.gl/WNaYyuEZY4tFmsqNA",
      description: "Sheikh Zayed Rd, Kia Flagship Building 1st Floor, Unit 110",
    },
  ];

  const businessHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner
        eyebrow="Contact"
        title="Contact Us"
        description="Questions about care, referrals, or scheduling? We’re here to help."
        badges={["Response within 1–2 business days", "Confidential support"]}
      />

      {/* CONTACT INTRO + FORM/INFO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Get in Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We’re here for you</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Take the first step towards better mental health. Our culturally-sensitive team is ready to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form card */}
              <div className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm rounded-2xl">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-8">Send us a message</h3>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-bold mb-3">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-bold mb-3">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                          placeholder="+971 50 xxx xxxx"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold mb-3">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none bg-background"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      {/* Honeypot */}
                      <input
                        type="text"
                        name="website"
                        value={botField}
                        onChange={(e) => setBotField(e.target.value)}
                        className="hidden"
                        autoComplete="off"
                        tabIndex={-1}
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground py-4 px-6 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                          isSubmitting
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:opacity-95 hover:-translate-y-0.5"
                        }`}
                      >
                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                        {!isSubmitting && <Send className="w-4 h-4" />}
                      </button>

                      {error && <p className="text-destructive text-sm mt-2 text-center">{error}</p>}
                    </form>
                  )}
                </div>
              </div>

              {/* Info column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.action}
                        className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border hover:shadow-md hover:-translate-y-0.5 transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow shrink-0">
                          <info.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg mb-1">{info.title}</div>
                          <div className="font-medium mb-1">{info.details}</div>
                          <div className="text-muted-foreground text-sm">{info.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-background rounded-xl p-8 border border-border shadow-sm">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    Business Hours
                  </h4>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-semibold">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WIDER gradient CTA like About */}
            <div className="mt-12 md:mt-16">
              <div
                className="relative overflow-hidden text-white
                           bg-gradient-to-br from-blue-950 via-blue-900 to-red-900
                           rounded-none md:rounded-2xl
                           -mx-4 sm:-mx-6 md:mx-auto
                           px-4 sm:px-6 md:p-8 py-8
                           md:max-w-6xl md:shadow-lg md:ring-1 md:ring-white/10"
              >
                <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />
                <div className="relative text-center">
                  <h3 className="text-2xl font-semibold mb-4">Prefer to talk?</h3>
                  <p className="text-white/90 max-w-2xl mx-auto">
                    Call us during business hours or email anytime. We’ll reply within 1–2 business days.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      size="lg"
                      className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                      asChild
                    >
                      <a href="tel:+971523052680" className="inline-flex items-center gap-2" aria-label="Call Now">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="text-[#25D366] hover:bg-[#25D366] hover:border-none"
                    >
                      <a
                        href="https://wa.me/971526372821"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
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
          </div>
        </div>
      </section>

      {/* PARKING */}
      {/* 
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Convenient Access
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Parking Availability <span className="sr-only">Parking</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide multiple parking options to ensure your visit is comfortable and stress-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 md:scale-105 lg:scale-110 md:origin-center">

              <div className="group">
                <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/2833714/pexels-photo-2833714.jpeg"
                      alt="On site parking image"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                      <Car className="w-5 h-5 text-primary" />
                      On Site Parking
                    </h3>
                    <p className="text-muted-foreground">
                      Protected parking spaces with easy access to our clinic entrance. Available 24/7 with
                      security monitoring.
                    </p>

                    <Button
                      variant="ghost"
                      className="mt-4 w-full md:w-auto group/button group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a
                        href="https://maps.app.goo.gl/Je8DBpVDUebdqkCP6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 no-underline"
                      >
                        <span>Directions to on site parking</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

 
              <div className="group">
                <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/5065812/pexels-photo-5065812.jpeg"
                      alt="Roadside parking spots by the clinic"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                      <Car className="w-5 h-5 text-primary" />
                      Street Parking
                    </h3>
                    <p className="text-muted-foreground">
                      Dedicated and accessible parking spots located close to the main entrance for easy
                      access.
                    </p>

                    <Button
                      variant="ghost"
                      className="mt-4 w-full md:w-auto group/button group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a
                        href="https://maps.app.goo.gl/Je8DBpVDUebdqkCP6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 no-underline"
                      >
                        <span>Directions to street parking</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>


              <div className="group">
                <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={valetParking}
                      alt="Professional valet parking service at medical facility entrance"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                      <Car className="w-5 h-5 text-primary" />
                      Mall Parking
                    </h3>
                    <p className="text-muted-foreground">
                      Convenient parking available inside the nearby shopping mall. Easy walking access to our clinic
                      through the mall entrance.
                    </p>

                    <Button
                      variant="ghost"
                      className="mt-4 w-full md:w-auto group/button group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a
                        href="https://maps.app.goo.gl/Je8DBpVDUebdqkCP6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 no-underline"
                      >
                        <span>Directions to mall parking</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section> 
*/}
      {/* LOCATION */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Our Location
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us in Kia flagship building</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Located in the heart of Dubai. Easily accessible by public transport
                and major highways.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    Address & Directions
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">British Premier Psychiatry & Psychology</div>
                        <div className="text-muted-foreground">Sheikh Zayed Rd, Kia Flagship Building 1st Floor, Unit 110</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Navigation className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Getting Here</div>
                        <div className="text-muted-foreground">
                          • By Car: Exit 44 from Sheikh Zayed Road
                          <br />
                          • Taxi: Available 24/7 at Dubai Healthcare City
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl p-8 text-white shadow-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 md:ring-1 md:ring-white/10">
                  <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />
                  <div className="relative">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                      <Globe className="w-5 h-5" />
                      International Patients
                    </h4>
                    <p className="text-white/90">
                      We welcome international patients and provide assistance with travel arrangements,
                      accommodation recommendations, and coordination with Dubai Healthcare City's patient services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-2 border border-border shadow-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8191.986107027252!2d55.23633267586803!3d25.169765067842985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69007b1597e1%3A0x917a80784576b3a!2sKia%20flagship%20building!5e0!3m2!1sen!2sca!4v1758477710427!5m2!1sen!2scaealthcare%20City!5e0!3m2!1sen!2sae!4v1699000000000!5m2!1sen!2sae"
                  width="100%"
                  height="500"
                  style={{ border: 0, borderRadius: "1rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="British Premier Psychiatry Location - Dubai Healthcare City"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success video overlay */}
      {showAppointmentVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
          aria-labelledby="appointment-video-title"
        >
          <div
            className="w-full max-w-3xl mx-auto bg-background/95 border-0 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header — gradient like PromoPopup */}
            <div className="relative text-white bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 isolation-isolate p-4 sm:p-6">
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />
              <div className="relative z-10">
                <h3 id="appointment-video-title" className="text-lg sm:text-xl font-bold leading-tight">
                  What to Expect at Your Appointment
                </h3>
                <p className="text-white/80 text-sm mt-1">A quick walkthrough of your first visit.</p>
              </div>
            </div>

            {/* Video */}
            <div className="p-4 sm:p-6">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rj345qojCL8?si=nDxHD1Ucz2J35xJz"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Footer actions */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
                <Button
                  variant="outline"
                  className="border-primary text-blue-500 hover:bg-blue-500 hover:text-white"
                  asChild
                >
                  <a href="tel:+971523052680" aria-label="Call the clinic">
                    Call Us
                  </a>
                </Button>
                <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90" onClick={closeVideo}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
