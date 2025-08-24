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
  Heart
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Adult Psychiatry",
    "Child Psychology", 
    "Anxiety Treatment",
    "Depression Therapy",
    "ADHD Assessment",
    "Trauma Therapy"
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Meet Our Team", href: "/doctors" },
    { name: "Blog & Resources", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Book Appointment", href: "/appointment" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="British Premier Psychiatry" className="h-12 w-12" />
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  British Premier
                </h3>
                <p className="text-sm text-muted-foreground">
                  Psychiatry & Psychology
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Leading mental health care provider in the UAE, dedicated to providing 
              compassionate, evidence-based treatment for individuals and families.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
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
                  <Link 
                    to="/services" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
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
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
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
                    Dubai Healthcare City<br />
                    Building 64, Block A<br />
                    Dubai, UAE
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+97143219494" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +971 4 321 9494
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@britishpremier.ae" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@britishpremier.ae
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-primary text-primary-foreground" asChild>
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <p>&copy; {currentYear} British Premier Psychiatry & Psychology Center.</p>
            <Heart className="h-4 w-4 text-red-500" />
            <p>All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;