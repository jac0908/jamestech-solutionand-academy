import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Target, Eye, Heart, Award, TrendingUp, Clock } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "To empower organizations with technology that simplifies complexity and drives measurable outcomes." },
  { icon: Eye, title: "Vision", desc: "A world where every business has access to enterprise-grade technology, regardless of size." },
  { icon: Heart, title: "Values", desc: "Integrity, innovation, and an unwavering commitment to our clients' long-term success." },
];

const milestones = [
  { year: "2018", title: "Founded", desc: "Started as a 5-person consultancy in San Francisco." },
  { year: "2020", title: "Series A", desc: "Raised $12M to build our core platform." },
  { year: "2022", title: "Global Expansion", desc: "Opened offices in London and Singapore." },
  { year: "2024", title: "500+ Clients", desc: "Crossed 500 enterprise clients across 40 countries." },
];

const team = [
  { name: "Alexandra Chen", role: "Chief Executive Officer", bio: "15+ years leading technology transformations for Fortune 500 companies." },
  { name: "Marcus Reid", role: "Chief Technology Officer", bio: "Former engineering lead at AWS with deep expertise in distributed systems." },
  { name: "Sofia Patel", role: "VP of Product", bio: "Product strategist who has launched platforms serving millions of users." },
  { name: "James Okonkwo", role: "VP of Client Success", bio: "Dedicated to ensuring every client achieves their strategic objectives." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="relative container py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-accent text-xs font-medium tracking-wide uppercase">About Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.08]">
            Building the future of
            <br />
            <span className="text-gradient">enterprise technology</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-lg">
            Founded in 2018, NexusTech has grown from a small consultancy into a trusted technology partner for over 500 enterprises worldwide.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Quick Stats */}
    <section className="border-b border-border bg-card/50">
      <div className="container py-10 grid grid-cols-3 gap-8">
        {[
          { icon: Award, label: "Years of Excellence", value: "8+" },
          { icon: TrendingUp, label: "Revenue Growth YoY", value: "120%" },
          { icon: Clock, label: "Avg Response Time", value: "<1hr" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <s.icon size={20} className="text-accent mx-auto mb-2" />
            <p className="text-2xl md:text-3xl font-bold font-heading text-foreground">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="container py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Our Foundation</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What drives us forward</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group bg-card rounded-xl p-8 card-elevated transition-all duration-300 hover:card-elevated-hover hover:-translate-y-1"
          >
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Milestones that matter</h2>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex gap-6 pb-10 last:pb-0 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border-2 border-accent/30">
                  <span className="text-accent text-xs font-bold">{m.year}</span>
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pt-1.5">
                <h3 className="font-heading font-semibold text-foreground">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="bg-background">
      <div className="container py-28 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">From startup to global partner</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              NexusTech was born from a simple observation: enterprise software didn't have to be painful. Our founders, seasoned engineers from leading technology companies, saw an opportunity to bring consumer-grade simplicity to business-critical tools.
            </p>
            <p>
              Today we serve clients across 40+ countries, from high-growth startups to established multinationals. Our platform processes over 12 million API calls daily, and we maintain a 99.9% uptime SLA that our clients depend on.
            </p>
            <p>
              We remain privately held and profitable, allowing us to invest in long-term innovation rather than short-term metrics. Our team of 200+ engineers, designers, and strategists work from offices in San Francisco, London, and Singapore.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Team */}
    <section className="section-gradient">
      <div className="container py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">The team behind NexusTech</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-card rounded-xl p-8 card-elevated text-center transition-all duration-300 hover:card-elevated-hover hover:-translate-y-1"
            >
              <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 transition-colors group-hover:bg-accent/20">
                <span className="text-accent font-heading font-bold text-xl">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-foreground">{t.name}</h3>
              <p className="text-xs text-accent font-medium mt-1.5">{t.role}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
