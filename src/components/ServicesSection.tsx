import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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

  const scrollPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const scrollNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Layanan Kami
          </h2>
          <div className="flex gap-2">
            <button
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop: Show all 4 cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4">
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

        {/* Tablet: Show 2 cards */}
        <div className="hidden md:block lg:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="min-w-[50%] px-2">
                <div className="group">
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
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Show 1 card */}
        <div className="md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="min-w-full px-2">
                <div className="group">
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
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator - Mobile & Tablet */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
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
    </section>
  );
};

export default ServicesSection;
