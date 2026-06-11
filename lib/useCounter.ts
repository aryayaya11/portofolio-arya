"use client";

import { useEffect, useRef, useState } from "react";

interface UseCounterOptions {
  end: number;
  duration?: number;
  decimals?: number;
  start?: number;
}

export function useCounter({
  end,
  duration = 2000,
  decimals = 0,
  start = 0,
}: UseCounterOptions) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const range = end - start;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = start + range * easeOut(progress);

      setCount(parseFloat(currentValue.toFixed(decimals)));

      if (progress === 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration, decimals, start]);

  return { count, ref };
}
