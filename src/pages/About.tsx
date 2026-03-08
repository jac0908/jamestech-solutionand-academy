import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Target, Eye, Heart, Award, TrendingUp, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const About = () => {
  const { lang } = useLanguage();
  const a = t.about;

  const values = [
    { icon: Target, title: a.mission[lang], desc: a.missionDesc[lang] },
    { icon: Eye, title: a.vision[lang], desc: a.visionDesc[lang] },
    { icon: Heart, title: a.values[lang], desc: a.valuesDesc[lang] },
  ];

  const quickStats = [
    { icon: Award, label: a.statsYears[lang], value: "10+" },
    { icon: TrendingUp, label: a.statsGrowth[lang], value: "120%" },
    { icon: Clock, label: a.statsResponse[lang], value: "<1hr" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="relative container py-28 md:py-36">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent text-xs font-medium tracking-wide uppercase">{a.badge[lang]}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.08]">
              {a.title1[lang]}
              <br />
              <span className="text-gradient">{a.title2[lang]}</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-lg">{a.desc[lang]}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-border bg-card/50">
        <div className="container py-10 grid grid-cols-3 gap-8">
          {quickStats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <s.icon size={20} className="text-accent mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold font-heading text-foreground">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{a.foundation[lang]}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{a.foundationTitle[lang]}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="group bg-card rounded-xl p-8 card-elevated transition-all duration-300 hover:card-elevated-hover hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/20">
                <v.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-gradient">
        <div className="container py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{a.journey[lang]}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{a.journeyTitle[lang]}</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {a.milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }} className="flex gap-6 pb-10 last:pb-0 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border-2 border-accent/30">
                    <span className="text-accent text-xs font-bold">{m.year}</span>
                  </div>
                  {i < a.milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-heading font-semibold text-foreground">{m.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{m.desc[lang]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background">
        <div className="container py-28 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{a.story[lang]}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{a.storyTitle[lang]}</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>{a.storyP1[lang]}</p>
              <p>{a.storyP2[lang]}</p>
              <p>{a.storyP3[lang]}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-gradient">
        <div className="container py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{a.leadership[lang]}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{a.leadershipTitle[lang]}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="group bg-card rounded-xl p-8 card-elevated text-center transition-all duration-300 hover:card-elevated-hover hover:-translate-y-1">
                <div className="w-[72px] h-[72px] rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 transition-colors group-hover:bg-accent/20">
                  <span className="text-accent font-heading font-bold text-xl">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-xs text-accent font-medium mt-1.5">{member.role[lang]}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{member.bio[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
