const features = [
  {
    number: "01",
    title: "KEUNGGULAN UTAMA",
    description: "PT Niatra Mega Gemilang menghadirkan tenaga kerja yang terpilih secara cermat dan terlatih intensif, siap memberikan layanan yang terstruktur dan efisien. Pelatihan fokus pada kompetensi profesional, disiplin kerja, dan kemampuan operasional sehingga tenaga kerja kami mampu mendukung berbagai sektor industri dan kebutuhan perusahaan dengan standar kualitas tinggi.",
    isList: false,
  },
  {
    number: "02",
    title: "SISTEM PENGAWASAN & MONITORING TERSTRUKTUR",
    items: [
      "Kinerja tenaga kerja dipantau melalui sistem pengawasan yang terintegrasi dan evaluasi rutin, menjamin performa selalu optimal.",
      "Memastikan tugas diselesaikan sesuai SOP dan standar profesional klien.",
      "Memberikan klien kendali penuh dan transparansi atas operasional tenaga kerja.",
    ],
    isList: true,
  },
  {
    number: "03",
    title: "PROFESIONALISME & DISIPLIN TINGGI",
    items: [
      "Setiap tenaga kerja bekerja berdasarkan standar operasional dan regulasi yang jelas.",
      "Disiplin, tanggap, dan berorientasi pada hasil terbaik bagi klien.",
      "Menjamin konsistensi dan kualitas layanan di seluruh proyek atau kegiatan.",
    ],
    isList: true,
  },
  {
    number: "04",
    title: "TRANSPARASI & RESPONSIF",
    items: [
      "Komunikasi dengan klien dilakukan terbuka dan akurat.",
      "Laporan kinerja dan evaluasi disampaikan tepat waktu.",
      "Tim PT siap merespon kebutuhan dan perubahan secara cepat, menjaga kelancaran operasional klien.",
    ],
    isList: true,
  },
  {
    number: "05",
    title: "NILAI & PRINSIP KERJA PERUSAHAAN",
    items: [
      "Profesional: Memberikan layanan sesuai standar tinggi.",
      "Disiplin: Patuh SOP, aturan, dan regulasi industri.",
      "Transparan: Komunikasi dan laporan selalu jelas dan terbuka.",
      "Responsif: Tanggap terhadap kebutuhan klien.",
      "Keberlanjutan: Menjalin hubungan jangka panjang yang mendukung pertumbuhan bisnis klien.",
    ],
    isList: true,
  },
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div
      className="group relative bg-card rounded-2xl p-6 md:p-8 card-shadow border border-transparent
                 transition-all duration-500 ease-out cursor-pointer
                 hover:bg-foreground hover:border-foreground hover:shadow-2xl hover:scale-[1.02]"
    >
      <span className="text-sm font-semibold text-muted-foreground mb-4 block transition-colors duration-500 group-hover:text-primary-foreground/70">
        {feature.number}
      </span>
      <h3 className="text-lg font-bold text-foreground mb-4 transition-colors duration-500 group-hover:text-primary-foreground">
        {feature.title}
      </h3>
      {feature.isList ? (
        <ul className="space-y-3">
          {feature.items?.map((item, idx) => (
            <li 
              key={idx} 
              className="text-sm text-muted-foreground flex gap-2 transition-colors duration-500 group-hover:text-primary-foreground/80"
            >
              <span className="text-foreground transition-colors duration-500 group-hover:text-primary-foreground">•</span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-500 group-hover:text-primary-foreground/80">
          {feature.description}
        </p>
      )}
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 section-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Mengapa Memilih Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.slice(0, 2).map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {features.slice(2).map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
