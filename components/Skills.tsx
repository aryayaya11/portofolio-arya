"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";
import { Code2, BarChart3, BrainCircuit, TrendingUp, Wrench, Star, LayoutGrid } from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming": <Code2 className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />,
  "Data Analytics": <BarChart3 className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />,
  "Machine Learning": <BrainCircuit className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />,
  "Business Intelligence": <TrendingUp className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />,
  "Tools": <Wrench className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />,
  "Soft Skills": <Star className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />,
};

const getCategoryIcon = (category: string) => CATEGORY_ICONS[category] || <LayoutGrid className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Skills() {
  const { language } = useLanguage();
  const { skills } = portfolioData[language];
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-8 w-full">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            {language === 'en' ? 'Skills' : 'Keahlian'}
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {language === 'en' ? 'Technical Expertise' : 'Keahlian Teknis'}
          </h2>
        </motion.div>

        {/* Grid of category groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data], i) => (
            <motion.div
              key={category}
              {...fadeUp(i * 0.07)}
              className="space-y-4"
            >
              {/* Category label */}
              <div className="flex items-center gap-3">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-2 rounded-lg shadow-sm">
                  {getCategoryIcon(category)}
                </div>
                <span className="text-base font-bold text-zinc-900 dark:text-zinc-200">{category}</span>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {data.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm dark:hover:shadow-md hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
