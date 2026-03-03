import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const images = [
  "/heroimage1.jpg",
  "/heroimage2.jpg",
  "/heroimage3.jpg",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds for each slide

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="bg-background min-h-[85vh] flex items-center overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${images[currentImageIndex]}')`,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index
              ? "bg-primary w-8"
              : "bg-white/50 hover:bg-white"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-12 md:py-20"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-foreground">
              <span className="text-white">Empowering communities,</span>{" "}
              <span className="text-primary italic">transforming</span>{" "}
              <span className="text-white">lives.</span>
            </h1>

            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="rounded-full px-8 text-base">
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

