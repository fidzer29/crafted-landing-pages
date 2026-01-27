import { Button } from "@/components/ui/button";
import heroBuilding from "@/assets/hero-building.jpg";

const partnerLogos = [
  "SLITI",
  "LOGOIPSUM",
  "Logoipsum",
  "Logoipsum",
  "LGPSM",
  "Logoipsum",
  "LOGOIPSUM",
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBuilding}
          alt="Modern office building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 min-h-screen flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Solusi Outsourcing Profesional untuk Mendukung Operasional Bisnis Anda
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in">
            Kami menyediakan tenaga kerja outsourcing yang terlatih, terpercaya, dan siap mendukung efisiensi serta produktivitas perusahaan Anda.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="rounded-xl bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 backdrop-blur-sm px-6"
            >
              Konsultasi Kebutuhan Anda
            </Button>
            <Button 
              size="lg"
              className="rounded-xl bg-foreground text-background hover:bg-foreground/90 px-6"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="text-primary-foreground/60 font-semibold text-sm md:text-base tracking-wide flex items-center gap-2"
              >
                {index % 2 === 0 && <span className="text-xl">◎</span>}
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
