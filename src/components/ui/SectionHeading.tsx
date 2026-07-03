"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  dark = false,
  center = true,
}: SectionHeadingProps) {
  const { isRtl } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`mb-14 sm:mb-20 ${center ? "text-center" : ""}`}
    >
      <span
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-label mb-5 ${
          dark
            ? "bg-white/10 text-turquoise border border-white/10"
            : "bg-purple/10 text-purple border border-purple/20"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
        {badge}
      </span>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-[1.1] mb-5 ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${dark ? "text-white/60" : "text-slate-700"}`}
          dir={isRtl ? "rtl" : "ltr"}
        >
          {subtitle}
        </p>
      )}
      <div className={`section-glow-line mt-8 ${center ? "mx-auto max-w-xs" : "max-w-xs"}`} />
    </motion.div>
  );
}
