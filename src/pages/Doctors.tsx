import HeroBanner from "@/components/HeroBanner";

const Doctors = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner
        eyebrow="Clinicians"
        title="Our Doctors"
        description="Meet our team of psychiatrists, psychologists, and therapists."
        badges={["Board-certified", "Evidence-based care"]}
      />

      <section className="container mx-auto px-4 py-16 md:py-20">
        <p className="text-center text-muted-foreground">Coming soon...</p>
      </section>
    </div>
  );
};

export default Doctors;
