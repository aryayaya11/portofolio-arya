import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import CustomCursor from "@/components/CustomCursor";
import { BackToTop } from "@/components/BackToTop";
import GlobalClickSound from "@/components/GlobalClickSound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — Data Analyst & Business Intelligence`,
  description: `Portfolio of ${personalInfo.name}, a Data Science student at ${personalInfo.university} specializing in data analytics, business intelligence, and machine learning. ${personalInfo.tagline}`,
  keywords: [
    "Data Analyst",
    "Business Intelligence",
    "Data Science",
    "Power BI",
    "Python",
    "Machine Learning",
    "Universitas Airlangga",
    "Arya Putra Permana",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name} — Data Analyst & BI Enthusiast`,
    description: personalInfo.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Data Analyst & BI Enthusiast`,
    description: personalInfo.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased min-h-screen transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          <CustomCursor />
          <GlobalClickSound />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
