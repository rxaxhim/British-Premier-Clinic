import ClinicianCard from "./ClinicianCard";
import { Clinician } from "@/types/clinician";

export default function CliniciansSection({
  clinicians,
}: {
  clinicians: Clinician[];
}) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-stretch">
          {clinicians.map((clinician, index) => (
            <ClinicianCard
              key={clinician.id}
              clinician={clinician}
              index={index}
              total={clinicians.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}