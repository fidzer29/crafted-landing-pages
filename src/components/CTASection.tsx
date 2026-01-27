import { Button } from "@/components/ui/button";
import ctaWoman from "@/assets/cta-woman.jpg";

const CTASection = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative h-[400px] md:h-[450px]">
          <img
            src={ctaWoman}
            alt="Professional woman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                Siap Membantu Kebutuhan Outsourcing Anda
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Konsultasikan kebutuhan tenaga kerja perusahaan Anda bersama tim kami.
              </p>
              <Button 
                size="lg"
                className="rounded-xl bg-foreground text-background hover:bg-foreground/90"
              >
                Hubungi Kami Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
