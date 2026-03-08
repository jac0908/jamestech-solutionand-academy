import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const TermsOfService = () => {
  const { lang } = useLanguage();
  const tos = t.termsOfService;

  return (
    <Layout>
      <section className="container py-24 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">{tos.title[lang]}</h1>
        <p className="text-muted-foreground mb-6">{tos.lastUpdated[lang]}</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          {tos.sections.map((section, i) => (
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

export default TermsOfService;
