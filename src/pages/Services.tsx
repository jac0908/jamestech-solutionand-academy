import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Cloud, Database, Code, LineChart, ArrowRight, Settings, Lock, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Migrate, optimize, and manage your cloud infrastructure with confidence. We design multi-cloud architectures that maximize performance and minimize cost.",
    features: ["Cloud Migration", "Infrastructure as Code", "Cost Optimization", "24/7 Monitoring"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    desc: "Transform raw data into strategic advantage. Our analytics platforms deliver real-time insights and predictive models that drive informed decision-making.",
    features: ["Data Warehousing", "BI Dashboards", "Machine Learning", "ETL Pipelines"],
  },
  {
    icon: Code,
    title: "Custom Development",
    desc: "Purpose-built software tailored to your unique workflows. From microservices to full-stack applications, we engineer solutions that scale with your growth.",
    features: ["API Development", "Web Applications", "Mobile Apps", "System Integration"],
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    desc: "Align technology investments with business goals. Our consultants help you build roadmaps that deliver measurable ROI and competitive advantage.",
    features: ["Technology Assessment", "Roadmap Planning", "Process Automation", "Change Management"],
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    desc: "Protect your organization with defense-in-depth security strategies. From compliance audits to incident response, we keep your assets secure.",
    features: ["Security Audits", "Compliance (SOC 2, ISO)", "Threat Detection", "Incident Response"],
  },
  {
    icon: Settings,
    title: "Managed Services",
    desc: "Focus on your core business while we handle the technology. Our managed services ensure reliability, performance, and continuous improvement.",
    features: ["DevOps & SRE", "Application Support", "Performance Tuning", "SLA Management"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We listen to understand your challenges, goals, and constraints." },
  { step: "02", title: "Strategy", desc: "We design a tailored roadmap aligned with your business objectives." },
  { step: "03", title: "Build", desc: "Our engineers develop and test solutions using proven methodologies." },
  { step: "04", title: "Launch & Scale", desc: "We deploy, monitor, and continuously optimize for long-term success." },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="relative container py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-accent text-xs font-medium tracking-wide uppercase">Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.08]">
            Solutions engineered
            <br />
            <span className="text-gradient">for results</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-lg">
            Comprehensive technology services designed to solve your most complex challenges and accelerate your digital transformation.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="container py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">End-to-end technology services</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group bg-card rounded-xl p-8 card-elevated transition-all duration-300 hover:card-elevated-hover hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/20">
              <s.icon size={22} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <ul className="space-y-2">
              {s.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-accent/60 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Process */}
    <section className="section-gradient">
      <div className="container py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How we deliver</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">A proven methodology that minimizes risk and maximizes value.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-card rounded-xl p-8 card-elevated text-center"
            >
              <span className="text-5xl font-heading font-bold text-accent/10">{p.step}</span>
              <h3 className="font-heading font-semibold text-foreground mt-2 mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">Not sure where to start?</h2>
          <p className="mt-5 text-primary-foreground/60 leading-relaxed text-lg">
            Our team will assess your needs and recommend the right approach.
          </p>
          <Link
            to="/contact"
            className="mt-10 group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:gap-3 glow-accent"
          >
            Book a Consultation <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
