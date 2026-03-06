import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, MapPin, Phone } from "lucide-react";
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
      <section className="hero-gradient">
        <div className="container py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Let's start a conversation
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/75 leading-relaxed max-w-lg">
              Whether you have a specific project in mind or want to explore possibilities, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reach out through the form or contact us directly. Our team typically responds within one business day.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@nexustech.com" },
                { icon: Phone, label: "Phone", value: "+1 (415) 555-0182" },
                { icon: MapPin, label: "Headquarters", value: "101 Market St, San Francisco, CA 94105" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 bg-card rounded-lg p-8 card-elevated"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message sent</h3>
                <p className="text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Work Email</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
