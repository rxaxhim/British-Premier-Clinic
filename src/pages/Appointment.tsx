import HeroBanner from "@/components/HeroBanner";

const Appointment = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner
        eyebrow="Appointments"
        title="Book Appointment"
        description="Schedule a consultation with our psychiatry & psychology team."
        badges={["Secure booking", "New patients welcome"]}
      />

      <section className="container mx-auto px-4 py-16 md:py-20">
        <p className="text-center text-muted-foreground">Coming soon...</p>
      </section>
    </div>
  );
};

export default Appointment;
