import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, ArrowLeftRight, Stethoscope } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PageNavigationCarousel = () => {
  const navigationItems = [
    {
      title: "About Our Clinic",
      description:
        "Learn about our mission, values, and commitment to providing exceptional mental health care for our community.",
      link: "/about",
      icon: BookOpen,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Explore Our Services",
      description:
        "Browse our full range of psychiatry and psychology services tailored for children, adolescents, and adults.",
      link: "/services",
      icon: Stethoscope,
      gradient: "from-blue-600 to-red-700",
    },
    {
      title: "Meet Our Doctors",
      description:
        "Discover our team of experienced mental health professionals dedicated to your wellbeing and recovery.",
      link: "/doctors",
      icon: Users,
      gradient: "from-green-500 to-teal-600",
    },
  ];

  return (
    <section className="py-16 bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover More About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our clinic and meet the professionals who are here to support your mental health journey.
          </p>
        </div>

        {/* Keep content clipped on mobile, allow arrows to peek outside on desktop */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden md:overflow-visible">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {navigationItems.map((item, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 pl-2 sm:pl-4">
                  <Link to={item.link} className="block group h-full">
                    <div className="bg-card border rounded-xl p-6 sm:p-8 h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Show arrows on desktop only; nudge them slightly outward */}
            <CarouselPrevious
              aria-label="Previous"
              className="hidden md:flex md:-left-10"
            />
            <CarouselNext
              aria-label="Next"
              className="hidden md:flex md:-right-10"
            />
          </Carousel>
        </div>

        {/* Mobile swipe hint */}
        <div className="mt-4 sm:hidden flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ArrowLeftRight className="h-4 w-4 motion-safe:animate-pulse" />
          <span>Swipe to explore</span>
        </div>
      </div>
    </section>
  );
};

export default PageNavigationCarousel;
