import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import processConsultation from "@/assets/process-consultation.jpg";

const processes = [
  {
    image: processConsultation,
    title: "KONSULTASI KEBUTUHAN",
    description: "Diskusi mendalam dengan klien untuk memahami kebutuhan tenaga kerja dan layanan. Dan menghasilkan solusi yang tepat dan efisien sesuai target operasional klien.",
  },
  {
    image: processConsultation,
    title: "SELEKSI & PELATIHAN",
    description: "Proses seleksi ketat dan pelatihan intensif untuk memastikan tenaga kerja siap dengan standar tinggi.",
  },
  {
    image: processConsultation,
    title: "PENEMPATAN & MONITORING",
    description: "Penempatan tenaga kerja sesuai kebutuhan klien dengan monitoring berkala untuk menjaga kualitas.",
  },
];

const ProcessSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % processes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + processes.length) % processes.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Proses Kerja Kami
        </h2>

        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {processes.map((process, index) => (
              <div key={index} className="min-w-full relative">
                <div className="relative h-[400px] md:h-[500px]">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 image-overlay" />
                  <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                      {process.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm md:text-base max-w-2xl leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
