"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MO7Y_WORDMARK_IMAGE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

const POINT_COLORS = [
  "from-purple to-purple-light",
  "from-turquoise to-turquoise-light",
  "from-purple-dark to-purple",
  "from-turquoise to-purple-light",
  "from-purple to-turquoise",
];

export default function WhyMo7y() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const points = t.why.points;

  const positions = [
    { top: "8%", left: "50%", x: "-50%" },
    { top: "28%", left: "88%", x: "-50%" },
    { top: "72%", left: "88%", x: "-50%" },
    { top: "92%", left: "50%", x: "-50%" },
    { top: "72%", left: "12%", x: "-50%" },
  ];

  return (
    <section id="why" className="py-24 sm:py-32 scroll-mt-24 relative overflow-hidden bg-dark noise-overlay">
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="glow-orb w-80 h-80 bg-purple/20 top-1/4 start-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-turquoise text-sm font-semibold tracking-label mb-5 border border-turquoise/20">
            {t.why.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            {t.why.title}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.why.p1}
          </p>
        </motion.div>

        <div className="relative mx-auto h-[420px] sm:h-[500px] max-w-2xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 sm:inset-12 rounded-full border border-dashed border-white/10"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 text-center max-w-xs z-10">
              <Image
                src={MO7Y_WORDMARK_IMAGE}
                alt="Mo7y"
                width={100}
                height={40}
                className="h-8 mx-auto mb-4 w-auto"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className={`inline-block w-8 h-1 rounded-full bg-gradient-to-r ${POINT_COLORS[active]} mb-3`} />
                  <p className="text-white font-semibold text-sm sm:text-base leading-relaxed">
                    {points[active]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {points.map((point, i) => {
            const pos = positions[i];
            const isActive = active === i;
            return (
              <motion.button
                key={point}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="absolute z-20"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: `translateX(${pos.x})`,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    boxShadow: isActive
                      ? "0 0 32px rgba(107,40,217,0.5)"
                      : "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${POINT_COLORS[i]} flex items-center justify-center font-display font-bold text-white text-lg shadow-lg`}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
                <span
                  className={`absolute top-full mt-2 start-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-medium transition-opacity ${
                    isActive ? "text-turquoise opacity-100" : "text-white/40 opacity-0 sm:opacity-100"
                  }`}
                >
                  {point.split("—")[0].trim().slice(0, 20)}
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/50 text-sm mt-8 max-w-xl mx-auto"
        >
          {t.why.p2}
        </motion.p>
      </div>
    </section>
  );
}
