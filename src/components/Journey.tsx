"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section
      id="journey"
      className="py-24 sm:py-32 bg-dark relative overflow-hidden scroll-mt-24 noise-overlay"
    >
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="glow-orb w-72 h-72 bg-turquoise/15 bottom-0 end-1/4" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.journey.badge}
          title={t.journey.title}
          subtitle={t.journey.subtitle}
          dark
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-16 start-[12.5%] end-[12.5%] timeline-line" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {t.journey.steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative group"
              >
                <div className="glass rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-purple/30 transition-all duration-400 h-full hover:shadow-[0_16px_48px_rgba(107,40,217,0.15)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-turquoise flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <span className="font-display text-sm font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-purple/50 to-transparent lg:hidden" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-turquoise transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
