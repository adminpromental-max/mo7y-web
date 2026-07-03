"use client";

import { motion } from "framer-motion";
import { journeySteps } from "@/data/site-content";

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-20 sm:py-28 bg-purple-50 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-purple text-xs font-semibold tracking-label mb-4">
            رحلتنا معاك
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            من الفكرة للنمو
          </h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto">
            4 خطوات واضحة — مش تعقيد enterprise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_24px_rgba(107,40,217,0.06)]"
            >
              <span className="font-display text-4xl font-bold text-purple/20 block mb-3">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {step.description}
              </p>
              {i < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-3 w-6 h-0.5 bg-turquoise/40" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
