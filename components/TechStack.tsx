"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function TechStack() {
  // Extract unique tech icons from all projects
  const allTechIcons = projects.flatMap(p => p.techIcons || []);
  const uniqueTechIcons = Array.from(new Map(allTechIcons.map(item => [item.name, item])).values());

  return (
    <section id="tech-stack" className="py-24 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">Tech Stack</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Technologies and tools I use to build data solutions</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {uniqueTechIcons.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300"
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
    </section>
  );
}
