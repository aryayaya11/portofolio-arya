"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";

const ABOUT_IMAGES = [
  "/about/about-1.jpg",
  "/about/about-2.jpg",
  "/about/about-3.jpg",
];

// Paragraphs will be dynamically computed inside the component

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function About() {
  const { language } = useLanguage();
  const { personalInfo } = portfolioData[language];
  const PARAGRAPHS = personalInfo.about.split('\n\n');

  const [positions, setPositions] = useState([0, 1, 2]); // [img0Pos, img1Pos, img2Pos]

  const handleNextPhoto = () => {
    setPositions((prev) => prev.map((pos) => (pos - 1 + 3) % 3));
  };

  const handlePrevPhoto = () => {
    setPositions((prev) => prev.map((pos) => (pos + 1) % 3));
  };


  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-8 w-full">
        
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            {language === 'en' ? 'Get to Know Me' : 'Mengenal Saya'}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {language === 'en' ? 'About Me' : 'Tentang Saya'}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Stacked Photo Cards */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-5/12 shrink-0 flex justify-center md:justify-start"
          >
            <div className="relative w-full aspect-[3/4] max-w-[280px] sm:max-w-[320px] group mt-4">
              {ABOUT_IMAGES.map((src, idx) => {
                const pos = positions[idx];
                let positionClasses = "";
                if (pos === 0) positionClasses = "z-30 rotate-[-2deg] group-hover:rotate-0 group-hover:-translate-y-2 opacity-100 shadow-2xl";
                else if (pos === 1) positionClasses = "z-20 rotate-[6deg] translate-y-3 group-hover:rotate-[12deg] group-hover:translate-x-8 opacity-90 group-hover:opacity-100 shadow-xl";
                else if (pos === 2) positionClasses = "z-10 rotate-[-8deg] translate-y-6 group-hover:rotate-[-14deg] group-hover:-translate-x-8 opacity-70 group-hover:opacity-100 shadow-xl";

                return (
                  <div 
                    key={idx} 
                    className={`absolute inset-0 rounded-2xl overflow-hidden border-8 border-white dark:border-zinc-900 transition-all duration-500 ease-out ${positionClasses}`}
                  >
                    <img src={src} alt={`About ${idx + 1}`} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none" />
                  </div>
                );
              })}

              {/* Invisible overlay to capture swipe gestures */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50) {
                    handleNextPhoto();
                  } else if (info.offset.x > 50) {
                    handlePrevPhoto();
                  }
                }}
                className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
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
