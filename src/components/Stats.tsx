"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site-content";

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-purple-50 border-y border-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-purple mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-slate-700 font-medium tracking-label">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
