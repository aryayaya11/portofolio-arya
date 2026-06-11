"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { TechIconGrid } from "@/components/DeviceMockup";
import { ArrowLeft, ExternalLink, ChevronRight, GitBranch, Monitor, Tablet, Smartphone, ChevronLeft } from "lucide-react";

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

type DeviceTab = "desktop" | "tablet" | "mobile";

const DEVICE_TABS: { key: DeviceTab; label: string; Icon: React.ElementType }[] = [
  { key: "desktop", label: "Desktop", Icon: Monitor },
  { key: "tablet", label: "Tablet", Icon: Tablet },
  { key: "mobile", label: "Mobile", Icon: Smartphone },
];

function DeviceShowcase({ project }: { project: Project }) {
  const shots = project.deviceScreenshots;

  // Only show tabs that have screenshots
  const availableTabs = DEVICE_TABS.filter(
    ({ key }) => shots && shots[key].length > 0
  );

  const [activeTab, setActiveTab] = useState<DeviceTab>(
    availableTabs[0]?.key ?? "desktop"
  );
  const [imgIndex, setImgIndex] = useState(0);

  const images = shots ? shots[activeTab] : [];

  const handleTabChange = (tab: DeviceTab) => {
    setActiveTab(tab);
    setImgIndex(0);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && imgIndex < images.length - 1) {
      setImgIndex(imgIndex + 1);
    } else if (info.offset.x > swipeThreshold && imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  // Fallback to text if no deviceScreenshots
  if (!shots) {
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
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setImgIndex(Math.max(0, imgIndex - 1))}
            disabled={imgIndex === 0}
            className="p-1 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white disabled:opacity-20 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 tabular-nums w-12 text-center">
            {imgIndex + 1} / {images.length}
          </span>
          <button
            onClick={() => setImgIndex(Math.min(images.length - 1, imgIndex + 1))}
            disabled={imgIndex === images.length - 1}
            className="p-1 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white disabled:opacity-20 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Screenshot display */}
      <div className="relative px-6 py-8 flex items-center justify-center min-h-[400px] group/showcase overflow-hidden">
        {/* Overlay Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setImgIndex(Math.max(0, imgIndex - 1))}
              disabled={imgIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 shadow-md opacity-0 group-hover/showcase:opacity-100 disabled:!opacity-0 transition-all duration-300 z-30 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => setImgIndex(Math.min(images.length - 1, imgIndex + 1))}
              disabled={imgIndex === images.length - 1}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 shadow-md opacity-0 group-hover/showcase:opacity-100 disabled:!opacity-0 transition-all duration-300 z-30 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className={`relative cursor-grab active:cursor-grabbing ${
              activeTab === "mobile"
                ? "max-w-[280px]"
                : activeTab === "tablet"
                ? "max-w-[640px] w-full"
                : "w-full"
            }`}
          >
            {/* Device frame */}
            <div
              className={`relative overflow-hidden shadow-xl ${
                activeTab === "mobile"
                  ? "rounded-[2.5rem] border-[6px] border-zinc-800"
                  : activeTab === "tablet"
                  ? "rounded-[1.5rem] border-4 border-zinc-800"
                  : "rounded-xl border border-zinc-300"
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
                className="w-full h-auto object-cover object-top block bg-white"
                style={{ maxHeight: activeTab === "mobile" ? "560px" : "none" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
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
    </motion.div>
  );
}

function CodeShowcase({ snippet }: { snippet: { title: string; language: string; code: string } }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      animate="animate"
      className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm mb-6"
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
    </motion.div>
  );
}

interface Props {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export default function ProjectDetailClient({ project, prev, next }: Props) {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-300">
      {/* Top Nav */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
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
            Project Breakdown
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard step="01" label="Problem" type="problem" delay={0.18}>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{parseMarkdown(project.problem)}</p>
            </StepCard>

            <StepCard step="02" label="Action" type="action" delay={0.26}>
              <ul className="space-y-3">
                {project.action.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                    <span>{parseMarkdown(a)}</span>
                  </li>
                ))}
              </ul>
            </StepCard>

            <StepCard step="03" label="Result" type="result" delay={0.34}>
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

        {/* ── Featured Code ── */}
        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <section className="space-y-6">
            <motion.h2
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.12, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
            >
              Featured Code
            </motion.h2>
            <div className="flex flex-col gap-6">
              {project.codeSnippets.map((snippet, i) => (
                <CodeShowcase key={i} snippet={snippet} />
              ))}
            </div>
          </section>
        )}

        {/* ── Responsive Device Showcase ── */}
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
                Responsive Preview
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                Switch between device views to explore the responsive design
              </p>
            </div>
          </motion.div>

          <DeviceShowcase project={project} />
        </section>

        {/* ── Key Outcomes ── */}
        <section className="space-y-6">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
          >
            Key Outcomes
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

        {/* ── Links ── */}
        <section>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.18, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {project.github && (
              <a
                id={`project-github-${project.id}`}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 group"
              >
                <GitBranch className="w-4 h-4" />
                View on GitHub
                <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
            {project.demo && (
              <a
                id={`project-demo-${project.id}`}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 group shadow-sm"
              >
                Live Demo
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </motion.div>
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
