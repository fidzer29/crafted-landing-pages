import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

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
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/4 pl-4"
              >
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

        {/* Dots Indicator - Mobile only */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? "bg-primary" : "bg-border"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
