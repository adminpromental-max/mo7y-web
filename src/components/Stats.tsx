"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-white h-1/2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-light rounded-3xl border border-purple/10 shadow-[0_20px_80px_rgba(107,40,217,0.12)] p-8 sm:p-12 -mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {t.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <p className="text-4xl sm:text-5xl lg:text-6xl mb-3 group-hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-slate-700 font-medium tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
