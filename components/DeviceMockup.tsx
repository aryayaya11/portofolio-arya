"use client";

import { motion } from "framer-motion";
import type { TechIcon } from "@/data/portfolio";

export function LaptopMockup({ imageUrl, title }: { imageUrl: string; title?: string }) {
  return (
    <motion.div
      className="relative select-none"
      whileHover={{ y: -6, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl pointer-events-none" />

      {/* Laptop body */}
      <div className="relative">
        {/* Screen bezel */}
        <div className="relative bg-gray-900 rounded-t-xl border border-gray-700/60 shadow-2xl overflow-hidden"
          style={{ width: 320, paddingTop: "62.5%" }}
        >
          {/* Screen chrome top */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center justify-center border-b border-gray-700/50 z-10">
            <div className="w-2 h-2 rounded-full bg-gray-600" />
          </div>
          {/* Screen content */}
          <div className="absolute inset-0 top-6 bottom-0 overflow-hidden bg-gray-950">
            <img
              src={imageUrl}
              alt={title ?? "Project mockup"}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
            {/* Glare overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Hinge */}
        <div className="h-2 bg-gradient-to-b from-gray-700 to-gray-800 border-x border-gray-700/60" />

        {/* Base */}
        <div
          className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-xl border border-gray-700/60 border-t-0 flex items-end justify-center pb-2"
          style={{ height: 20 }}
        >
          {/* Trackpad */}
          <div className="w-16 h-3 rounded bg-gray-700/60 border border-gray-600/30" />
        </div>

        {/* Base shadow */}
        <div className="absolute -bottom-3 left-4 right-4 h-3 bg-black/30 blur-md rounded-full" />
      </div>
    </motion.div>
  );
}

export function MobileMockup({ imageUrl, title }: { imageUrl: string; title?: string }) {
  return (
    <motion.div
      className="relative select-none"
      whileHover={{ y: -6, rotateY: -3 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-violet-500/10 blur-2xl pointer-events-none" />

      {/* Phone body */}
      <div
        className="relative bg-gray-900 rounded-[2rem] border-2 border-gray-700/60 shadow-2xl overflow-hidden"
        style={{ width: 130, height: 260 }}
      >
        {/* Notch / dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-gray-900 rounded-full z-20 border border-gray-700/50" />

        {/* Speaker */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-700 rounded-full z-30" />

        {/* Screen */}
        <div className="absolute inset-0 overflow-hidden bg-gray-950">
          <img
            src={imageUrl}
            alt={title ?? "Mobile mockup"}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
          {/* Glare */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Side buttons */}
        <div className="absolute right-[-3px] top-16 w-1 h-8 bg-gray-700 rounded-l" />
        <div className="absolute left-[-3px] top-14 w-1 h-6 bg-gray-700 rounded-r" />
        <div className="absolute left-[-3px] top-22 w-1 h-6 bg-gray-700 rounded-r" />

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full z-20" />
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-3 left-2 right-2 h-4 bg-black/30 blur-md rounded-full" />
    </motion.div>
  );
}

export function TechIconGrid({ icons }: { icons: TechIcon[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {icons.map((tool, i) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 cursor-default"
        >
          <img
            src={tool.iconUrl}
            alt={tool.name}
            className="w-5 h-5 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
            {tool.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
