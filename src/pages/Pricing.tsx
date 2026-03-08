import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Check, ArrowRight, Zap, Shield, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const tierIcons = [Zap, Shield, Star];

const Pricing = () => {
  const { lang } = useLanguage();
  const p = t.pricing;

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
              <span className="text-accent text-xs font-medium tracking-wide uppercase">{p.badge[lang]}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.08]">
              {p.title1[lang]}
              <br />
              <span className="text-gradient">{p.title2[lang]}</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-lg">{p.desc[lang]}</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{p.plansLabel[lang]}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{p.plansTitle[lang]}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {p.tiers.map((tier, i) => {
            const Icon = tierIcons[i];
            const isPopular = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative bg-card rounded-xl p-8 card-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                  isPopular ? "ring-2 ring-accent" : ""
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      {p.popular[lang]}
                    </span>
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{tier.name[lang]}</h3>
                <p className="text-sm text-muted-foreground mt-2 mb-6">{tier.desc[lang]}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{tier.price[lang]}</span>
                  {tier.period && <span className="text-muted-foreground text-sm ml-1">{tier.period[lang]}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      {f[lang]}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    isPopular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 glow-accent"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tier.cta[lang]}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient">
        <div className="container py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{p.faqLabel[lang]}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{p.faqTitle[lang]}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto space-y-6">
            {p.faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl p-6 card-elevated">
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q[lang]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a[lang]}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">{p.ctaTitle[lang]}</h2>
            <p className="mt-5 text-primary-foreground/60 leading-relaxed text-lg">{p.ctaDesc[lang]}</p>
            <Link to="/contact" className="mt-10 group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:gap-3 glow-accent">
              {p.ctaButton[lang]} <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
