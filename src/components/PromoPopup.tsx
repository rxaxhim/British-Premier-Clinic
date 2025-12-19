import { X, Phone, Calendar, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface PromoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromoPopup = ({ isOpen, onClose }: PromoPopupProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleContactRedirect = () => {
    navigate("/contact");
    onClose();
  };

  const handleAppointmentRedirect = () => {
    navigate("/contact");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose} // close on backdrop click
    >
      <Card
        className="w-full max-w-lg mx-4 border-0 shadow-2xl bg-background/95 backdrop-blur-sm overflow-hidden
                   max-h-[90svh] sm:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()} // prevent inner clicks from closing
      >
        <CardContent className="p-0">
          {/* Header - matches hero gradient; accurate hit area & stacking */}
          <div className="relative rounded-t-lg overflow-hidden">
            <div className="relative text-white bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 isolation-isolate p-4 sm:p-6">
              {/* subtle hero-style highlights */}
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />

              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 h-10 w-10 flex items-center justify-center rounded-full
                           cursor-pointer touch-manipulation pointer-events-auto
                           hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <X className="h-5 w-5 pointer-events-none" />
              </button>

              <div className="relative z-10 flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <div className="bg-white/20 p-1.5 sm:p-2 rounded-full">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold leading-tight">Latest Updates</h2>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-[10px] sm:text-xs">
                    New Services Available
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content (mobile) */}
          <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain">
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 sm:p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">
                  🎉 Grand Opening Celebration
                </h3>
                <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                  We're excited to announce our new culturally-sensitive mental health services.
                  Book your consultation today and experience care that honors your background.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-background rounded-lg border">
                  <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-[13px] sm:text-sm leading-tight">Free Initial Consultations</p>
                    <p className="text-[12px] sm:text-xs text-muted-foreground">Available for new patients this month</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-background rounded-lg border">
                  <div className="bg-secondary/10 p-1.5 sm:p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-[13px] sm:text-sm leading-tight">15+ Languages Supported</p>
                    <p className="text-[12px] sm:text-xs text-muted-foreground">Culturally competent care in your language</p>
                  </div>
                </div>

                {/* <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-background rounded-lg border">
                  <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-[13px] sm:text-sm leading-tight">24/7 Emergency Support</p>
                    <p className="text-[12px] sm:text-xs text-muted-foreground">Round-the-clock care when you need it most</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mt-4 sm:mt-6">
              <Button
                onClick={handleAppointmentRedirect}
                className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90
                           h-11 sm:h-12 text-sm sm:text-base"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>

              <Button
                variant="outline"
                asChild
                className="flex-1 h-11 sm:h-12 text-sm sm:text-base
                          border-blue-500 text-blue-500
                          hover:bg-blue-500 hover:text-white hover:border-blue-500"
              >
                <a
                  href="tel:+971523052680"
                  className="flex items-center justify-center"
                  aria-label="Call us now"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            <p className="text-[12px] sm:text-xs text-center text-muted-foreground mt-3 sm:mt-4">
              Limited time offer • Terms and conditions apply
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromoPopup;
