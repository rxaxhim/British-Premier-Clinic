import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<PolicyKind>(null);

  // Sync modal state with URL
  useEffect(() => {
    const path = location.pathname;
    if (path === "/privacy") {
      setOpenModal("privacy");
    } else if (path === "/terms") {
      setOpenModal("terms");
    } else if (path === "/accessibility") {
      setOpenModal("accessibility");
    } else {
      setOpenModal(null);
    }
  }, [location.pathname]);

  const closeModal = () => {
    setOpenModal(null);
    // Navigate to home when closing modal from direct URL access
    if (location.pathname === "/privacy" || location.pathname === "/terms" || location.pathname === "/accessibility") {
      navigate("/");
    }
  };

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
          onClick={closeModal}
        >
          <div
            className="w-full max-w-2xl bg-background/95 rounded-xl overflow-hidden shadow-2xl ring-1 ring-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient header — matches PromoPopup */}
            <div className="relative text-white bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 isolation-isolate p-4 sm:p-6">
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />

              <button
                onClick={closeModal}
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
                  <p className="text-sm text-muted-foreground italic">Effective Date: February 17, 2026</p>
                  
                  <p className="text-muted-foreground">
                    This Privacy Policy explains how we collect, use, share, and protect personal information when you visit our website, contact us, or use our online booking and related services (the "Site").
                  </p>

                  <h3 className="text-lg font-semibold">1) Information We Collect</h3>
                  <p className="text-muted-foreground font-medium">A) Information you provide</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Contact details such as your name, email address, phone number, and any other information you submit through forms, bookings, or messages.</li>
                    <li>Appointment/booking details such as requested service type, preferred times, and administrative details needed to confirm and manage appointments.</li>
                    <li>Message content you choose to include when contacting us (including health-related information if you voluntarily provide it).</li>
                  </ul>
                  <p className="text-muted-foreground font-medium">B) Information collected automatically</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Device and browser information, IP address, and approximate location (derived from IP address).</li>
                    <li>Usage data such as pages viewed, time spent on pages, and referral sources.</li>
                    <li>Cookies and similar technologies (see Section 6).</li>
                  </ul>
                  <p className="text-muted-foreground font-medium">C) Payment information</p>
                  <p className="text-muted-foreground">
                    If you pay online, payments are processed by our payment provider. We receive payment confirmation details (such as transaction status and reference number). We do not store full credit/debit card details on our servers.
                  </p>

                  <h3 className="text-lg font-semibold">2) How We Use Your Information</h3>
                  <p className="text-muted-foreground">We use personal information to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Provide and manage appointments and services you request.</li>
                    <li>Respond to inquiries and communicate with you.</li>
                    <li>Send administrative messages such as booking confirmations, reminders, updates, or service-related notices.</li>
                    <li>Improve the Site's performance and user experience.</li>
                    <li>Protect the Site, prevent fraud, and maintain security.</li>
                    <li>Comply with legal and regulatory obligations.</li>
                  </ul>
                  <p className="text-muted-foreground font-medium">We do not sell your personal data.</p>

                  <h3 className="text-lg font-semibold">3) Legal Basis (Where Applicable)</h3>
                  <p className="text-muted-foreground">Depending on your location and the context, we process information based on one or more of the following:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Your consent (for example, when you submit a form).</li>
                    <li>Performance of a contract (for example, booking and administering appointments).</li>
                    <li>Legitimate interests (for example, security, fraud prevention, and improving our services).</li>
                    <li>Legal obligations (for example, compliance and recordkeeping requirements).</li>
                  </ul>

                  <h3 className="text-lg font-semibold">4) How We Share Information</h3>
                  <p className="text-muted-foreground">We only share personal information when needed, including with:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Service providers who support our operations (such as website hosting, booking systems, email/SMS providers, analytics, and IT support). These providers may access information only to perform services for us and are required to protect it.</li>
                    <li>Payment processors to complete transactions.</li>
                    <li>Professional advisors (legal, accounting) when necessary.</li>
                    <li>Authorities where required by law, regulation, court order, or where necessary to protect safety and rights.</li>
                  </ul>
                  <p className="text-muted-foreground">We limit sharing to what is necessary for the purpose and use safeguards appropriate to the sensitivity of the information.</p>

                  <h3 className="text-lg font-semibold">5) Confidentiality and Legal/Professional Disclosures</h3>
                  <p className="text-muted-foreground">We treat personal information and communications with care. However, in limited circumstances we may be required or permitted to disclose information, such as:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>When required by law or a valid legal process.</li>
                    <li>To protect the safety of individuals or the public.</li>
                    <li>To prevent fraud or security threats.</li>
                  </ul>
                  <p className="text-muted-foreground">(Clinical confidentiality rules may also apply when you become a patient; you may receive additional clinical policies during intake.)</p>

                  <h3 className="text-lg font-semibold">6) Cookies and Analytics</h3>
                  <p className="text-muted-foreground">We may use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Enable core website functionality.</li>
                    <li>Remember preferences.</li>
                    <li>Understand how visitors use our Site and improve it.</li>
                  </ul>
                  <p className="text-muted-foreground">You can manage cookies through your browser settings. Disabling cookies may affect some Site features.</p>

                  <h3 className="text-lg font-semibold">7) Data Retention</h3>
                  <p className="text-muted-foreground">
                    We keep personal information only as long as necessary for the purposes described in this Policy, including to meet legal, regulatory, and operational requirements. Retention periods may vary depending on the type of information.
                  </p>

                  <h3 className="text-lg font-semibold">8) Security</h3>
                  <p className="text-muted-foreground">
                    We use reasonable administrative, technical, and physical safeguards designed to protect personal information from loss, misuse, unauthorized access, disclosure, alteration, or destruction. No method of transmission or storage is completely secure.
                  </p>

                  <h3 className="text-lg font-semibold">9) Your Rights</h3>
                  <p className="text-muted-foreground">Depending on your location and applicable law, you may have rights to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Request access to your personal information.</li>
                    <li>Request correction of inaccurate information.</li>
                    <li>Request deletion of certain information where applicable.</li>
                    <li>Object to or restrict certain processing.</li>
                    <li>Withdraw consent (where processing is based on consent).</li>
                  </ul>
                  <p className="text-muted-foreground">
                    To submit a privacy request,{" "}
                    <a className="text-primary underline underline-offset-2" href="mailto:info.britishpremier@gmail.com">
                      email us here
                    </a>.
                  </p>

                  <h3 className="text-lg font-semibold">10) Children and Minors</h3>
                  <p className="text-muted-foreground">
                    Our Site is not intended for use by children without involvement of a parent or legal guardian where required by law. If you believe a minor has provided personal information inappropriately, contact us so we can address it.
                  </p>

                  <h3 className="text-lg font-semibold">11) International Data Transfers (If Applicable)</h3>
                  <p className="text-muted-foreground">
                    If we store or process information outside your country, we take steps to ensure appropriate safeguards are used in accordance with applicable law.
                  </p>

                  <h3 className="text-lg font-semibold">12) Changes to This Privacy Policy</h3>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated Effective Date.
                  </p>

                  <h3 className="text-lg font-semibold">13) Contact Us</h3>
                  <p className="text-muted-foreground">
                    British Premier Psychiatry & Psychology Center<br />
                    Address: Sheikh Zayed Rd, Kia Flagship Building, 1st Floor, Unit 110, Dubai, UAE<br />
                    <a className="text-primary underline underline-offset-2" href="mailto:info.britishpremier@gmail.com">
                      Email us here
                    </a><br />
                    Phone:{" "}
                    <a className="text-primary underline underline-offset-2" href="tel:+0097143357477">
                      +00 971 4 335 7477
                    </a>
                  </p>
                </>
              )}

              {openModal === "terms" && (
                <>
                  <p className="text-sm text-muted-foreground italic">Effective Date: February 17, 2026</p>
                  
                  <p className="text-muted-foreground">
                    These Terms of Service ("Terms") govern your use of our website, online booking, and related online services (the "Site"). By accessing or using the Site, you agree to these Terms. If you do not agree, do not use the Site.
                  </p>

                  <h3 className="text-lg font-semibold">1) Use of Website</h3>
                  <p className="text-muted-foreground">You agree to use the Site lawfully and not to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Violate any applicable laws or regulations.</li>
                    <li>Infringe intellectual property or other rights.</li>
                    <li>Attempt unauthorized access to the Site or systems.</li>
                    <li>Upload or transmit harmful code (malware), spam, or disruptive content.</li>
                    <li>Provide false, misleading, or fraudulent information.</li>
                  </ul>

                  <h3 className="text-lg font-semibold">2) Services</h3>
                  <p className="text-muted-foreground">
                    BPPC provides mental health services which may include psychiatry, psychology, psychotherapy, counseling, assessments, and related clinical support (the "Services"). Services, clinicians, availability, and descriptions may change without notice.
                  </p>

                  <h3 className="text-lg font-semibold">3) Booking, Communications, and Accuracy of Information</h3>
                  <p className="text-muted-foreground">
                    When booking or contacting us, you agree to provide accurate and complete information. We may contact you using the details you provide to manage your bookings and respond to inquiries.
                  </p>
                  <p className="text-muted-foreground font-medium">
                    Messages sent through website forms or email are not monitored continuously and must not be used for emergencies.
                  </p>

                  <h3 className="text-lg font-semibold">4) Medical Disclaimer</h3>
                  <p className="text-muted-foreground">
                    Content on the Site is provided for informational purposes only and is not a substitute for professional diagnosis or treatment. Do not ignore or delay seeking professional advice because of something you read on the Site.
                  </p>
                  <p className="text-muted-foreground font-medium">
                    If you believe you are experiencing an emergency or are at immediate risk, seek urgent assistance through local emergency services or your nearest emergency department.
                  </p>

                  <h3 className="text-lg font-semibold">5) Fees, Pricing, and Currency</h3>
                  <p className="text-muted-foreground">
                    Fees for Services are displayed or communicated during the booking process or by our staff. Prices may change. If a pricing or typographical error occurs, we may correct it and, where appropriate, cancel the transaction and/or issue a refund.
                  </p>
                  <p className="text-muted-foreground">
                    Payments are processed in AED unless otherwise stated. If your payment method is issued in another currency, your bank may apply exchange rates and fees.
                  </p>

                  <h3 className="text-lg font-semibold">6) Online Payments and Payment Processing</h3>
                  <p className="text-muted-foreground">
                    Online payments are processed through our payment provider. BPPC does not store full credit/debit card details on our servers. Payment providers may process your payment information according to their own terms and policies.
                  </p>

                  <h3 className="text-lg font-semibold">7) Cancellation, Rescheduling, No-Show, and Refund Policy</h3>
                  <p className="text-muted-foreground">Our cancellation and refund rules may be communicated at booking and/or in appointment confirmations. Unless otherwise stated:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>To cancel or reschedule an appointment, you must provide notice at least 24 hours before the scheduled time.</li>
                    <li>Late cancellations and missed appointments ("no-shows") may be charged.</li>
                    <li>If a refund is approved, it will be processed to the original payment method unless legal or operational requirements require another method.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    For cancellations or refund requests,{" "}
                    <a className="text-primary underline underline-offset-2" href="mailto:info.britishpremier@gmail.com">
                      email us here
                    </a>{" "}
                    or call{" "}
                    <a className="text-primary underline underline-offset-2" href="tel:+0097143357477 ">
                      +00 971 4 335 7477 
                    </a>.
                  </p>

                  <h3 className="text-lg font-semibold">8) Confidentiality (General)</h3>
                  <p className="text-muted-foreground">
                    We respect confidentiality and privacy. Certain disclosures may be required by law, regulation, court order, or to protect safety. For details on how we handle personal information, please review our Privacy Policy.
                  </p>

                  <h3 className="text-lg font-semibold">9) Patient Rights and Responsibilities</h3>
                  <p className="text-muted-foreground font-medium">When receiving care from BPPC, you have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Receive care delivered with professional and ethical standards by qualified clinicians.</li>
                    <li>Be informed of fees and payment options.</li>
                    <li>Know the name and role/specialty of the clinician responsible for your care.</li>
                    <li>Receive information in a way you can understand and ask questions.</li>
                    <li>Be informed about your care plan, including options and expected outcomes where appropriate.</li>
                    <li>Provide informed consent and refuse or discontinue treatment, and receive information about foreseeable consequences.</li>
                    <li>Privacy and confidentiality consistent with law and professional obligations.</li>
                    <li>Request access to your records where permitted by law and policy.</li>
                    <li>Make suggestions or complaints and receive information on how to raise concerns.</li>
                  </ul>
                  <p className="text-muted-foreground font-medium mt-2">It is your responsibility to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Provide accurate and complete information relevant to your care.</li>
                    <li>Ask questions if you do not understand recommendations or next steps.</li>
                    <li>Participate in treatment and follow agreed plans to the best of your ability.</li>
                    <li>Attend appointments on time and provide notice if you need to cancel/reschedule.</li>
                    <li>Treat clinicians, staff, and others respectfully.</li>
                    <li>Meet financial obligations associated with your care.</li>
                  </ul>

                  <h3 className="text-lg font-semibold">10) Intellectual Property</h3>
                  <p className="text-muted-foreground">
                    All content on the Site (including text, graphics, logos, and design) is owned by BPPC or licensed to us and is protected by applicable intellectual property laws. You may not copy, reproduce, modify, distribute, or exploit Site content without our written permission, except as allowed by law.
                  </p>

                  <h3 className="text-lg font-semibold">11) Third-Party Links</h3>
                  <p className="text-muted-foreground">
                    The Site may contain links to third-party websites. We do not control and are not responsible for third-party content, services, or policies.
                  </p>

                  <h3 className="text-lg font-semibold">12) Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    To the fullest extent permitted by law, BPPC is not liable for any damages arising from your use of, or inability to use, the Site, including indirect, incidental, special, consequential, or punitive damages. We do not guarantee the Site will be uninterrupted, error-free, or free from harmful components.
                  </p>

                  <h3 className="text-lg font-semibold">13) Changes to These Terms</h3>
                  <p className="text-muted-foreground">
                    We may update these Terms from time to time. Changes will be posted on this page with an updated Effective Date. Your continued use of the Site after changes are posted means you accept the updated Terms.
                  </p>

                  <h3 className="text-lg font-semibold">14) Contact Us</h3>
                  <p className="text-muted-foreground">
                    British Premier Psychiatry & Psychology Center<br />
                    Address: Sheikh Zayed Rd, Kia Flagship Building, 1st Floor, Unit 110, Dubai, UAE<br />
                    <a className="text-primary underline underline-offset-2" href="mailto:info.britishpremier@gmail.com">
                      Email us here
                    </a><br />
                    Phone:{" "}
                    <a className="text-primary underline underline-offset-2" href="tel:+0097143357477 ">
                      +00 971 4 335 7477 
                    </a>
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
                      href="mailto:info.britishpremier@gmail.com"
                    >
                      Email Us
                    </a>{" "}
                    or call{" "}
                    <a className="text-primary underline underline-offset-2" href="tel:+0097143357477">
                      +00 971 4 335 7477
                    </a>
                    .
                  </p>
                </>
              )}

              <div className="pt-2">
                <Button
                  className="w-full md:w-auto bg-gradient-primary text-primary-foreground hover:opacity-90"
                  onClick={closeModal}
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
              {/* <div className="flex space-x-4">
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
              </div> */}
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
                      Sheikh Zayed Rd
                      <br />
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
                  <a href="tel:+0097143357477" className="text-muted-foreground hover:text-primary transition-colors">
                    +00 971 4 335 7477
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info.britishpremier@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Email Us
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
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
