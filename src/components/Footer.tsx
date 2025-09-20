import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  X,
} from "lucide-react";
import logo from "@/assets/logo.png";

type PolicyKind = "privacy" | "terms" | "accessibility" | null;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openModal, setOpenModal] = useState<PolicyKind>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (openModal) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openModal]);

  const services = [
    "Adult Psychiatry",
    "Child Psychology",
    "Anxiety Treatment",
    "Depression Therapy",
    "ADHD Assessment",
    "Trauma Therapy",
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Meet Our Team", href: "/clinicians" },
    { name: "Blog & Resources", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Modal */}
      {openModal && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="w-full max-w-2xl bg-background/95 rounded-xl overflow-hidden shadow-2xl ring-1 ring-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient header — matches PromoPopup */}
            <div className="relative text-white bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 isolation-isolate p-4 sm:p-6">
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />

              <button
                onClick={() => setOpenModal(null)}
                aria-label="Close"
                className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 h-10 w-10 flex items-center justify-center rounded-full
                           cursor-pointer touch-manipulation pointer-events-auto
                           hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <X className="h-5 w-5 pointer-events-none" />
              </button>

              <h2 className="relative z-10 text-lg sm:text-xl font-bold leading-tight">
                {openModal === "privacy" && "Privacy Policy"}
                {openModal === "terms" && "Terms of Service"}
                {openModal === "accessibility" && "Accessibility Statement"}
              </h2>
              <p className="relative z-10 text-white/85 text-sm mt-1">
                {openModal === "privacy" &&
                  "Your privacy matters. Here’s how we collect, use, and protect your information."}
                {openModal === "terms" &&
                  "Please review the terms that govern use of our website and services."}
                {openModal === "accessibility" &&
                  "We’re committed to an inclusive, accessible experience for everyone."}
              </p>
            </div>

            {/* Scrollable content */}
            <div className="max-h-[70vh] overflow-y-auto p-6 space-y-4">
              {openModal === "privacy" && (
                <>
                  <h3 className="text-lg font-semibold">Information We Collect</h3>
                  <p className="text-muted-foreground">
                    We may collect personal details such as your name, contact information, and any
                    information you choose to provide via forms or messages.
                  </p>
                  <h3 className="text-lg font-semibold">How We Use Your Information</h3>
                  <p className="text-muted-foreground">
                    We use data to provide services, respond to inquiries, improve user experience, and
                    comply with legal obligations. We do not sell your personal data.
                  </p>
                  <h3 className="text-lg font-semibold">Your Rights</h3>
                  <p className="text-muted-foreground">
                    You may request access, correction, or deletion of your data where applicable. For any
                    privacy requests, please contact{" "}
                    <a
                      className="text-primary underline underline-offset-2"
                      href="mailto:info@britishpremier.ae"
                    >
                      info@britishpremier.ae
                    </a>
                    .
                  </p>
                </>
              )}

              {openModal === "terms" && (
                <>
                  <h3 className="text-lg font-semibold">Use of Website</h3>
                  <p className="text-muted-foreground">
                    By accessing our website, you agree to use it lawfully and not to infringe on
                    intellectual property or other rights.
                  </p>
                  <h3 className="text-lg font-semibold">Medical Disclaimer</h3>
                  <p className="text-muted-foreground">
                    Content is provided for informational purposes only and is not a substitute for
                    professional diagnosis or treatment.
                  </p>
                  <h3 className="text-lg font-semibold">Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    We are not liable for damages resulting from use or inability to use the site to the
                    fullest extent permitted by law.
                  </p>
                </>
              )}

              {openModal === "accessibility" && (
                <>
                  <h3 className="text-lg font-semibold">Our Commitment</h3>
                  <p className="text-muted-foreground">
                    We strive to make our digital experience accessible to all users, including people with
                    disabilities, and aim to conform to WCAG 2.1 AA guidelines.
                  </p>
                  <h3 className="text-lg font-semibold">Feedback</h3>
                  <p className="text-muted-foreground">
                    If you encounter accessibility barriers, please contact us at{" "}
                    <a
                      className="text-primary underline underline-offset-2"
                      href="mailto:info@britishpremier.ae"
                    >
                      info@britishpremier.ae
                    </a>{" "}
                    or call{" "}
                    <a className="text-primary underline underline-offset-2" href="tel:+971526372821">
                      +971 52 637 2821
                    </a>
                    .
                  </p>
                </>
              )}

              <div className="pt-2">
                <Button
                  className="w-full md:w-auto bg-gradient-primary text-primary-foreground hover:opacity-90"
                  onClick={() => setOpenModal(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="British Premier Psychiatry" className="h-12 w-12" />
                <div>
                  <h3 className="font-semibold text-foreground text-lg">British Premier</h3>
                  <p className="text-sm text-muted-foreground">Psychiatry & Psychology</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Leading mental health care provider in the UAE, dedicated to providing compassionate,
                evidence-based treatment for individuals and families.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="outline"
                    size="sm"
                    asChild
                    className="h-10 w-10 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="font-semibold text-foreground text-lg">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-semibold text-foreground text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-semibold text-foreground text-lg">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      Kia Flagship Building
                      <br />
                      1st Floor, Unit 110
                      <br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+97143219494" className="text-muted-foreground hover:text-primary transition-colors">
                    +971 52 637 2821
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@britishpremier.ae"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@britishpremier.com
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-primary text-primary-foreground" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
            <div className="flex flex-col items-center md:items-start text-muted-foreground">
              <div className="flex items-center space-x-2">
                <p>&copy; {currentYear} British Premier Psychiatry & Psychology Center.</p>
                <Heart className="h-4 w-4 text-red-500" />
                <p>All rights reserved.</p>
              </div>

              {/* Site credit */}
              <p className="text-xs md:text-sm mt-1">
                Website designed &amp; maintained by{" "}
                <a
                  href="https://yoururls.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary transition-colors underline underline-offset-2"
                >
                  YourURLs
                </a>.
              </p>
            </div>

            <div className="flex space-x-6 text-sm">
              <button
                type="button"
                onClick={() => setOpenModal("privacy")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setOpenModal("terms")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => setOpenModal("accessibility")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
