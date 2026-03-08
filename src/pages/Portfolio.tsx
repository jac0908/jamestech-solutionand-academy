import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, ExternalLink, Sparkles, TrendingUp } from "lucide-react";
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
        <div className="floating-orb w-[500px] h-[500px] bg-accent/10 -top-40 -right-40" />
        <div className="floating-orb w-[300px] h-[300px] bg-accent/8 bottom-10 left-10" />
        <div className="relative container py-32 md:py-40">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 mb-8">
              <Sparkles size={14} className="text-accent" />
              <span className="text-accent text-xs font-medium tracking-wide uppercase">{p.badge[lang]}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-primary-foreground leading-[1.05] tracking-tight">
              {p.title1[lang]}
              <br />
              <span className="text-gradient-warm">{p.title2[lang]}</span>
            </h1>
            <p className="mt-7 text-lg text-primary-foreground/60 leading-relaxed max-w-lg">{p.desc[lang]}</p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative container py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-xl mx-auto mb-14">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{p.workLabel[lang]}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">{p.workTitle[lang]}</h2>
          </motion.div>

          {/* Filter buttons */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-14">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-accent text-accent-foreground glow-accent scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-[1.02]"
                }`}
              >
                {filter.label[lang]}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, i) => {
                const originalIndex = p.projects.indexOf(project);
                return (
                  <motion.div
                    key={originalIndex}
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="group bg-card rounded-2xl overflow-hidden animated-border card-elevated transition-all duration-500 hover:-translate-y-2 hover:card-elevated-hover"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={projectImages[originalIndex]}
                        alt={project.title[lang]}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent-foreground bg-accent/90 rounded-lg px-4 py-2 backdrop-blur-sm"
                        >
                          {p.viewProject[lang]} <ExternalLink size={14} />
                        </motion.span>
                      </div>
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-primary-foreground/5 to-transparent" />
                    </div>
                    <div className="p-7">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
                        <TrendingUp size={12} />
                        {project.category[lang]}
                      </span>
                      <h3 className="font-heading text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-accent transition-colors duration-300">{project.title[lang]}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.desc[lang]}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, ti) => (
                          <span key={ti} className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium transition-colors duration-300 hover:bg-accent/20">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats */}
      <section className="section-gradient relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative container py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            {p.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card rounded-2xl p-6 card-elevated animated-border"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-warm">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label[lang]}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="floating-orb w-[400px] h-[400px] bg-accent/10 top-10 right-10" />
        <div className="floating-orb w-[250px] h-[250px] bg-accent/8 bottom-10 left-20" />
        <div className="relative container py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-lg mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight tracking-tight">
              {p.ctaTitle[lang]}
            </h2>
            <p className="mt-6 text-primary-foreground/55 leading-relaxed text-lg">{p.ctaDesc[lang]}</p>
            <Link to="/contact" className="mt-12 group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent/90 hover:gap-3 glow-accent-strong hover:scale-[1.02]">
              {p.ctaButton[lang]} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
