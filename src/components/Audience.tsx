"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Audience() {
  const { t } = useLanguage();

  return (
    <section
      id="audience"
      className="py-24 sm:py-32 bg-dark relative overflow-hidden scroll-mt-24 noise-overlay"
    >
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="glow-orb w-80 h-80 bg-purple/20 top-1/2 start-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.audience.badge}
          title={t.audience.title}
          subtitle={t.audience.subtitle}
          dark
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.audience.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl glass p-6 sm:p-7 border border-white/5 hover:border-turquoise/30 transition-all duration-400 hover:shadow-[0_16px_48px_rgba(6,182,212,0.12)]"
            >
              <div className="w-10 h-1 rounded-full bg-gradient-to-r from-purple to-turquoise mb-5 group-hover:w-16 transition-all duration-400" />
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-turquoise transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/70 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
