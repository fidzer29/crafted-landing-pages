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
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Spacer for navbar */}
        <div className="h-28 md:h-32" />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-16 xl:px-24 pb-8">
          <div className="flex-1 flex flex-col justify-center max-w-4xl pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-primary-foreground leading-[1.15] mb-6 animate-fade-in">
              Solusi Outsourcing Profesional untuk Mendukung Operasional Bisnis Anda
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in">
              Kami menyediakan tenaga kerja outsourcing yang terlatih, terpercaya, dan siap mendukung efisiensi serta produktivitas perusahaan Anda.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="rounded-xl bg-primary-foreground/20 border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/30 backdrop-blur-sm px-6 py-6 text-base"
              >
                Konsultasi Kebutuhan Anda
              </Button>
              <Button 
                size="lg"
                className="rounded-xl bg-foreground text-background hover:bg-foreground/90 px-6 py-6 text-base"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-12 pt-6 border-t border-primary-foreground/20">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 md:gap-8 lg:gap-10">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="text-primary-foreground/70 font-semibold text-sm md:text-base tracking-wide flex items-center gap-2"
                >
                  {index % 2 === 0 && <span className="text-lg">◎</span>}
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
