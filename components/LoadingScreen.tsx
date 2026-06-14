"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock body scrolling during load
    document.body.style.overflow = "hidden";

    // Progress tick configuration (total ~1200ms)
    const duration = 1200;
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          // Pause slightly at 100% for smooth premium feel
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = "";
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-zinc-950 text-white"
        >
          {/* Grain overlay to match digital garden aesthetic */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />

          {/* Centered content wrapper */}
          <div className="relative flex flex-col items-center w-full max-w-xs px-6">
            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                ARYA PUTRA
              </h1>
              <p className="text-[10px] tracking-[0.25em] text-zinc-400 mt-2.5 uppercase font-medium">
                Data Science & Analytics
              </p>
            </motion.div>

            {/* Premium Progress Bar */}
            <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage counter */}
            <div className="text-right w-full text-zinc-400 font-mono text-xs tracking-widest">
              {Math.floor(progress)}%
            </div>
          </div>

          {/* Footer location info */}
          <div className="absolute bottom-10 text-[10px] text-zinc-500 font-mono tracking-widest">
            SURABAYA, INDONESIA
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
