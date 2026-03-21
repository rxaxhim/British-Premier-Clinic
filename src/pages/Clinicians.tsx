import HeroBanner from "@/components/HeroBanner";
import CliniciansSection from "@/components/clinicians/CliniciansSection";
import { clinicians } from "@/data/clinicians";

const Clinicians = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner
        eyebrow="Clinicians"
        title="Our Clinicians"
        description="Meet our team of psychiatrists, psychologists, and therapists."
        badges={["Board-certified", "Evidence-based care"]}
      />

      <CliniciansSection clinicians={clinicians} />

    </div>
  );
};

export default Clinicians;