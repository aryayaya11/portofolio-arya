"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
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
      const timer = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);
      return () => clearTimeout(timer);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-[10px]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse text-zinc-900 dark:text-white">|</span>
    </span>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const { personalInfo } = portfolioData[language];

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
      className="relative flex items-center min-h-screen pt-24 pb-0 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        {/* LEFT: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="whileInView"
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4 uppercase transition-colors duration-300"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Subtitle / Intro with Typewriter */}
          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-6 font-medium tracking-wide h-8"
          >
            {language === 'en' ? 'I am a ' : 'Saya seorang '}
            <Typewriter words={
              language === 'en' 
                ? [personalInfo.major, "Business Intelligence Analyst", "Data Storyteller"]
                : [personalInfo.major, "Analis Business Intelligence", "Pencerita Data"]
            } />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 transition-colors duration-300"
          >
            {language === 'en'
              ? `Combining strategic financial leadership with advanced analytics to engineer robust, data-driven solutions in ${personalInfo.location}.`
              : `Menggabungkan kepemimpinan finansial strategis dengan analitik canggih untuk merekayasa solusi berbasis data yang kuat di ${personalInfo.location}.`
            }
          </motion.p>

          {/* Dual CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-20">
            <a
              href="#projects"
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-sm font-bold hover:scale-105 transition-transform duration-300 w-full sm:w-auto whitespace-nowrap"
            >
              {language === 'en' ? 'View My Work' : 'Lihat Portofolio'}
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-300 w-full sm:w-auto whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              {language === 'en' ? 'Download Resume' : 'Unduh CV'}
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-sm sm:max-w-md"
          >
            <div className="relative w-full">
              <div className="aspect-square w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 shadow-2xl relative z-10 group">
                <img 
                  src="/about/about-4.jpg" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-zinc-500/10 dark:bg-zinc-400/10 blur-3xl rounded-full -z-10 transform scale-110 translate-y-10 transition-opacity duration-500 group-hover:opacity-50"></div>
            </div>
          </motion.div>
        </div>
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
