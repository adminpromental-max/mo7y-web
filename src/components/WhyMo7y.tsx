"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyMo7y } from "@/data/site-content";

export default function WhyMo7y() {
  return (
    <section id="why" className="py-20 sm:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-dark text-xs font-semibold tracking-label mb-4">
              لماذا Mo7y
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              مش بس وكالة — شريك نمو
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              نحن لا نبيع تصويراً أو مونتاجاً أو تصميم مواقع فقط. نبني علامات
              تجارية قوية ونساعد الشركات على النمو والسيطرة على مكانتها في
              السوق.
            </p>
            <p className="text-slate-700 leading-relaxed">
              كل قرار مبني على دراسة وتحليل، وكل قطعة محتوى لها هدف واضح، وكل
              حملة تقاس بنتائجها.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {whyMo7y.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-purple-50 border border-purple-100"
              >
                <CheckCircle2 className="w-5 h-5 text-turquoise shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
