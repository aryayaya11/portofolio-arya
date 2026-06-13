# Arya Putra Permana — Professional Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js&style=flat-square)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react&style=flat-square)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?logo=tailwindcss&style=flat-square)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-F024B6?logo=framer&style=flat-square)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&style=flat-square)](https://www.typescriptlang.org/)

A highly polished, premium, and fully responsive multilingual portfolio website built to showcase projects, experiences, and achievements in Data Analytics, Machine Learning, and Business Intelligence. Designed with rich aesthetics, seamless animations, and modern micro-interactions.

---

## 🌟 Key Features

- **🌐 Dual Language Support**: Full translation between English and Bahasa Indonesia, managed globally with React Context.
- **✨ Micro-interactions & Audio**: Subtle minimalist UI "click ticks" generated dynamically using the browser Web Audio API, combined with smooth spring-based cursor tracking.
- **🖥️ Responsive Device Showcase**: An interactive mockup slider allowing visitors to view projects inside simulated Desktop, Tablet, and Mobile device frames.
- **🌗 Dark Mode & Glassmorphism**: Toggleable light/dark themes powered by `next-themes` with sleek, modern grid animations and custom gradients.
- **🏎️ High Performance**: Optimised layouts and transitions engineered using Framer Motion and custom CSS resets.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router) & [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Design Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Theme Management**: `next-themes`

---

## 📂 Project Structure

```text
portofolio-arya/
├── app/                  # Next.js App Router (Layouts, pages, project details)
│   ├── projects/         # Dynamic routing for project detail pages
│   ├── globals.css       # Design tokens, keyframes, custom utility styles
│   └── page.tsx          # Main entry page assembling all homepage sections
├── components/           # Reusable UI components (Hero, Stats, Experience, etc.)
├── data/                 # Portfolio content & copy (multilingual datasets)
│   ├── portfolio-en.ts   # English translation data
│   ├── portfolio-id.ts   # Indonesian translation data
│   └── portfolio.ts      # Unified translation entry point
├── public/               # Public assets (icons, screenshots, certificates)
└── package.json          # Node project dependencies
```

---

## 🚀 Running Locally

Follow these steps to run the portfolio website on your local development machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).

### 2. Install Dependencies
Clone the repository, navigate into the project directory, and install dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build and Lint
To verify compilation and check for code warnings/formatting issues:
```bash
# Lint check
npm run lint

# Production build test
npm run build
```

---

## 📝 Updating Portfolio Content

All copy, stats, certificates, and project descriptions are fully decoupled from components. To update content:
- Edit **[portfolio-en.ts](file:///d:/portofolio-arya/data/portfolio-en.ts)** for English text.
- Edit **[portfolio-id.ts](file:///d:/portofolio-arya/data/portfolio-id.ts)** for Indonesian text.

Each project structure supports rich properties like `problem`, `action`, `result`, `codeSnippets` (for code showcases), and `deviceScreenshots` (for mockup sliders).

---

## 📬 Contact

- **Name**: Arya Putra Permana
- **Email**: [aryaputrapermana1@gmail.com](mailto:aryaputrapermana1@gmail.com)
- **LinkedIn**: [linkedin.com/in/aryaputrapermana](https://www.linkedin.com/in/aryaputrapermana)
- **GitHub**: [github.com/aryayaya11](https://github.com/aryayaya11)
