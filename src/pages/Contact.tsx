import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
              <span className="text-accent text-xs font-medium tracking-wide uppercase">Contact</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.08]">
              Let's start a
              <br />
              <span className="text-gradient">conversation</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-lg">
              Whether you have a specific project in mind or want to explore possibilities, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Get in touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reach out through the form or contact us directly. Our team typically responds within one business day.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@nexustech.com" },
                { icon: Phone, label: "Phone", value: "+1 (415) 555-0182" },
                { icon: MapPin, label: "Headquarters", value: "101 Market St, San Francisco, CA 94105" },
                { icon: Clock, label: "Business Hours", value: "Mon – Fri, 9:00 AM – 6:00 PM PST" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-accent/20">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl bg-muted/50 border border-border h-48 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <MapPin size={24} className="text-accent/40 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 bg-card rounded-xl p-8 md:p-10 card-elevated"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Mail size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message sent!</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">Thank you for reaching out. We'll be in touch within one business day.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-accent font-medium hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">Send us a message</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form and we'll get back to you shortly.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Work Email</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 glow-accent"
                >
                  Send Message <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-xs text-muted-foreground text-center">We respect your privacy. No spam, ever.</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
