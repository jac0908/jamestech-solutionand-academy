import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logo-new.jpg";

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
    { label: t.nav.portfolio[lang], to: "/portfolio" },
    { label: t.nav.contact[lang], to: "/contact" },
    { label: t.nav.oromoHistory[lang], to: "/oromo-history" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto max-w-6xl flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-5 py-2.5 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl border border-border/60 shadow-[0_8px_30px_-12px_hsl(217_60%_12%/0.18)]"
            : "bg-white/5 backdrop-blur-xl border border-white/10"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-accent/40 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <img src={logo} alt="James Tech Solution and Academy Logo" className="relative h-10 w-10 rounded-xl object-cover ring-1 ring-white/20 shadow-lg" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className={`text-[13px] font-bold font-heading tracking-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>James Tech Solution & Academy</span>
            <span className={`text-[9px] tracking-[0.18em] uppercase ${scrolled ? "text-muted-foreground" : "text-primary-foreground/55"}`}>Innovate · Educate · Elevate</span>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 text-[13px] font-medium rounded-lg transition-all ${
                  active
                    ? scrolled ? "text-foreground bg-secondary" : "text-primary-foreground bg-white/10"
                    : scrolled ? "text-muted-foreground hover:text-foreground hover:bg-secondary/60" : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <LanguageSwitcher scrolled={scrolled} />
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-[13px] font-semibold text-accent-foreground transition-all hover:bg-accent/90 glow-accent hover:scale-[1.03]"
          >
            {t.nav.getStarted[lang]}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 mx-auto max-w-6xl rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                    location.pathname === link.to ? "text-accent bg-accent/10" : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-1 pt-2">
                <LanguageSwitcher scrolled={true} />
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground mt-2 glow-accent"
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
