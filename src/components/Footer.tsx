const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Kontak", href: "#contact" },
  ];

  const operatingHours = [
    { day: "Senin - Jumat", time: "08.00 – 17.00 WIB" },
    { day: "Sabtu", time: "08.00 – 14.00 WIB" },
    { day: "Minggu / Hari Libur Nasional", time: "Tutup (Layanan darurat tetap tersedia sesuai kebutuhan klien)" },
    { day: "Layanan Darurat / Event Khusus", time: "24 Jam, Sesuai permintaan klien" },
  ];

  return (
    <footer id="contact" className="section-gray py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Company Logo
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Jl. Hayam Wuruk No. 127 Lindeteves Trade Center Lt 2 Blok B2 No. 8</p>
              <p>203585</p>
              <p>mail@mail.com</p>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Jam Operasional
            </h4>
            <div className="space-y-4">
              {operatingHours.map((item, index) => (
                <div key={index}>
                  <p className="font-medium text-foreground text-sm">{item.day}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 PT Niatra Mega Gemilang . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
