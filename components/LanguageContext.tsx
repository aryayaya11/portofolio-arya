"use client";

import * as React from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("en");
  React.useEffect(() => {
    const storedLang = localStorage.getItem("portfolio-lang") as Language;
    if (storedLang === "en" || storedLang === "id") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-lang", lang);
  }, []);

  // We can just always render the Provider. The client-side effect will update it if needed.
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
