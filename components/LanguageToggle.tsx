"use client";

import * as React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed bottom-6 left-[84px] md:bottom-auto md:left-auto md:top-4 md:right-[84px] z-[100] w-20 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm" />
    );
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <div
      onClick={toggleLanguage}
      className="fixed bottom-6 left-[84px] md:bottom-auto md:left-auto md:top-4 md:right-[84px] z-[100] flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full p-1 shadow-sm h-12 w-20 cursor-pointer hover:shadow-md transition-shadow select-none"
      aria-label="Toggle language"
      title={language === "en" ? "Switch to Indonesian" : "Ganti ke Bahasa Inggris"}
    >
      <motion.div
        layout
        initial={false}
        animate={{ x: language === "en" ? 0 : 32 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-700"
      />
      <div className="absolute inset-1 pointer-events-none">
        <div className="absolute left-0 top-0 w-10 h-10 flex justify-center items-center">
          <span className={`flex justify-center items-center text-[13px] font-extrabold transition-colors ${language === "en" ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400 dark:text-zinc-600"}`} title="English">
            {language === "en" ? (
              <img src="/flags/gb.png" width="20" height="15" alt="UK" className="rounded-sm" />
            ) : "EN"}
          </span>
        </div>
        <div className="absolute left-[32px] top-0 w-10 h-10 flex justify-center items-center">
          <span className={`flex justify-center items-center text-[13px] font-extrabold transition-colors ${language === "id" ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400 dark:text-zinc-600"}`} title="Bahasa Indonesia">
            {language === "id" ? (
              <img src="/flags/id.png" width="20" height="15" alt="ID" className="rounded-sm shadow-sm" />
            ) : "ID"}
          </span>
        </div>
      </div>
    </div>
  );
}
