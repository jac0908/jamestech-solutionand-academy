import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Shield, Zap, BarChart3, MapPin, Users, Code, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const featureIcons = [Zap, Shield, BarChart3, MapPin, Users, Code];

const logos = ["Ethio Telecom", "CBE", "Ethiopian Airlines", "Dashen Bank", "Awash Bank", "safaricom Ethiopia"];

const Index = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 hero-gradient opacity-85" />
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative container py-32 md:py-44">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-medium tracking-wide uppercase">{t.hero.badge[lang]}</span>
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-primary-foreground">
              {t.hero.title1[lang]}
              <br />
              <span className="text-gradient">{t.hero.title2[lang]}</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-lg">
              {t.hero.desc[lang]}
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:gap-3 glow-accent">
                {t.nav.getStarted[lang]} <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-lg glass px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10">
                {t.nav.services[lang]}
              </Link>
            </motion.div>
            <motion.div custom={4} variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6 text-primary-foreground/50 text-xs">
              {[t.hero.badges.certified[lang], t.hero.badges.uptime[lang], t.hero.badges.local[lang]].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-accent/70" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-b border-border bg-card/50">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase whitespace-nowrap">{t.trustedBy[lang]}</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 w-full">
              {logos.map((logo, i) => (
                <motion.span key={logo} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-sm font-heading font-semibold text-muted-foreground/40 tracking-wide">
                  {logo}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.items.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="text-center">
              <p className="text-4xl md:text-5xl font-bold font-heading text-gradient">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label[lang]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-gradient">
        <div className="container py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto mb-20">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{t.capabilities[lang]}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">{t.featuresTitle[lang]}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{t.featuresDesc[lang]}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="group relative bg-card rounded-xl p-8 card-elevated transition-all duration-300 hover:card-elevated-hover hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/20">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc[lang]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background">
        <div className="container py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{t.testimonials.badge[lang]}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.testimonials.title[lang]}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-card rounded-xl p-8 card-elevated relative">
                <div className="text-accent/20 text-6xl font-serif absolute top-4 left-6 leading-none">"</div>
                <p className="text-foreground leading-relaxed mt-6 mb-6 relative z-10">{item.quote[lang]}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-heading font-bold text-sm">
                      {item.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.role[lang]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="relative container py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-lg mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              {t.cta.title1[lang]}
              <br />
              {t.cta.title2[lang]}
            </h2>
            <p className="mt-5 text-primary-foreground/60 leading-relaxed text-lg">{t.cta.desc[lang]}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:gap-3 glow-accent">
                {t.cta.contact[lang]} <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-lg glass px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10">
                {t.cta.learn[lang]}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
