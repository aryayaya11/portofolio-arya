"use client";

import { useState, MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

function CertCard({ cert, language, onImageClick }: { cert: any, language: string, onImageClick: (images: string[], index: number) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: ReactMouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === cert.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: ReactMouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? cert.images.length - 1 : prev - 1));
  };

  return (
    <div className="group rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300">
      {/* Cover Image Slider */}
      {cert.images && cert.images.length > 0 && (
        <div 
          className="w-full h-40 sm:h-48 overflow-hidden cursor-zoom-in relative border-b border-zinc-200 dark:border-zinc-800"
          onClick={() => onImageClick(cert.images, currentSlide)}
        >
          {cert.images.map((img: string, idx: number) => (
            <img 
              key={idx}
              src={img} 
              alt={`${cert.title} - Photo ${idx + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
            />
          ))}

          {/* Slider Controls */}
          {cert.images.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center gap-1.5 pointer-events-none">
                {cert.images.map((_: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-3 bg-white' : 'w-1.5 bg-white/50'}`} 
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">{cert.title}</h3>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{cert.issuer}</p>
          </div>
          <span className="text-xs font-semibold text-zinc-500 bg-white dark:bg-zinc-950 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800 shrink-0">{cert.year}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {cert.topics && cert.topics.map((topic: string) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded text-[10px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AwardCard({ award, language, onImageClick }: { award: any, language: string, onImageClick: (images: string[], index: number) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: ReactMouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === award.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: ReactMouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? award.images.length - 1 : prev - 1));
  };

  return (
    <div className="group rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300">
      {/* Cover Image Slider */}
      {award.images && award.images.length > 0 && (
        <div 
          className="w-full h-40 sm:h-48 overflow-hidden cursor-zoom-in relative border-b border-zinc-200 dark:border-zinc-800"
          onClick={() => onImageClick(award.images, currentSlide)}
        >
          {award.images.map((img: string, idx: number) => (
            <img 
              key={idx}
              src={img} 
              alt={`${award.title} - Photo ${idx + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
            />
          ))}

          {/* Slider Controls */}
          {award.images.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center gap-1.5 pointer-events-none">
                {award.images.map((_: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-3 bg-white' : 'w-1.5 bg-white/50'}`} 
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">{award.title}</h3>
            <span className="text-[10px] font-semibold text-zinc-500 bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{award.year}</span>
          </div>
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">{award.achievement}</p>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">{award.type}</p>
        </div>
      </div>
    </div>
  );
}

export default function CertificationsAwards() {
  const { language } = useLanguage();
  const { certifications, awards } = portfolioData[language];
  const [selectedImageContext, setSelectedImageContext] = useState<{images: string[], index: number} | null>(null);

  return (
    <section id="achievements" className="min-h-screen flex flex-col justify-center py-24 md:py-32 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-8 w-full">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            {language === 'en' ? 'Achievements' : 'Pencapaian'}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {language === 'en' ? 'Certifications & Awards' : 'Sertifikasi & Penghargaan'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Certifications */}
          <motion.div {...fadeUp(0.1)}>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">{language === 'en' ? 'Certifications' : 'Sertifikasi'}</p>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <CertCard 
                  key={cert.id} 
                  cert={cert} 
                  language={language} 
                  onImageClick={(images, index) => setSelectedImageContext({ images, index })} 
                />
              ))}

              {/* Placeholder */}
              <div className="rounded-lg border-2 border-dashed border-zinc-200 dark:border-zinc-800 px-6 py-5 flex items-center justify-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <span>{language === 'en' ? 'More certifications in progress' : 'Sertifikasi lainnya sedang dalam proses'}</span>
              </div>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div {...fadeUp(0.2)}>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">{language === 'en' ? 'Awards & Recognition' : 'Penghargaan & Pengakuan'}</p>
            <div className="space-y-6">
              {awards.map((award) => (
                <AwardCard 
                  key={award.id} 
                  award={award} 
                  language={language} 
                  onImageClick={(images, index) => setSelectedImageContext({ images, index })} 
                />
              ))}
            </div>
          </motion.div>
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
                <img
                  key={selectedImageContext.index}
                  src={selectedImageContext.images[selectedImageContext.index]}
                  alt="Expanded view"
                  className="max-w-full max-h-[85vh] object-contain transition-opacity duration-300"
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
