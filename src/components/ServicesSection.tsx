import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import serviceSecurity from "@/assets/service-security.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceOperations from "@/assets/service-operations.jpg";
import serviceEvent from "@/assets/service-event.jpg";

const services = [
  {
    image: serviceSecurity,
    title: "Tenaga Pengamanan & Security Event",
  },
  {
    image: serviceCleaning,
    title: "Cleaning Service & Facility Support",
  },
  {
    image: serviceOperations,
    title: "Tenaga Pendukung Operasional Perusahaan",
  },
  {
    image: serviceEvent,
    title: "Event Support & Staffing",
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Layanan Kami
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-foreground">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-medium text-foreground">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
