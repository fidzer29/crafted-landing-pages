import aboutMeeting from "@/assets/about-meeting.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative">
      <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-3xl mx-4 md:mx-8 my-8">
        {/* Background Image */}
        <img
          src={aboutMeeting}
          alt="Business meeting"
          className="w-full h-full object-cover"
        />
        
        {/* Glass Cards */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 max-w-md glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Tentang Perusahaan Kami
          </h2>
          <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed">
            PT Niatra Mega Gemilang adalah perusahaan penyedia layanan outsourcing terintegrasi yang berkomitmen menghadirkan pengelolaan tenaga kerja secara strategis, profesional, dan berkelanjutan, selaras dengan regulasi ketenagakerjaan nasional.
          </p>
        </div>

        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 max-w-lg glass-card-dark rounded-2xl p-6 md:p-8">
          <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed">
            Didukung oleh tim manajemen dan profesional dengan rekam jejak kuat di bidang human capital management dan operasional, PT Niatra Mega Gemilang senantiasa mengedepankan keunggulan kualitas, kepatuhan, serta keandalan layanan, sebagai fondasi dalam membangun hubungan kerja yang solid dan berjangka panjang dengan para mitra bisnis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
