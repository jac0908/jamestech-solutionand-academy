import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "To empower organizations with technology that simplifies complexity and drives measurable outcomes." },
  { icon: Eye, title: "Vision", desc: "A world where every business has access to enterprise-grade technology, regardless of size." },
  { icon: Heart, title: "Values", desc: "Integrity, innovation, and an unwavering commitment to our clients' long-term success." },
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
    <section className="hero-gradient">
      <div className="container py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Building the future of enterprise technology
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/75 leading-relaxed max-w-lg">
            Founded in 2018, NexusTech has grown from a small consultancy into a trusted technology partner for over 500 enterprises worldwide.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="container py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-8 card-elevated"
          >
            <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5">
              <v.icon size={20} className="text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Story */}
    <section className="section-gradient">
      <div className="container py-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
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
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Leadership</p>
        <h2 className="text-3xl font-bold text-foreground">The team behind NexusTech</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-lg p-6 card-elevated text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-accent font-heading font-bold text-lg">
                {t.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <h3 className="font-heading font-semibold text-foreground">{t.name}</h3>
            <p className="text-xs text-accent font-medium mt-1">{t.role}</p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;
