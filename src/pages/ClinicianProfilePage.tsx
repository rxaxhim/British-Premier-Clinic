import { useParams, Link } from "react-router-dom";
import { clinicians } from "@/data/clinicians";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Award, Users, BookOpen } from "lucide-react";

export default function ClinicianProfilePage() {
  const { id } = useParams();

  const clinician = clinicians.find((c) => c.id === id);

  if (!clinician) {
    return <div className="p-10 text-center">Clinician not found</div>;
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link to="/clinicians">
          <Button variant="outline" className="mb-6">
            ← Back to Clinicians
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT SIDE */}
          <div className="space-y-4 text-center">
            <Avatar className="w-40 h-40 mx-auto">
              <AvatarImage
                src={clinician.image}
                alt={clinician.name}
                className="object-cover w-full h-full"
              />
              <AvatarFallback className="text-2xl font-bold">
                {clinician.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>

            <h1 className="text-2xl font-bold">{clinician.name}</h1>
            <p className="text-primary font-semibold">{clinician.title}</p>

            {clinician.experience && (
              <Badge variant="secondary">
                {clinician.experience} Experience
              </Badge>
            )}

            <div className="space-y-2 text-sm">
              {clinician.email && (
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${clinician.email}`}>
                    {clinician.email}
                  </a>
                </div>
              )}

              {clinician.phone && (
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${clinician.phone}`}>
                    {clinician.phone}
                  </a>
                </div>
              )}

              {clinician.availability && (
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {clinician.availability}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">

            {/* Bio */}
            <div>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                About
              </h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {clinician.bio}
              </p>
            </div>

            {/* Specializations */}
            <div>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Specializations
              </h2>
              <div className="flex flex-wrap gap-2">
                {clinician.specializations.map((spec, i) => (
                  <Badge key={i} variant="secondary">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Education
              </h2>
              <ul>
                {clinician.education.map((edu, i) => (
                  <li key={i}>• {edu}</li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h2>
              <ul>
                {clinician.certifications.map((cert, i) => (
                  <li key={i}>• {cert}</li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex gap-4 mt-6">
              <Button className="flex-1" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}