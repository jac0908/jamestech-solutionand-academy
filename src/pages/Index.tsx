import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Shield, Zap, BarChart3, MapPin, Users, Code, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const featureIcons = [Zap, Shield, BarChart3, MapPin, Users, Code];

const logos = ["Ethio Telecom", "CBE", "Ethiopian Airlines", "Dashen Bank", "Awash Bank", "safaricom Ethiopia"];

const Index = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern opacity-30" />
        {/* Floating orbs */}
        <div className="floating-orb w-[500px] h-[500px] bg-accent/10 -top-40 -right-40" />
        <div className="floating-orb w-[300px] h-[300px] bg-accent/8 bottom-20 left-10" />
        <div className="floating-orb w-[420px] h-[420px] bg-accent/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative container py-28 md:py-40">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 mb-8">
              <Sparkles size={14} className="text-accent" />
              <span className="text-accent text-xs font-medium tracking-wide uppercase">{t.hero.badge[lang]}</span>
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-6xl lg:text-[4.75rem] font-bold leading-[1.05] text-primary-foreground tracking-tight text-balance">
              {t.hero.title1[lang]}
              <br />
              <span className="text-gradient-warm">{t.hero.title2[lang]}</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="mt-7 text-lg md:text-xl text-primary-foreground/65 leading-relaxed max-w-xl mx-auto text-balance">
              {t.hero.desc[lang]}
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent/90 hover:gap-3 glow-accent-strong hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97]">
                {t.nav.getStarted[lang]} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-xl glass px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:scale-[1.02] focus-visible:bg-primary-foreground/15 focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97]">
                {t.nav.services[lang]}
              </Link>
            </motion.div>
            <motion.div custom={4} variants={fadeUp} className="mt-12 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/45 text-xs">
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
                <motion.span key={logo} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-sm font-heading font-semibold text-muted-foreground/40 tracking-wide hover:text-muted-foreground/60 transition-colors duration-300">
                  {logo}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative container py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.items.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-center">
              <p className="text-4xl md:text-5xl font-bold font-heading text-gradient-warm">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label[lang]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-gradient relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative container py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-xl mx-auto mb-20">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{t.capabilities[lang]}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">{t.featuresTitle[lang]}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{t.featuresDesc[lang]}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="group relative bg-card rounded-2xl p-8 card-elevated animated-border transition-all duration-500 hover:card-elevated-hover hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-2xl bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{f.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc[lang]}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative container py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-xl mx-auto mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{t.testimonials.badge[lang]}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{t.testimonials.title[lang]}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="group bg-card rounded-2xl p-8 card-elevated animated-border relative transition-all duration-500 hover:-translate-y-1 hover:card-elevated-hover">
                <div className="text-accent/15 text-7xl font-serif absolute top-3 left-6 leading-none select-none">"</div>
                <p className="text-foreground leading-relaxed mt-8 mb-6 relative z-10">{item.quote[lang]}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center ring-2 ring-accent/20">
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
        <div className="floating-orb w-[400px] h-[400px] bg-accent/10 top-10 right-10" />
        <div className="floating-orb w-[250px] h-[250px] bg-accent/8 bottom-10 left-20" />
        <div className="relative container py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-lg mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight tracking-tight">
              {t.cta.title1[lang]}
              <br />
              <span className="text-gradient-warm">{t.cta.title2[lang]}</span>
            </h2>
            <p className="mt-6 text-primary-foreground/55 leading-relaxed text-lg">{t.cta.desc[lang]}</p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent/90 hover:gap-3 glow-accent-strong hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97]">
                {t.cta.contact[lang]} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-xl glass px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:scale-[1.02] focus-visible:bg-primary-foreground/15 focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97]">
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
