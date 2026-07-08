"use client";

import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const { personalInfo } = portfolioData[language];
  return (
    <footer className="pb-12">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="text-sm text-zinc-500 dark:text-zinc-400 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. {language === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}
          </div>
          <div className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 sm:mt-0 mt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
            {language === 'en' ? 'Last updated: July 8, 2026' : 'Terakhir diperbarui: 8 Juli 2026'}
          </div>
        </div>
      </div>
    </footer>
  );
}
