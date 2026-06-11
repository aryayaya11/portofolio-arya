"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const handleNavClick = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-6 bg-[#fafafa]/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-6 w-full flex items-center justify-center md:justify-start gap-6">
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
