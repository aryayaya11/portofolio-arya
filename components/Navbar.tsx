"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";

export default function Navbar() {
  const { language } = useLanguage();
  const { navLinks } = portfolioData[language];
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // Triggers when section is roughly in the middle of screen
    );

    const sectionIds = ["hero", ...navLinks.map((link) => link.href.replace("#", ""))];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] py-4 md:py-6 bg-[#fafafa]/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-zinc-800/50 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between md:justify-center">
          {/* Mobile Logo / Name */}
          <div className="md:hidden font-semibold text-zinc-900 dark:text-white tracking-tight">
            {portfolioData[language].personalInfo.shortName}
          </div>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-white"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -mr-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-[55] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md pt-24 px-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 pb-20" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-2xl font-semibold text-left transition-colors ${
                      isActive 
                        ? "text-zinc-900 dark:text-white" 
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
