import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLanguage();

  const navLinks = [
    { label: t.nav.home[lang], to: "/" },
    { label: t.nav.about[lang], to: "/about" },
    { label: t.nav.services[lang], to: "/services" },
    { label: t.nav.pricing[lang], to: "/pricing" },
    { label: t.nav.contact[lang], to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 py-4">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>James</span>
          <span className="text-accent">Tech</span>
          <span className={`text-xs ml-1 font-normal ${scrolled ? "text-muted-foreground" : "text-primary-foreground/50"}`}>Solution</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.to
                  ? "text-accent"
                  : scrolled
                  ? "text-muted-foreground"
                  : "text-primary-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher scrolled={scrolled} />
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 glow-accent"
          >
            {t.nav.getStarted[lang]}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="container flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.to ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher scrolled={true} />
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground mt-2"
              >
                {t.nav.getStarted[lang]}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
