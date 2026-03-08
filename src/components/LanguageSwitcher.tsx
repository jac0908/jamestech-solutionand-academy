import { useLanguage } from "@/i18n/LanguageContext";
import { Language, languageLabels } from "@/i18n/translations";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

const LanguageSwitcher = ({ scrolled = true }: LanguageSwitcherProps) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const langs: Language[] = ["en", "am", "om"];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
          scrolled
            ? "text-muted-foreground hover:text-foreground hover:bg-muted"
            : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
        }`}
        aria-label="Switch language"
      >
        <Globe size={14} />
        <span>{languageLabels[lang]}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 rounded-lg bg-card border border-border shadow-lg overflow-hidden z-50">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-muted ${
                lang === l ? "text-accent font-semibold bg-accent/5" : "text-foreground"
              }`}
            >
              {languageLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
