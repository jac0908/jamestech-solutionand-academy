import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { BookOpen, Globe, Users, Crown, Sword, Landmark, Music, Leaf, Scale, Star, Shield, PenTool, Type } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import oromiaLandscape from "@/assets/oromo/oromia-landscape.jpg";
import gadaaCeremony from "@/assets/oromo/gadaa-ceremony.jpg";
import irreechaFestival from "@/assets/oromo/irreecha-festival.jpg";
import culturalArtifacts from "@/assets/oromo/cultural-artifacts.jpg";

const sectionIcons = [Crown, Globe, Scale, Sword, Landmark, Users, Music, Leaf, Star, BookOpen];

const OromoHistory = () => {
  const { lang } = useLanguage();
  const h = t.oromoHistory;

  return (
    <Layout>
      {/* Hero with landscape background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={oromiaLandscape} alt="Oromia landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="relative container py-28 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
              <BookOpen size={14} className="text-accent" />
              <span className="text-accent text-xs font-medium tracking-wide uppercase">
                {h.badge[lang]}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.08]">
              {h.title1[lang]}
              <br />
              <span className="text-gradient">{h.title2[lang]}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {h.desc[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction with image */}
      <section className="container py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              {h.introLabel[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {h.introTitle[lang]}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>{h.introP1[lang]}</p>
              <p>{h.introP2[lang]}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden card-elevated"
          >
            <img src={culturalArtifacts} alt="Oromo cultural artifacts" className="w-full h-80 object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Timeline Sections */}
      <section className="section-gradient">
        <div className="container py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              {h.timelineLabel[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {h.timelineTitle[lang]}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {h.sections.map((section, i) => {
              const Icon = sectionIcons[i % sectionIcons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group bg-card rounded-xl p-8 card-elevated transition-all duration-300 hover:card-elevated-hover hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-accent/20">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                        {section.title[lang]}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content[lang]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gadaa System with image */}
      <section className="bg-background">
        <div className="container py-28">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden card-elevated order-2 md:order-1"
            >
              <img src={gadaaCeremony} alt="Gadaa ceremony under the Odaa tree" className="w-full h-96 object-cover" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                {h.gadaaLabel[lang]}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                {h.gadaaTitle[lang]}
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>{h.gadaaP1[lang]}</p>
                <p>{h.gadaaP2[lang]}</p>
                <p>{h.gadaaP3[lang]}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Irreecha Festival Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={irreechaFestival} alt="Irreecha festival celebration" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        </div>
        <div className="relative container py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              {h.cultureItems[1].title[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-2xl mx-auto">
              {h.cultureItems[1].title[lang]}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
              {h.cultureItems[1].desc[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="section-gradient">
        <div className="container py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              {h.cultureLabel[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {h.cultureTitle[lang]}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {h.cultureItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-xl p-8 card-elevated text-center transition-all duration-300 hover:card-elevated-hover hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  {i === 0 && <Music size={24} className="text-accent" />}
                  {i === 1 && <Leaf size={24} className="text-accent" />}
                  {i === 2 && <Users size={24} className="text-accent" />}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-3">{item.title[lang]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OromoHistory;
