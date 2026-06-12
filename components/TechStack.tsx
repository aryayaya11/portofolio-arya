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

  // Split into 4 chunks for dynamic rows
  const quarter = Math.ceil(uniqueTechIcons.length / 4);
  const q1 = uniqueTechIcons.slice(0, quarter);
  const q2 = uniqueTechIcons.slice(quarter, quarter * 2);
  const q3 = uniqueTechIcons.slice(quarter * 2, quarter * 3);
  const q4 = uniqueTechIcons.slice(quarter * 3);

  const desktopRow1 = [...q1, ...q2];
  const desktopRow2 = [...q3, ...q4];

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

          {/* Desktop Layout - 2 Rows */}
          <div className="hidden md:flex flex-col gap-4">
            <MarqueeRow items={desktopRow1} direction="left" duration={100} />
            <MarqueeRow items={desktopRow2} direction="right" duration={100} />
          </div>

          {/* Mobile Layout - 4 Rows */}
          <div className="flex md:hidden flex-col gap-3">
            <MarqueeRow items={q1} direction="left" duration={50} />
            <MarqueeRow items={q2} direction="right" duration={50} />
            <MarqueeRow items={q3} direction="left" duration={50} />
            <MarqueeRow items={q4} direction="right" duration={50} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction, duration }: { items: any[], direction: "left" | "right", duration: number }) {
  if (items.length === 0) return null;
  return (
    <motion.div
      className="flex w-max gap-3 sm:gap-4"
      animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items, ...items].map((tech, idx) => (
        <div
          key={`${tech.name}-${idx}`}
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
  );
}
