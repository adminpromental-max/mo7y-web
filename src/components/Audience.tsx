"use client";

import { motion } from "framer-motion";
import { audience } from "@/data/site-content";

export default function Audience() {
  return (
    <section
      id="audience"
      className="py-20 sm:py-28 bg-foreground text-white scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-turquoise text-xs font-semibold tracking-label mb-4">
            لمن نخدم
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            مشروعك يناسبنا؟
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            نشتغل مع شرائح مختلفة — كل واحدة لها احتياجاتها، وكلها تستحق شريك
            يفهمها.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-bold text-turquoise mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
