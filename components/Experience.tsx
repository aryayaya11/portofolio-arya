"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

function ExperienceGallery({ images, onImageClick }: { images: string[], onImageClick: (images: string[], index: number) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [images]);

  const scroll = (direction: 'left' | 'right', e: ReactMouseEvent) => {
    e.stopPropagation();
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    setTimeout(checkScroll, 400);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative mt-6 group/gallery">
      {/* Left Arrow */}
      {showLeft && (
        <button 
          onClick={(e) => scroll('left', e)} 
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {images.map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => onImageClick(images, idx)}
            className="snap-start shrink-0 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800/80 cursor-zoom-in"
          >
            <img 
              src={img} 
              alt={`Experience highlight ${idx + 1}`} 
              className="w-64 h-40 sm:w-72 sm:h-44 object-cover hover:opacity-90 hover:scale-105 transition-all duration-300" 
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showRight && (
        <button 
          onClick={(e) => scroll('right', e)} 
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default function Experience() {
  const { language } = useLanguage();
  const { experiences } = portfolioData[language];
  const [selectedImageContext, setSelectedImageContext] = useState<{images: string[], index: number} | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 md:px-8 w-full">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            {language === 'en' ? 'Career Path' : 'Perjalanan Karir'}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {language === 'en' ? 'Experience' : 'Pengalaman'}
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative space-y-16 pl-8 md:pl-12">
          {/* Base Timeline Line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
          
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-0 top-2 w-px bg-zinc-900 dark:bg-white origin-top"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[53px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-zinc-50 dark:ring-zinc-900 group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:scale-125 transition-all duration-300" />
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
                    <span className="font-semibold mr-1">{language === 'en' ? 'Impact:' : 'Dampak:'}</span> 
                    {exp.impact}
                  </p>
                )}
              </div>

              {/* Minimalist Gallery */}
              <ExperienceGallery images={exp.images} onImageClick={(images, index) => setSelectedImageContext({images, index})} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageContext && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageContext(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          >
            <div className="relative w-full max-w-6xl mx-auto rounded-lg overflow-hidden bg-black/50 shadow-2xl flex items-center justify-center min-h-[50vh]" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  key={selectedImageContext.index}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  src={selectedImageContext.images[selectedImageContext.index]}
                  alt="Expanded view"
                  className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl cursor-default transition-opacity duration-300"
                />
            </div>
            
            {selectedImageContext.images.length > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageContext(prev => prev ? { ...prev, index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1 } : null);
                  }}
                  className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/40 text-white/70 hover:bg-black/70 hover:text-white transition-all backdrop-blur-md z-50 border border-white/10"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageContext(prev => prev ? { ...prev, index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1 } : null);
                  }}
                  className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/40 text-white/70 hover:bg-black/70 hover:text-white transition-all backdrop-blur-md z-50 border border-white/10"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                
                <div className="absolute top-6 right-20 sm:right-24 text-white/90 font-medium bg-black/40 px-4 py-1.5 rounded-full text-sm backdrop-blur-md tracking-widest tabular-nums border border-white/10 shadow-lg">
                  {selectedImageContext.index + 1} / {selectedImageContext.images.length}
                </div>
              </>
            )}

            {/* Close Button */}
            <button 
              onClick={() => setSelectedImageContext(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/70 hover:text-white transition-all backdrop-blur-md border border-white/10 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
