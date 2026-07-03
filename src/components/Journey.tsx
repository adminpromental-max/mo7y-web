"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Map,
  Rocket,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const STEP_ICONS = [Search, Map, Rocket, TrendingUp];
const STEP_COLORS = [
  "from-purple to-purple-light",
  "from-turquoise to-turquoise-light",
  "from-purple-dark to-turquoise",
  "from-turquoise to-purple",
];

export default function Journey() {
  const { t } = useLanguage();
  const steps = t.journey.steps;
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % steps.length);
    setProgress(0);
  }, [steps.length]);

  useEffect(() => {
    if (!playing) return;
    const duration = 3500;
    const interval = 50;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [playing, active, next]);

  const Icon = STEP_ICONS[active];

  return (
    <section
      id="journey"
      className="py-24 sm:py-32 relative overflow-hidden scroll-mt-24 bg-gradient-to-b from-white to-purple-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.journey.badge}
          title={t.journey.title}
          subtitle={t.journey.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-lg"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
        >
          <div className="rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(107,40,217,0.2)] border border-purple/10 bg-dark">
            <div className="flex gap-1 p-3 bg-dark-card">
              {steps.map((step, i) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => { setActive(i); setProgress(0); }}
                  className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden"
                  aria-label={step.title}
                >
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${STEP_COLORS[i]}`}
                    style={{
                      width: i < active ? "100%" : i === active ? `${progress}%` : "0%",
                    }}
                    transition={{ duration: 0.05 }}
                  />
                </button>
              ))}
            </div>

            <div className="relative aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-20" />
              <div className={`absolute inset-0 bg-gradient-to-br ${STEP_COLORS[active]} opacity-20`} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 60, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -60, scale: 0.9 }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="relative z-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${STEP_COLORS[active]} flex items-center justify-center shadow-[0_8px_32px_rgba(107,40,217,0.4)]`}
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="font-display text-5xl sm:text-6xl font-bold text-gradient block mb-4"
                  >
                    {steps[active].step}
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl font-bold text-white mb-4"
                  >
                    {steps[active].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xs mx-auto"
                  >
                    {steps[active].description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between px-4 py-3 bg-dark-card border-t border-white/5">
              <span className="text-white/40 text-xs">
                {active + 1} / {steps.length}
              </span>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                className="text-xs text-turquoise hover:text-turquoise-light transition-colors"
              >
                {playing ? "⏸" : "▶"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
