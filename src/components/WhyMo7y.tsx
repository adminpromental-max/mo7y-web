"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyMo7y() {
  const { t } = useLanguage();

  return (
    <section id="why" className="py-24 sm:py-32 scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-turquoise-50/30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              badge={t.why.badge}
              title={t.why.title}
              center={false}
            />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
              {t.why.p1}
            </p>
            <p className="text-slate-700 leading-relaxed">{t.why.p2}</p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {t.why.points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-purple/10 shadow-[0_4px_24px_rgba(107,40,217,0.06)] hover:shadow-[0_8px_32px_rgba(107,40,217,0.12)] hover:border-purple/25 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple to-turquoise flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium pt-1">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
