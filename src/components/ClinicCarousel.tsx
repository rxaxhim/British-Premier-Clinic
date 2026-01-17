import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/interior_img1.jpeg",
  "/interior_img2.jpeg",
  "/interior_img3.jpeg",
  "/interior_img4.jpeg",
  "/interior_img5.jpeg",
  "/interior_img6.jpeg",
  "/interior_img7.jpeg",
  "/interior_img8.jpeg",
  "/interior_img9.jpeg",
];

const ClinicCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);
  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Clinic Environment
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A calm, private, and welcoming space designed to support your mental well-being.
            </p>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
            {images.map((src, i) => (
            <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Blurred background */}
                <img
                src={src}
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
                />

                {/* Main image */}
                <img
                src={src}
                alt={`Clinic interior ${i + 1}`}
                className="relative w-full h-full object-contain"
                loading={i === 0 ? "eager" : "lazy"}
                />
            </div>
            ))}


            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === index
                      ? "bg-white scale-110"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClinicCarousel;
