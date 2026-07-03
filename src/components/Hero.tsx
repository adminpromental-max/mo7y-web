"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO_BG_IMAGE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";

export default function Hero() {
  const { t, isRtl } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.75, 0.95]);

  const Arrow = isRtl ? "←" : "→";

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden scroll-mt-20"
    >
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={HERO_BG_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-dark/80 via-dark/70 to-dark"
      />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-30" />
      <div className="glow-orb w-[500px] h-[500px] bg-purple/20 -top-32 -start-32" />
      <div className="glow-orb w-[400px] h-[400px] bg-turquoise/15 bottom-0 end-0" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10 w-full"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-turquoise text-sm font-semibold tracking-label mb-8 border border-turquoise/20"
          >
            <span className="font-display text-xl text-gradient">7</span>
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-6"
          >
            <span className="text-white block mb-3">{t.hero.tagline}</span>
            <span className="text-gradient">{t.hero.taglineSub}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base"
            >
              {t.hero.ctaPrimary}
              <span className="text-lg">{Arrow}</span>
            </Link>
            <Link
              href="#services"
              className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base border-white/25 bg-white/5 hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center mt-20 gap-2"
        >
          <span className="text-white/40 text-sm tracking-label">{t.hero.scroll}</span>
          <Link
            href="#clients"
            className="scroll-indicator text-white/50 hover:text-turquoise transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
