import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Cloud, Database, Code, LineChart, ArrowRight, Settings, Lock } from "lucide-react";

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

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-gradient">
      <div className="container py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Solutions engineered for results
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/75 leading-relaxed max-w-lg">
            Comprehensive technology services designed to solve your most complex challenges and accelerate your digital transformation.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="container py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-lg p-8 card-elevated transition-shadow duration-300 hover:card-elevated-hover"
          >
            <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5">
              <s.icon size={20} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <ul className="grid grid-cols-2 gap-2">
              {s.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-gradient">
      <div className="container py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-3xl font-bold text-foreground">Not sure where to start?</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our team will assess your needs and recommend the right approach.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
