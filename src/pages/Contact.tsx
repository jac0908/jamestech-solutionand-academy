import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import { checkRateLimit, reportHoneypotTriggered, reportFormAbuse } from "@/lib/security-monitor";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLanguage();
  const c = t.contact;
  const submitCount = useRef(0);
  const lastSubmitTime = useRef(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Honeypot check - hidden field that bots fill
    const honeypot = formData.get("website_url");
    if (honeypot) {
      reportHoneypotTriggered("contact");
      setSubmitted(true); // Fake success for bots
      return;
    }

    // Rate limit check
    if (checkRateLimit("contact_form")) {
      reportFormAbuse("contact");
      return;
    }

    // Rapid submission check
    const now = Date.now();
    if (now - lastSubmitTime.current < 3000) {
      submitCount.current++;
      if (submitCount.current >= 3) {
        reportFormAbuse("contact");
        return;
      }
    } else {
      submitCount.current = 0;
    }
    lastSubmitTime.current = now;

    setSubmitted(true);
  };

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
              <span className="text-accent text-xs font-medium tracking-wide uppercase">{c.badge[lang]}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.08]">
              {c.title1[lang]}
              <br />
              <span className="text-gradient">{c.title2[lang]}</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-lg">{c.desc[lang]}</p>
          </motion.div>
        </div>
      </section>

      <section className="container py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{c.getInTouch[lang]}</h2>
              <p className="text-muted-foreground leading-relaxed">{c.getInTouchDesc[lang]}</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: c.email[lang], value: "yaikobdiriba22@gmail.com" },
                { icon: Phone, label: c.phone[lang], value: "+251 922 067 302" },
                { icon: MapPin, label: c.headquarters[lang], value: "Addis Ababa, Ethiopia" },
                { icon: Clock, label: c.businessHours[lang], value: "Mon – Fri, 8:30 AM – 5:30 PM EAT" },
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
                <p className="text-xs text-muted-foreground">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-3 bg-card rounded-xl p-8 md:p-10 card-elevated">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Mail size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{c.messageSent[lang]}</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">{c.thankYou[lang]}</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-accent font-medium hover:underline">
                  {c.sendAnother[lang]}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">{c.sendMessage[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{c.sendMessageDesc[lang]}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{c.firstName[lang]}</label>
                    <input required type="text" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="Abebe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{c.lastName[lang]}</label>
                    <input required type="text" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="Kebede" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{c.workEmail[lang]}</label>
                  <input required type="email" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="abebe@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{c.company[lang]}</label>
                  <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="Company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{c.message[lang]}</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow" placeholder={c.messagePlaceholder[lang]} />
                </div>
                <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 glow-accent">
                  {c.sendButton[lang]} <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-xs text-muted-foreground text-center">{c.privacy[lang]}</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
