import HeroBanner from "@/components/HeroBanner";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner
        eyebrow="Contact"
        title="Contact Us"
        description="Questions about care, referrals, or scheduling? We’re here to help."
        badges={["Response within 1–2 business days", "Confidential support"]}
      />

      <section className="container mx-auto px-4 py-16 md:py-20">
        <p className="text-center text-muted-foreground">Coming soon...</p>
      </section>
    </div>
  );
};

export default Contact;
