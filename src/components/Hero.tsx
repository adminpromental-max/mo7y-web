"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LOGO_IMAGE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, isRtl } = useLanguage();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 80, damping: 20 });
  const springY = useSpring(my, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], isRtl ? [8, -8] : [-8, 8]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const Arrow = isRtl ? "←" : "→";

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden scroll-mt-20 noise-overlay"
    >
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 grid-overlay opacity-40" />

      <div className="glow-orb w-[600px] h-[600px] bg-purple/25 -top-32 -start-32" />
      <div
        className="glow-orb w-[500px] h-[500px] bg-turquoise/20 bottom-0 end-0"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="glow-orb w-72 h-72 bg-purple-light/15 top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-turquoise text-xs font-semibold tracking-label mb-8 border border-turquoise/20"
            >
              <span className="font-display text-lg text-gradient">7</span>
              {t.hero.badge}
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.08] mb-6">
              <span className="text-white block mb-2">{t.hero.tagline}</span>
              <span className="text-gradient">{t.hero.taglineSub}</span>
            </h1>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-sm sm:text-base"
              >
                {t.hero.ctaPrimary}
                <span className="text-lg">{Arrow}</span>
              </Link>
              <Link
                href="#services"
                className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-sm sm:text-base border-white/20 bg-white/5 hover:bg-white/10 hover:border-turquoise/50"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex justify-center lg:justify-end perspective-[1000px]"
            onMouseMove={handleMouse}
            onMouseLeave={() => { mx.set(0); my.set(0); }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-lg"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple/30 to-turquoise/20 blur-3xl scale-110" />
              <div className="relative glass rounded-3xl p-8 sm:p-12 border border-white/10">
                <Image
                  src={LOGO_IMAGE}
                  alt="Mo7y"
                  width={600}
                  height={380}
                  className="relative w-full h-auto"
                  priority
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -end-4 glass rounded-2xl px-4 py-3 border border-turquoise/30"
              >
                <span className="font-display text-2xl font-bold text-gradient">7</span>
                <span className="text-white/70 text-xs block">Services</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -start-4 glass rounded-2xl px-4 py-3 border border-purple/30"
              >
                <span className="font-display text-2xl font-bold text-gradient">+10</span>
                <span className="text-white/70 text-xs block">Years</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center mt-16 gap-2"
        >
          <span className="text-white/30 text-xs tracking-label">{t.hero.scroll}</span>
          <Link href="#clients" className="scroll-indicator text-white/40 hover:text-turquoise transition-colors">
            <ChevronDown className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
