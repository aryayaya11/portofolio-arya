"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail, FiFileText } from "react-icons/fi";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function Contact() {
  const { language } = useLanguage();
  const { personalInfo } = portfolioData[language];
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 md:py-32 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-8 w-full text-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <hr className="border-zinc-200 dark:border-zinc-800 mb-16 transition-colors duration-300" />
          
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
              {language === 'en' ? 'Contact' : 'Kontak'}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
              {language === 'en' ? 'Get In Touch' : 'Hubungi Saya'}
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-6 sm:gap-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <span className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                <FiMail className="w-5 h-5" />
              </span>
              Email
            </a>
            
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <span className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </span>
                LinkedIn
              </a>
            )}

            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <span className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <FaGithub className="w-5 h-5" />
                </span>
                GitHub
              </a>
            )}

            {personalInfo.instagram && (
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <span className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </span>
                Instagram
              </a>
            )}

            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <span className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <FiFileText className="w-5 h-5" />
                </span>
                {language === 'en' ? 'Resume' : 'Unduh CV'}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
