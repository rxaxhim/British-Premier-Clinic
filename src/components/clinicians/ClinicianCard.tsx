import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import ClinicianDialog from "./ClinicianDialog";
import { Clinician } from "@/types/clinician";

export default function ClinicianCard({
  clinician,
  index,
  total,
}: {
  clinician: Clinician;
  index: number;
  total: number;
}) {
  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
      flex flex-col h-full
      ${total % 2 === 1 && index === total - 1
        ? "md:col-span-2 md:max-w-md md:mx-auto"
        : ""}`}
    >
      <CardHeader className="text-center pb-4">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage
            src={clinician.image}
            alt={clinician.name}
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="text-xl font-bold">
            {clinician.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>

        <h3 className="text-xl font-bold text-card-foreground">
          {clinician.name}
        </h3>
        <p className="text-primary font-semibold">{clinician.title}</p>

        <Badge
          variant="secondary"
          className={`mt-2 inline-flex self-center px-3 py-1 text-sm leading-tight
          ${!clinician.experience ? "invisible" : ""}`}
        >
          {clinician.experience
            ? `${clinician.experience} Experience`
            : "\u00A0"}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4 flex flex-col flex-grow">
        <div>
          <h4 className="font-semibold text-card-foreground mb-2">
            Specializations:
          </h4>

          <div className="flex flex-wrap gap-2">
            {clinician.specializations.slice(0, 2).map((spec, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {spec}
              </Badge>
            ))}

            {clinician.specializations.length > 2 && (
              <div className="w-full">
                <Badge variant="outline" className="text-xs">
                  +{clinician.specializations.length - 2} more
                </Badge>
              </div>
            )}
          </div>
        </div>

        {clinician.availability && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{clinician.availability}</span>
          </div>
        )}

        <div className="mt-auto">
          <ClinicianDialog clinician={clinician}>
            <Button
              className="w-full border-primary text-blue-500 hover:bg-blue-500 hover:text-white"
              variant="outline"
            >
              Read More
            </Button>
          </ClinicianDialog>
        </div>
      </CardContent>
    </Card>
  );
}