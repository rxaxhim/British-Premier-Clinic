import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { Link } from "react-router-dom";
// at top
import { FaWhatsapp } from "react-icons/fa";

const FloatingAppointment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="
        fixed inset-x-0 
        bottom-[calc(env(safe-area-inset-bottom,0px)+16px)]
        z-40 flex justify-center px-4
        md:inset-x-auto md:right-6 md:bottom-6 md:justify-end
        animate-fade-in
      "
    >
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          className="h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground shadow-large hover:scale-105 transition-transform animate-pulse-glow"
          size="sm"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-card border border-border rounded-xl shadow-large p-4 max-w-sm w-full md:w-auto animate-scale-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-foreground">Need an Appointment?</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(true)}
              className="h-6 w-6 p-0 hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Schedule your consultation with our expert mental health professionals.
          </p>
          <div className="flex space-x-2">
            <Button
              asChild
              className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              <Link to="/contact" className="flex items-center justify-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>Book Now</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="border-primary text-blue-500 hover:bg-blue-500 hover:text-white">
              <a href="tel:+971526372821">Call Now</a>
            </Button>
            {/* WhatsApp button */}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="group border-[#25D366] bg-[#25D366] text-white hover:bg-[#1ebe57]"
            >
              <a
                href="https://wa.me/971XXXXXXXXX" // <-- your number
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex items-center justify-center"
              >
                <FaWhatsapp className="h-5 w-5 transition-transform duration-200 ease-out group-hover:scale-125" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingAppointment;
