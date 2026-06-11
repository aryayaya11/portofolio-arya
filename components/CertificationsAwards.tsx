"use client";

import { motion } from "framer-motion";
import { certifications, awards } from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function CertificationsAwards() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Certifications &amp; Awards
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Certifications */}
          <motion.div {...fadeUp(0.1)}>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Certifications</p>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">{cert.title}</h3>
                      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-semibold text-zinc-500 bg-white dark:bg-zinc-950 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800">{cert.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded text-[10px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Placeholder */}
              <div className="rounded-lg border-2 border-dashed border-zinc-200 dark:border-zinc-800 px-6 py-5 flex items-center justify-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <span>More certifications in progress</span>
              </div>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div {...fadeUp(0.2)}>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Awards &amp; Recognition</p>
            <div className="space-y-6">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="flex items-center gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300"
                >
                  <span className="text-3xl flex-shrink-0 bg-white dark:bg-zinc-950 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800">{award.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">{award.title}</h3>
                      <span className="text-[10px] font-semibold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{award.year}</span>
                    </div>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">{award.achievement}</p>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">{award.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
