"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FILTERS = ["All", "Geospatial Analytics", "Insurance Analytics", "Financial Analytics", "Business Intelligence", "Business Analytics", "Predictive Analytics", "Natural Language Processing"];
const FILTER_LABELS: Record<string, string> = {
  "All": "All",
  "Geospatial Analytics": "Geospatial",
  "Insurance Analytics": "Insurance",
  "Financial Analytics": "Finance",
  "Business Intelligence": "BI",
  "Business Analytics": "Analytics",
  "Predictive Analytics": "ML",
  "Natural Language Processing": "NLP",
};

const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Projects
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                id={`filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
                role="tab"
                aria-selected={activeFilter === f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-300 ${
                  activeFilter === f
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                    : "bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {FILTER_LABELS[f]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                variants={cardVariants}
                layout
                className="group flex flex-col rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300"
              >

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white/90 dark:bg-black/90 text-zinc-900 dark:text-zinc-100 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>

                  {/* Featured badge */}
                  {p.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-zinc-900/90 dark:bg-white/90 text-white dark:text-zinc-900 backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">{p.year}</span>
                    <Link
                      href={`/projects/${p.id}`}
                      id={`project-card-${p.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-200 transition-colors group/link hover:text-zinc-500 dark:hover:text-zinc-400"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-zinc-600 dark:text-zinc-400"
          >
            No projects in this category yet.
          </motion.div>
        )}
      </div>
    </section>
  );
}
