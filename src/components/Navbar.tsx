import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav className="w-full">
      <div className="flex items-start justify-between gap-4 px-5 md:px-8 pt-5">
        {/* Left logo block (blue) */}
        <a
          href="#home"
          className="rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl bg-primary px-7 py-5 text-lg md:text-xl font-bold text-primary-foreground whitespace-nowrap"
        >
          Company Logo
        </a>

        {/* Center nav pill */}
        <div className="hidden md:flex nav-glass rounded-full px-12 py-5 items-center justify-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA pill */}
        <div className="hidden md:block">
          <div className="nav-glass rounded-2xl p-2">
            <Button variant="outline" className="rounded-xl border-foreground/15 hover:bg-foreground/5 px-6">
              Konsultasi Gratis
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden nav-glass rounded-2xl p-3"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-5 mt-3">
          <div className="nav-glass rounded-2xl px-6 py-5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="outline" className="rounded-xl border-foreground/20 w-full mt-2">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
