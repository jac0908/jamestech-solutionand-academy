import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Cloud, Database, Code, LineChart, ArrowRight, Settings, Lock, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const serviceIcons = [Cloud, Database, Code, LineChart, Lock, Settings];

const Services = () => {
  const { lang } = useLanguage();
  const s = t.services;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="relative container py-28 md:py-36">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent text-xs font-medium tracking-wide uppercase">{s.badge[lang]}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.08]">
              {s.title1[lang]}
              <br />
              <span className="text-gradient">{s.title2[lang]}</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-lg">{s.desc[lang]}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{s.whatWeDo[lang]}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{s.whatWeDoTitle[lang]}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="group bg-card rounded-xl p-8 card-elevated transition-all duration-300 hover:card-elevated-hover hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/20">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title[lang]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.desc[lang]}</p>
                <ul className="space-y-2">
                  {item.features.map((f, fi) => (
                    <li key={fi} className="text-xs text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-accent/60 shrink-0" />
                      {f[lang]}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="section-gradient">
        <div className="container py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{s.process[lang]}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{s.processTitle[lang]}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{s.processDesc[lang]}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {s.processSteps.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="relative bg-card rounded-xl p-8 card-elevated text-center">
                <span className="text-5xl font-heading font-bold text-accent/10">{p.step}</span>
                <h3 className="font-heading font-semibold text-foreground mt-2 mb-2">{p.title[lang]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc[lang]}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">{s.ctaTitle[lang]}</h2>
            <p className="mt-5 text-primary-foreground/60 leading-relaxed text-lg">{s.ctaDesc[lang]}</p>
            <Link to="/contact" className="mt-10 group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:gap-3 glow-accent">
              {s.ctaButton[lang]} <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
