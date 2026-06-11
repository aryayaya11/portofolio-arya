"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-zinc-600 dark:text-zinc-400 font-medium">
                    {exp.organization}
                  </div>
                </div>
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-500 whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              {/* Minimalist Details */}
              <div className="prose prose-zinc dark:prose-invert max-w-none text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <ul className="list-disc pl-4 space-y-1 mb-4 marker:text-zinc-400 dark:marker:text-zinc-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="pl-1">
                      {resp}
                    </li>
                  ))}
                </ul>
                
                {exp.impact && (
                  <p className="mt-2 text-zinc-900 dark:text-zinc-200">
                    <span className="font-semibold mr-1">Impact:</span> 
                    {exp.impact}
                  </p>
                )}
              </div>

              {/* Minimalist Gallery */}
              {exp.images && exp.images.length > 0 && (
                <div className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
                     style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                  {exp.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedImage(img)}
                      className="snap-start shrink-0 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800/80 cursor-pointer"
                    >
                      <img 
                        src={img} 
                        alt={`${exp.organization} highlight ${idx + 1}`} 
                        className="w-64 h-40 sm:w-72 sm:h-44 object-cover hover:opacity-90 hover:scale-105 transition-all duration-300" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full rounded-xl object-contain shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} 
            />
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
