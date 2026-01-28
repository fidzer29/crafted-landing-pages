import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
              onClick={() => api?.scrollPrev()}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border"
              onClick={() => api?.scrollNext()}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/4"
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots Indicator - Mobile only */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-primary" : "bg-border"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
