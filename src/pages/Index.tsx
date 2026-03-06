import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Shield, Zap, BarChart3, Globe, Users, Code } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "12M+", label: "API Calls/Day" },
  { value: "40+", label: "Countries Served" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Performance",
    desc: "Sub-millisecond response times powered by our globally distributed infrastructure.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "SOC 2 compliant with end-to-end encryption and advanced threat detection.",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    desc: "Real-time dashboards and predictive insights to inform strategic decisions.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    desc: "Deploy across 40+ regions with automatic failover and load balancing.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Built-in tools for cross-functional teams with role-based access controls.",
  },
  {
    icon: Code,
    title: "Developer-First",
    desc: "Comprehensive APIs, SDKs, and documentation for seamless integration.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="relative container py-28 md:py-40">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-accent text-sm font-medium tracking-widest uppercase mb-4"
            >
              Next-Generation Platform
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold leading-tight text-primary-foreground"
            >
              Technology that powers your ambition
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-6 text-lg text-primary-foreground/75 leading-relaxed max-w-lg"
            >
              We build scalable software solutions that help enterprises streamline operations, unlock insights, and accelerate growth.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold font-heading text-foreground">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-gradient">
        <div className="container py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Built for enterprise demands
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every feature is designed to meet the rigorous requirements of modern businesses at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-lg p-8 card-elevated transition-shadow duration-300 hover:card-elevated-hover"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5">
                  <f.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient">
        <div className="container py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to transform your business?
            </h2>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed">
              Let's discuss how NexusTech can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
