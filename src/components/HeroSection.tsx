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
    <section id="home" className="bg-secondary px-4 md:px-6 lg:px-8 pt-0 pb-4 md:pb-6 lg:pb-8">
      <div className="relative min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] overflow-hidden rounded-b-[2rem] md:rounded-b-[2.5rem] lg:rounded-b-[3rem]">
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
        <div className="relative z-10 min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] flex flex-col">
          {/* Spacer for navbar */}
          <div className="h-20 md:h-24" />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-between px-6 md:px-10 lg:px-14 xl:px-20 pb-8">
            <div className="flex-1 flex flex-col justify-center max-w-4xl pt-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-[1.15] mb-6 animate-fade-in">
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
      </div>
    </section>
  );
};

export default HeroSection;
