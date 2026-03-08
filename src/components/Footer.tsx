import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 hero-pattern opacity-10" />
      <div className="relative container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="JamesTech Logo" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
              {t.footer.desc[lang]}
            </p>
            <Link
              to="/contact"
              className="mt-6 group inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
            >
              {t.nav.getStarted[lang]} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-5">{t.footer.company[lang]}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li><Link to="/about" className="hover:text-accent transition-colors">{t.footer.aboutUs[lang]}</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">{t.footer.servicesLabel[lang]}</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">{t.footer.contactLabel[lang]}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-5">{t.footer.servicesTitle[lang]}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.cloud[lang]}</li>
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.data[lang]}</li>
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.dev[lang]}</li>
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.consulting[lang]}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-5">{t.footer.connect[lang]}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li><a href="https://t.me/jacob_web123" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Telegram</a></li>
              <li className="hover:text-accent transition-colors cursor-pointer">LinkedIn</li>
              <li><a href="https://github.com/jac0908" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/40">
          <p>{t.footer.rights[lang]}</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="hover:text-accent transition-colors cursor-pointer">{t.footer.privacy[lang]}</span>
            <span className="hover:text-accent transition-colors cursor-pointer">{t.footer.terms[lang]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
