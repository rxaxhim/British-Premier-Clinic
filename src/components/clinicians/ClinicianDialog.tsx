import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Calendar, Award, Users, BookOpen, Sparkles, ChevronDown } from "lucide-react";
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
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    // Safe during the build-time pre-render where `window` doesn't exist.
    const profileUrl =
        typeof window !== "undefined"
            ? `${window.location.origin}/clinicians/${clinician.url}`
            : `https://britishpremiercenter.ae/clinicians/${clinician.url}`;

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

      <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
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
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <img
                src={clinician.image}
                alt={clinician.name}
                className="w-full h-full object-cover object-[center_top]"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* text overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold">{clinician.name}</h3>
                <p className="text-sm opacity-90">{clinician.title}</p>
              </div>
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

              {clinician.idealFor && clinician.idealFor.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Made for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {clinician.idealFor.map((item, idx) => (
                      <Badge key={idx} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
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

            {/* Generic extra content sections — any clinician can use this for content
                that doesn't fit specializations/education/certifications (e.g. a
                signature program). Only renders if the clinician has entries. */}
            {clinician.extraSections && clinician.extraSections.length > 0 && (
              <>
                {clinician.extraSections.map((section, sIdx) => (
                  <div key={sIdx}>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      {section.heading}
                    </h4>

                    {section.content && (
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    )}

                    {section.items && section.items.length > 0 && (
                      <ul className="space-y-2">
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-muted-foreground">
                            {item.label ? (
                              <>
                                <span className="font-medium text-foreground">
                                  {item.label}
                                </span>
                                {" — "}
                                {item.text}
                              </>
                            ) : (
                              <>• {item.text}</>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </>
            )}
            {/* Generic FAQ section — any clinician can use this for a Q&A list. */}
            {clinician.faqs && clinician.faqs.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  FAQ
                </h4>
                <div className="space-y-3">
                  {clinician.faqs.map((faq, fIdx) => (
                    <Card key={fIdx}>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 text-left"
                        onClick={() =>
                          setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)
                        }
                      >
                        <CardHeader className="p-0">
                          <CardTitle className="text-base">
                            {faq.question}
                          </CardTitle>
                        </CardHeader>

                        <ChevronDown
                          className={`h-4 w-4 flex-shrink-0 ml-2 transition-transform ${
                            openFaqIndex === fIdx ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openFaqIndex === fIdx && (
                        <CardContent className="px-4 pb-4 text-muted-foreground">
                          {faq.answer}
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}
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