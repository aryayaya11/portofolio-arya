"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Technical Expertise
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
                <span className="text-xl leading-none">{data.icon}</span>
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
