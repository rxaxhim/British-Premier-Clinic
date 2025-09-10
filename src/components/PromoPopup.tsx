import { useState } from "react";
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
    navigate("/appointment");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg mx-4 border-0 shadow-2xl bg-background/95 backdrop-blur-sm">
        <CardContent className="p-0">
          {/* Header - match About hero gradient */}
          <div className="relative rounded-t-lg overflow-hidden">
            <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 p-6 text-white">
              {/* subtle hero-style highlights */}
              <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(600px_200px_at_90%_60%,rgba(255,255,255,0.06),transparent)]" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative flex items-center gap-3 mb-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Latest Updates</h2>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                    New Services Available
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">🎉 Grand Opening Celebration</h3>
                <p className="text-sm text-muted-foreground">
                  We're excited to announce our new culturally-sensitive mental health services. 
                  Book your consultation today and experience care that honors your background.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Free Initial Consultations</p>
                    <p className="text-xs text-muted-foreground">Available for new patients this month</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">15+ Languages Supported</p>
                    <p className="text-xs text-muted-foreground">Culturally competent care in your language</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">24/7 Emergency Support</p>
                    <p className="text-xs text-muted-foreground">Round-the-clock care when you need it most</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                onClick={handleAppointmentRedirect}
                className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>

              <Button
                variant="outline"
                onClick={handleContactRedirect}
                className="flex-1 border border-border hover:border-border/80"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Limited time offer • Terms and conditions apply
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromoPopup;
