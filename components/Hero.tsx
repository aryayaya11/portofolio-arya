"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight, ChevronDown, Download, Mail } from "lucide-react";
import { useState, useEffect, MouseEvent as ReactMouseEvent } from "react";

const containerVariants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  viewport: { once: true },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  },
};

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timer = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timer);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-[10px]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
    </span>
  );
}

export default function Hero() {
  const handleScroll = (e: ReactMouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section 
      id="hero" 
      className="relative flex flex-col justify-center min-h-screen pt-20 pb-32 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-2xl relative flex flex-col items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 relative inline-block group"
          >
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name} 
              className="w-28 h-28 rounded-full object-cover border border-zinc-200 dark:border-zinc-800 relative z-10 transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4 uppercase transition-colors duration-300"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Subtitle / Intro with Typewriter */}
          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-6 font-medium tracking-wide h-8"
          >
            I am a <Typewriter words={[personalInfo.major, "Business Intelligence Analyst", "Data Storyteller"]} />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-xl mx-auto transition-colors duration-300"
          >
            Managing Rp170M+ in operational funds and coordinating large-scale programs, while developing data-driven business solutions in {personalInfo.location}.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 relative z-20 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-sm font-bold hover:scale-105 transition-transform duration-300 w-full sm:w-auto whitespace-nowrap"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-300 w-full sm:w-auto whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#about" onClick={handleScroll} className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
