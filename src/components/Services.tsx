"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { services } from "@/data/services";
import { SITE } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-turquoise-50 text-turquoise text-xs font-semibold tracking-label mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            7 خدمات · مشروع واحد
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            منظومة متكاملة تبدأ بالاستراتيجية وتنتهي بنتائج قابلة للقياس — مش
            خدمات منفصلة.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`group relative rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(107,40,217,0.12)] hover:-translate-y-1 ${
                  service.isStudio
                    ? "border-turquoise/30 hover:border-turquoise"
                    : "border-slate-100 hover:border-purple-light"
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-display text-2xl font-bold text-turquoise">
                    {service.number}
                  </span>
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      service.isStudio ? "bg-turquoise-50" : "bg-purple-50"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        service.isStudio ? "text-turquoise" : "text-purple"
                      }`}
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {service.description}
                </p>

                {service.isStudio && (
                  <Link
                    href={SITE.studioUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-turquoise hover:text-turquoise-light transition-colors"
                  >
                    عبر Mo7y Studio
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                )}
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-purple font-semibold hover:text-purple-light transition-colors"
          >
            مش متأكد أي خدمة تحتاج؟ احجز استشارة
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
