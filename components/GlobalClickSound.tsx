"use client";

import { useEffect } from "react";

export default function GlobalClickSound() {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    let audioCtx: AudioContext | null = null;

    const playClickSound = () => {
      try {
        if (!audioCtx) {
          const AudioContextClass =
            window.AudioContext ||
            (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
          if (!AudioContextClass) return;
          audioCtx = new AudioContextClass();
        }

        // Resume if suspended (browser autoplay policy)
        if (audioCtx.state === "suspended") {
          audioCtx.resume();
        }

        const t = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        // Minimalist UI "tick" (like a glass or water drop tick)
        osc.type = "sine"; 
        osc.frequency.setValueAtTime(1800, t); // High, clean pitch
        osc.frequency.exponentialRampToValueAtTime(800, t + 0.01); // Ultra-fast drop

        // Clean, quiet volume
        gain.gain.setValueAtTime(0.1, t); 
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.01);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(t);
        osc.stop(t + 0.01);
      } catch {
        // Silently fail if audio is not supported or blocked
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if clicked element is clickable (a, button, or has cursor-pointer class)
      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".cursor-pointer") ||
        target.closest("[role='button']") ||
        target.closest("[role='tab']");

      if (isClickable) {
        playClickSound();
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
