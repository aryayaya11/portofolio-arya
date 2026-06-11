"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="pb-12">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
