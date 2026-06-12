"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageContext";
import { useCounter } from "@/lib/useCounter";

interface KpiProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  index: number;
}

function Kpi({ label, value, suffix = "", prefix = "", decimals = 0, index }: KpiProps) {
  const { count, ref } = useCounter({ end: value, duration: 3500, decimals });
  const displayed = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="flex flex-col gap-1 py-2 px-4"
    >
      <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight tabular-nums">
        {prefix}{displayed}{suffix}
      </span>
      <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 leading-tight">{label}</span>
    </motion.div>
  );
}

export default function Stats() {
  const { language } = useLanguage();
  const { stats } = portfolioData[language];
  return (
    <section aria-label="Statistics" className="py-12 border-y border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-8 w-full">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-x-4 gap-y-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <Kpi
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
