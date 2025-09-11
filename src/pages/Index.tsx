import Hero from "@/components/Hero";
import PageNavigationCarousel from "@/components/PageNavigationCarousel";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <PageNavigationCarousel />
    </div>
  );
};

export default Index;
