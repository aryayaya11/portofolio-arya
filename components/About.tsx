"use client";

import { motion } from "framer-motion";

const ABOUT_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
];

const PARAGRAPHS = [
  "Hi, I'm Arya. I'm a Data Scientist and Financial Manager passionate about bridging the gap between analytical rigor and organizational strategy. I believe that data isn't just about numbers; it's about telling a compelling story that drives real impact.",
  "During my undergraduate studies, I've had the privilege of managing over Rp170M in operational funds and coordinating large-scale initiatives. My background in Data Science equips me with the technical foundation to build predictive models, optimize resource allocation, and extract actionable insights from complex datasets.",
  "Beyond the code and spreadsheets, I thrive in leadership roles where I can foster collaboration and mentor cross-functional teams. Whether it's developing an interactive economic dashboard or streamlining financial reporting, my goal is always to deliver scalable, data-driven solutions that matter."
];

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Single Clean Image */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-5/12 shrink-0"
          >
            <div className="aspect-[4/5] w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800">
              <img 
                src={ABOUT_IMAGES[0]} 
                alt="Arya Putra Permana" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </motion.div>

          {/* RIGHT: Clean Text */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-7/12 flex flex-col gap-6"
          >
            {PARAGRAPHS.map((text, i) => (
              <p key={i} className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {text}
              </p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
