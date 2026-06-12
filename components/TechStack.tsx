"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function TechStack() {
  const { language } = useLanguage();
  const { projects } = portfolioData[language];
  // Extract unique tech icons from all projects
  const allTechIcons = projects.flatMap(p => p.techIcons || []);
  const uniqueTechIcons = Array.from(new Map(allTechIcons.map(item => [item.name, item])).values());

  // Split into two rows
  const half = Math.ceil(uniqueTechIcons.length / 2);
  const row1 = uniqueTechIcons.slice(0, half);
  const row2 = uniqueTechIcons.slice(half);

  return (
    <section id="tech-stack" className="min-h-screen flex flex-col justify-center py-24 md:py-32 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-8 w-full relative z-10">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            {language === 'en' ? 'Tools & Languages' : 'Alat & Bahasa'}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-2">{language === 'en' ? 'Tech Stack' : 'Teknologi'}</h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-3 max-w-2xl mx-auto">{language === 'en' ? 'Technologies and tools I use to build data solutions' : 'Teknologi dan alat yang saya gunakan untuk membangun solusi data'}</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full overflow-hidden py-4"
        >
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Row 1 - Scrolls Left */}
            <motion.div
              className="flex w-max gap-3 sm:gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
              {[...row1, ...row1, ...row1].map((tech, idx) => (
                <div
                  key={`r1-${tech.name}-${idx}`}
                  className="group flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 shrink-0"
                >
                  <img
                    src={tech.iconUrl}
                    alt={tech.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 tracking-wide">{tech.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Row 2 - Scrolls Right */}
            <motion.div
              className="flex w-max gap-3 sm:gap-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
              {[...row2, ...row2, ...row2].map((tech, idx) => (
                <div
                  key={`r2-${tech.name}-${idx}`}
                  className="group flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 shrink-0"
                >
                  <img
                    src={tech.iconUrl}
                    alt={tech.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 tracking-wide">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
