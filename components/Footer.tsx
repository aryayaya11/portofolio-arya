"use client";

import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const { personalInfo } = portfolioData[language];
  return (
    <footer className="pb-12">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {personalInfo.name}. {language === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}
        </div>
      </div>
    </footer>
  );
}
