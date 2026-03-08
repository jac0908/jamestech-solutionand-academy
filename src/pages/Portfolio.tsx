import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

import bankingImg from "@/assets/portfolio/banking-app.jpg";
import ecommerceImg from "@/assets/portfolio/ecommerce-platform.jpg";
import healthcareImg from "@/assets/portfolio/healthcare-system.jpg";
import logisticsImg from "@/assets/portfolio/logistics-dashboard.jpg";
import govImg from "@/assets/portfolio/gov-portal.jpg";
import telecomImg from "@/assets/portfolio/telecom-analytics.jpg";

const projectImages = [bankingImg, ecommerceImg, healthcareImg, logisticsImg, govImg, telecomImg];

const Portfolio = () => {
  const { lang } = useLanguage();
  const p = t.portfolio;
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = p.filters;
  const filteredProjects = activeFilter === "all"
    ? p.projects
    : p.projects.filter((_, i) => {
        const categories = ["fintech", "ecommerce", "healthcare", "logistics", "government", "telecom"];
        return categories[i] === activeFilter;
      });

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

      {/* Filter + Projects */}
      <section className="container py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto mb-12">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{p.workLabel[lang]}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{p.workTitle[lang]}</h2>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.key
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {filter.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, i) => {
              const originalIndex = p.projects.indexOf(project);
              return (
                <motion.div
                  key={originalIndex}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group bg-card rounded-xl overflow-hidden card-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={projectImages[originalIndex]}
                      alt={project.title[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                        {p.viewProject[lang]} <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">{project.category[lang]}</span>
                    <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-2">{project.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc[lang]}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, ti) => (
                        <span key={ti} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Stats */}
      <section className="section-gradient">
        <div className="container py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            {p.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label[lang]}</div>
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

export default Portfolio;
