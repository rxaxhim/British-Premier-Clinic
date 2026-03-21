import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Calendar, Award, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Clinician } from "@/types/clinician";
import { useToast } from "@/hooks/use-toast";
import { Share2, Copy } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function ClinicianDialog({
  clinician,
  children,
}: {
  clinician: Clinician;
  children: React.ReactNode;
}) {
    const { toast } = useToast();
    const profileUrl = `${window.location.origin}/clinicians/${clinician.id}`;

    const handleCopy = async () => {
    try {
        await navigator.clipboard.writeText(profileUrl);

        toast({
        title: "Copied!",
        description: "Profile link copied to clipboard",
        });

    } catch {
        toast({
        title: "Error",
        description: "Failed to copy link",
        variant: "destructive",
        });
    }
    };

    const handleShare = async () => {
        if (navigator.share) {
        await navigator.share({
            title: clinician.name,
            text: `Check out ${clinician.name}`,
            url: profileUrl,
        });
        } else {
        handleCopy();
        }
    };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-end gap-2 mb-2 mr-10">
            <Button
                variant="outline"
                size="icon"
                onClick={handleCopy}
                className="border-primary text-blue-500 hover:bg-blue-500 hover:text-white"
            >
                <Copy className="w-4 h-4" />
            </Button>

            <Button
                variant="outline"
                size="icon"
                onClick={handleShare}
                className="border-primary text-blue-500 hover:bg-blue-500 hover:text-white"
            >
                <Share2 className="w-4 h-4" />
            </Button>

            <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:border-none"
            >
                <a
                href="https://wa.me/971502739020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="Message on WhatsApp"
                >
                <FaWhatsapp className="h-5 w-5 transition-transform duration-200 ease-out group-hover:scale-110" />
                </a>
            </Button>
        </div>
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
                  <a href={`mailto:${clinician.email}`} className="hover:text-primary">
                    {clinician.email}
                  </a>
                </div>
              )}

              {clinician.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={`tel:${clinician.phone}`} className="hover:text-primary">
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
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                About
              </h4>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {clinician.bio}
              </p>
            </div>

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
  );
}