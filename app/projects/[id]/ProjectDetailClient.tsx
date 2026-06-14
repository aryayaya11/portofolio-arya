"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";
import { TechIconGrid } from "@/components/DeviceMockup";
import { ArrowLeft, ExternalLink, ChevronRight, GitBranch, Monitor, Tablet, Smartphone, ChevronLeft, Presentation, Code } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function parseMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-extrabold text-zinc-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function StepCard({
  step,
  label,
  children,
  delay,
  type = "default",
}: {
  step: string;
  label: string;
  children: React.ReactNode;
  delay: number;
  type?: "problem" | "action" | "result" | "default";
}) {
  const styles = {
    problem: "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800",
    action: "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800",
    result: "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800",
    default: "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800",
  }[type];

  const badgeStyles = {
    problem: "bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800",
    action: "bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800",
    result: "bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800",
    default: "bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800",
  }[type];

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      animate="animate"
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col gap-4 rounded-xl border p-6 transition-colors duration-300 ${styles}`}
    >
      <div className="flex items-center gap-3">
        <span className={`text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md ${badgeStyles}`}>
          {step}
        </span>
        <span className="text-sm font-extrabold text-zinc-900 dark:text-white tracking-tight">{label}</span>
      </div>
      {children}
    </motion.div>
  );
}

type DeviceTab = "desktop" | "tablet" | "mobile" | "presentation" | "code";

function DeviceShowcase({ project }: { project: Project }) {
  const { language } = useLanguage();
  const shots = project.deviceScreenshots;
  const slides = project.images.filter(img => 
    img.includes("/ppt/") || 
    img.includes("/slide") || 
    img.includes("/presentation/")
  );

  // Dynamically compile available tabs based on data presence
  const availableTabs: { key: DeviceTab; label: string; Icon: React.ElementType }[] = [];
  
  if (shots) {
    if (shots.desktop.length > 0) availableTabs.push({ key: "desktop", label: "Desktop", Icon: Monitor });
    if (shots.tablet.length > 0) availableTabs.push({ key: "tablet", label: "Tablet", Icon: Tablet });
    if (shots.mobile.length > 0) availableTabs.push({ key: "mobile", label: "Mobile", Icon: Smartphone });
  }

  if (slides.length > 0) {
    availableTabs.push({ 
      key: "presentation", 
      label: language === 'en' ? "Presentation" : "Presentasi", 
      Icon: Presentation 
    });
  }

  if (project.codeSnippets && project.codeSnippets.length > 0) {
    availableTabs.push({
      key: "code",
      label: language === 'en' ? "Code" : "Kode",
      Icon: Code
    });
  }

  const [activeTab, setActiveTab] = useState<DeviceTab>(
    availableTabs[0]?.key ?? "desktop"
  );
  const [imgIndex, setImgIndex] = useState(0);

  const images = activeTab === "presentation"
    ? slides
    : (activeTab === "code"
      ? []
      : (shots ? shots[activeTab as Exclude<DeviceTab, "presentation" | "code">] : []));

  const handleTabChange = (tab: DeviceTab) => {
    setActiveTab(tab);
    setImgIndex(0);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;
    if (images.length <= 1) return;
    
    if (info.offset.x < -swipeThreshold) {
      setImgIndex((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > swipeThreshold) {
      setImgIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  if (availableTabs.length === 0) {
    return (
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-10 py-12 px-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="text-zinc-500 dark:text-zinc-400 text-sm">No preview available.</div>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      animate="animate"
      transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden"
    >
      {/* Device tab bar */}
      <div className="flex items-center gap-1 px-6 pt-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        {availableTabs.map(({ key, label, Icon }) => (
          <button
            key={key}
            id={`device-tab-${key}`}
            onClick={() => handleTabChange(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
              activeTab === key
                ? "text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 border border-transparent"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}

        {/* Image counter */}
        {activeTab !== "code" && images.length > 1 && (
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setImgIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="p-1 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 tabular-nums w-12 text-center">
              {imgIndex + 1} / {images.length}
            </span>
            <button
              onClick={() => setImgIndex((prev) => (prev + 1) % images.length)}
              className="p-1 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Screenshot / Code display */}
      <div className="relative px-6 py-8 flex items-center justify-center min-h-[400px] group/showcase overflow-hidden">
        {/* Overlay Navigation Buttons */}
        {activeTab !== "code" && images.length > 1 && (
          <>
            <button
              onClick={() => setImgIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 shadow-md opacity-0 group-hover/showcase:opacity-100 transition-all duration-300 z-30 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => setImgIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 shadow-md opacity-0 group-hover/showcase:opacity-100 transition-all duration-300 z-30 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${imgIndex}`}
            initial={{ opacity: 0, scale: 0.97, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.97, x: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            drag={activeTab === "code" ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={activeTab === "code" ? undefined : handleDragEnd}
            className={`relative w-full ${
              activeTab === "code" ? "" : "cursor-grab active:cursor-grabbing"
            } ${
              activeTab === "mobile"
                ? "max-w-[280px]"
                : activeTab === "tablet"
                ? "max-w-[640px] w-full"
                : "w-full"
            }`}
          >
            {activeTab === "code" ? (
              <div className="w-full text-left">
                {project.codeSnippets && project.codeSnippets.map((snippet, i) => (
                  <CodeShowcase key={i} snippet={snippet} />
                ))}
              </div>
            ) : (
              /* Device frame */
              <div
                className={`relative overflow-hidden shadow-xl ${
                  activeTab === "mobile"
                    ? "rounded-[2.5rem] border-[6px] border-zinc-800"
                    : activeTab === "tablet"
                    ? "rounded-[1.5rem] border-4 border-zinc-800"
                    : "rounded-xl border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {/* Top notch for mobile */}
                {activeTab === "mobile" && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-900 rounded-full z-20 flex items-center justify-center">
                    <div className="w-8 h-1.5 bg-zinc-700 rounded-full" />
                  </div>
                )}
                {activeTab === "tablet" && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-700 rounded-full z-20" />
                )}
                <img
                  src={images[imgIndex]}
                  alt={`${project.title} — ${activeTab} view ${imgIndex + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover object-top block bg-white"
                  style={{ maxHeight: activeTab === "mobile" ? "560px" : "none" }}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      {activeTab !== "code" && images.length > 1 && (
        <div className="flex justify-center gap-1.5 pb-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setImgIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === imgIndex ? "bg-zinc-900 scale-125" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

function CodeShowcase({ snippet }: { snippet: { title: string; language: string; code: string } }) {
  return (
    <div
      className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm mb-6 w-full"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 tracking-wide">
            {snippet.title}
          </span>
        </div>
        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
          {snippet.language}
        </span>
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto bg-[#fafafa] dark:bg-[#0a0a0a]">
        <pre className="text-sm font-mono text-zinc-800 dark:text-zinc-300 leading-relaxed whitespace-pre">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}

interface Props {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export default function ProjectDetailClient({ project: initialProject, prev: initialPrev, next: initialNext }: Props) {
  const { language } = useLanguage();
  const { projects } = portfolioData[language];

  // Derive localized projects
  const project = projects.find((p) => p.id === initialProject.id) || initialProject;
  const prev = initialPrev ? projects.find((p) => p.id === initialPrev.id) || initialPrev : null;
  const next = initialNext ? projects.find((p) => p.id === initialNext.id) || initialNext : null;

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-300">
      {/* Top Nav */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'en' ? 'Back to Projects' : 'Kembali ke Proyek'}
          </Link>
          
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all"
                aria-label="View Source on GitHub"
              >
                <GitBranch className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-black dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
                aria-label="View Live Project"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* ── Hero ── */}
        <section>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
                {project.category}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{project.year}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-zinc-900 dark:text-white">
              {project.title}
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* ── Tech Stack ── */}
        <section>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Tools & Stack
            </h2>
            <TechIconGrid icons={project.techIcons} />
          </motion.div>
        </section>

        {/* ── Problem / Action / Result ── */}
        <section className="space-y-6">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.12, duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
          >
            {language === 'en' ? 'Project Breakdown' : 'Rincian Proyek'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard step="01" label={language === 'en' ? 'Problem' : 'Masalah'} type="problem" delay={0.18}>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{parseMarkdown(project.problem)}</p>
            </StepCard>

            <StepCard step="02" label={language === 'en' ? 'Action' : 'Tindakan'} type="action" delay={0.26}>
              <ul className="space-y-3">
                {project.action.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                    <span>{parseMarkdown(a)}</span>
                  </li>
                ))}
              </ul>
            </StepCard>

            <StepCard step="03" label={language === 'en' ? 'Result' : 'Hasil'} type="result" delay={0.34}>
              <ul className="space-y-3">
                {project.result.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-emerald-600 font-bold text-xs">✓</span>
                    <span>{parseMarkdown(r)}</span>
                  </li>
                ))}
              </ul>
            </StepCard>
          </div>
        </section>


        {/* ── Project Showcase (Screenshots, Slides, & Code) ── */}
        {((project.deviceScreenshots && (project.deviceScreenshots.desktop.length > 0 || project.deviceScreenshots.tablet.length > 0 || project.deviceScreenshots.mobile.length > 0)) || 
          project.images.some(img => img.includes("/ppt/") || img.includes("/slide") || img.includes("/presentation/")) ||
          (project.codeSnippets && project.codeSnippets.length > 0)) && (
        <section className="space-y-6">
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.12, duration: 0.6 }}
            className="flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                {language === 'en' ? 'Project Showcase' : 'Pratinjau Proyek'}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                {language === 'en' 
                  ? 'Explore screenshots, presentation slides, and key code implementations' 
                  : 'Jelajahi pratinjau aplikasi, slide presentasi, dan implementasi kode penting untuk proyek ini'}
              </p>
            </div>
          </motion.div>

          <DeviceShowcase project={project} />
        </section>
        )}

        {/* ── Key Outcomes ── */}
        <section className="space-y-6">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
          >
            {language === 'en' ? 'Key Outcomes' : 'Hasil Utama'}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.result.slice(0, 6).map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.14 + i * 0.07, duration: 0.6 }}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300"
              >
                <div className="text-3xl font-black tabular-nums mb-4 text-zinc-900 dark:text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{parseMarkdown(r)}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Project Launch / Live Preview CTA ── */}
        <section className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white leading-tight">
              {language === 'en' ? 'Interested in this project?' : 'Tertarik dengan proyek ini?'}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {project.isConfidential
                ? (language === 'en'
                    ? 'Due to corporate security guidelines and intellectual property restrictions, the source code and live demo for this project are confidential.'
                    : 'Karena kebijakan keamanan korporat dan pembatasan kekayaan intelektual, kode sumber dan demo langsung untuk proyek ini bersifat rahasia (confidential).')
                : (!project.github && !project.demo && !project.liveUrl)
                ? (language === 'en'
                    ? 'This project is currently being prepared and polished. Once finalized, the source code and interactive demo will be available here.'
                    : 'Proyek ini sedang dirapikan dan disiapkan. Setelah selesai, kode sumber dan demo interaktif akan tersedia di sini.')
                : (language === 'en'
                    ? 'Explore the source code or launch the interactive live demo.'
                    : 'Jelajahi kode sumber atau jalankan demo langsung interaktif.')}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 w-full md:w-auto justify-center">
            {project.isConfidential ? (
              <div
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 text-sm font-bold w-full sm:w-auto whitespace-nowrap cursor-not-allowed select-none opacity-60"
                title={language === 'en' ? 'Source code is private' : 'Kode sumber bersifat privat'}
              >
                <GitHubIcon className="w-4 h-4 opacity-50" />
                {language === 'en' ? 'Private Repository' : 'Repositori Privat'}
              </div>
            ) : project.github ? (
              <a
                id={`project-github-${project.id}`}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all w-full sm:w-auto whitespace-nowrap"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub Repository
              </a>
            ) : (
              <a
                id={`project-github-placeholder-${project.id}`}
                href="https://github.com/aryayaya11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-bold text-zinc-400 dark:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all w-full sm:w-auto whitespace-nowrap opacity-80"
              >
                <GitHubIcon className="w-4 h-4 opacity-50" />
                {language === 'en' ? 'GitHub (Coming Soon)' : 'GitHub (Segera Hadir)'}
              </a>
            )}
            {project.isConfidential ? (
              <div
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 text-sm font-bold w-full sm:w-auto whitespace-nowrap cursor-not-allowed select-none opacity-60"
                title={language === 'en' ? 'Live demo is restricted' : 'Demo langsung dibatasi'}
              >
                <ExternalLink className="w-4 h-4 opacity-50" />
                {language === 'en' ? 'Confidential Demo' : 'Demo Rahasia'}
              </div>
            ) : (project.demo || project.liveUrl) ? (
              <a
                id={`project-demo-${project.id}`}
                href={project.demo || project.liveUrl || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-zinc-900 text-sm font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all w-full sm:w-auto shadow-sm whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4" />
                {language === 'en' ? 'Launch Live Demo' : 'Buka Demo Langsung'}
              </a>
            ) : (
              <div
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 text-sm font-bold w-full sm:w-auto whitespace-nowrap cursor-not-allowed select-none opacity-60"
                title={language === 'en' ? 'Live Demo is not yet available for this project' : 'Demo langsung belum tersedia untuk proyek ini'}
              >
                <ExternalLink className="w-4 h-4 opacity-50" />
                {language === 'en' ? 'Live Demo (Coming Soon)' : 'Demo Langsung (Segera Hadir)'}
              </div>
            )}
          </div>
        </section>

        {/* ── Prev / Next ── */}
        <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex justify-between gap-4">
            {prev ? (
              <Link
                href={`/projects/${prev.id}`}
                id={`nav-prev-${prev.id}`}
                className="group flex flex-col gap-1 max-w-[45%] hover:opacity-80 transition-opacity"
              >
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">← Previous</span>
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors line-clamp-1">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/projects/${next.id}`}
                id={`nav-next-${next.id}`}
                className="group flex flex-col gap-1 items-end max-w-[45%] hover:opacity-80 transition-opacity"
              >
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Next →</span>
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors line-clamp-1 text-right">
                  {next.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </section>
      </div>
    </main>
  );
}
