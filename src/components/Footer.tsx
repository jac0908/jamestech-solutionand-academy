import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone, Github, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import logo from "@/assets/logo-new.jpg";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-pattern opacity-15" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="relative container py-20">
        {/* CTA Banner */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
              Ready to build something <span className="text-gradient">remarkable</span>?
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/60 max-w-md">
              Partner with James Tech Solution & Academy to ship a modern digital experience.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 glow-accent-strong hover:scale-[1.02] shrink-0"
          >
            {t.nav.getStarted[lang]}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="James Tech Solution and Academy Logo" className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/20 shadow-lg" />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold font-heading tracking-tight text-primary-foreground">James Tech Solution & Academy</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/55">Innovate · Educate · Elevate</span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-primary-foreground/55 leading-relaxed max-w-sm">
              {t.footer.desc[lang]}
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-accent mt-1 shrink-0" />
                <a href="mailto:jamestechsolutionandacademy@gmail.com" className="hover:text-accent transition-colors break-all">jamestechsolutionandacademy@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-accent shrink-0" />
                <a href="tel:+251922067302" className="hover:text-accent transition-colors">+251 922 067 302</a>
              </li>
              <li className="flex items-center gap-2.5"><MapPin size={14} className="text-accent shrink-0" /> Addis Ababa, Ethiopia</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-5">{t.footer.company[lang]}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/55">
              <li><Link to="/about" className="hover:text-accent transition-colors">{t.footer.aboutUs[lang]}</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">{t.footer.servicesLabel[lang]}</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">{t.footer.contactLabel[lang]}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-5">{t.footer.servicesTitle[lang]}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/55">
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.cloud[lang]}</li>
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.data[lang]}</li>
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.dev[lang]}</li>
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.consulting[lang]}</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-5">{t.footer.connect[lang]}</h4>
            <div className="flex items-center gap-2.5">
              <a href="https://t.me/jacob_web123" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:bg-accent/10 hover:border-accent/40 transition-all">
                <Send size={16} />
              </a>
              <a href="https://github.com/jac0908" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:bg-accent/10 hover:border-accent/40 transition-all">
                <Github size={16} />
              </a>
              <a href="mailto:jamestechsolutionandacademy@gmail.com" aria-label="Email" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:bg-accent/10 hover:border-accent/40 transition-all">
                <Mail size={16} />
              </a>
            </div>
            <p className="mt-5 text-xs text-primary-foreground/45 leading-relaxed">
              Follow our journey across socials for product launches, tutorials and academy news.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/45">
          <p>{t.footer.rights[lang]}</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">{t.footer.privacy[lang]}</Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors">{t.footer.terms[lang]}</Link>
            <Link to="/admin/login" className="hover:text-accent transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
