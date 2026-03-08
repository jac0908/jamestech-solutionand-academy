import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const PrivacyPolicy = () => {
  const { lang } = useLanguage();
  const p = t.privacyPolicy;

  return (
    <Layout>
      <section className="container py-24 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">{p.title[lang]}</h1>
        <p className="text-muted-foreground mb-6">{p.lastUpdated[lang]}</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          {p.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-foreground mb-3">{section.title[lang]}</h2>
              <p>{section.content[lang]}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
