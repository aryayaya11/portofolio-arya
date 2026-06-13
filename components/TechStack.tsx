"use client";

import { motion, useMotionValue, animate, type AnimationPlaybackControls } from "framer-motion";
import { portfolioData, type TechIcon } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";

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
            <MarqueeRow items={desktopRow1} direction="left" speed={30} />
            <MarqueeRow items={desktopRow2} direction="right" speed={30} />
          </div>

          {/* Mobile Layout - 4 Rows */}
          <div className="flex md:hidden flex-col gap-3">
            <MarqueeRow items={q1} direction="left" speed={25} />
            <MarqueeRow items={q2} direction="right" speed={25} />
            <MarqueeRow items={q3} direction="left" speed={25} />
            <MarqueeRow items={q4} direction="right" speed={25} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction, speed = 30 }: { items: TechIcon[], direction: "left" | "right", speed?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const isDragging = useRef(false);
  const startAnimationRef = useRef<(from: number) => void>(() => {});

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return;

    const calculateWidth = () => {
      // Total scrollWidth divided by 3 because we copy items 3 times
      const w = containerRef.current!.scrollWidth / 3;
      setWidth(w);
      
      // Initialize position
      const initialVal = direction === "left" ? 0 : -w;
      x.set(initialVal);
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [items, direction, x]);

  useEffect(() => {
    startAnimationRef.current = (from: number) => {
      if (isDragging.current || width === 0) return;

      const target = direction === "left" ? -width : 0;
      const distance = Math.abs(target - from);
      const duration = distance / speed;

      controlsRef.current = animate(x, target, {
        ease: "linear",
        duration: duration,
        onComplete: () => {
          const resetVal = direction === "left" ? 0 : -width;
          x.set(resetVal);
          startAnimationRef.current(resetVal);
        },
      });
    };
  }, [width, direction, speed, x]);

  // Start initial animation when width is calculated
  useEffect(() => {
    if (width === 0) return;

    startAnimationRef.current(x.get());

    return () => {
      controlsRef.current?.stop();
    };
  }, [width, x]);

  const handleDragStart = () => {
    isDragging.current = true;
    controlsRef.current?.stop();
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    
    // Normalize current x to be within [-width, 0]
    let currentX = x.get();
    if (width > 0) {
      currentX = ((currentX % width) - width) % width;
      x.set(currentX);
    }
    
    // Resume animation from current position
    startAnimationRef.current(currentX);
  };

  if (items.length === 0) return null;

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing w-full">
      <motion.div
        ref={containerRef}
        className="flex w-max gap-3 sm:gap-4 select-none"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -2 * width, right: 0 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {[...items, ...items, ...items].map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="group flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 shrink-0"
          >
            <img
              src={tech.iconUrl}
              alt={tech.name}
              draggable="false"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 pointer-events-none"
            />
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 tracking-wide">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
