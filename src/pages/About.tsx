import HeroBanner from "@/components/HeroBanner";

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner
        eyebrow="About"
        title="About Us"
        description="Dedicated psychiatry & psychology care grounded in science and compassion."
        badges={["Multidisciplinary team", "Evidence-based care"]}
      />

      <section className="container mx-auto px-4 py-16 md:py-20">
        <p className="text-center text-muted-foreground">Coming soon...</p>
      </section>
    </div>
  );
};

export default About;
