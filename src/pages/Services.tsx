import HeroBanner from "@/components/HeroBanner";

const Services = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner
        eyebrow="Services"
        title="Our Services"
        description="Comprehensive psychiatry & psychology care—assessments, therapy, and medication management tailored to you."
        badges={["Therapy & Assessments", "Medication Management"]}
      />

      <section className="container mx-auto px-4 py-16 md:py-20">
        <p className="text-center text-muted-foreground">Coming soon...</p>
      </section>
    </div>
  );
};

export default Services;
