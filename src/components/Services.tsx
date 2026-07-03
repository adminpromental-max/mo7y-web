"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceIcons } from "@/data/service-icons";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t, isRtl } = useLanguage();
  const Arrow = isRtl ? "←" : "→";

  return (
    <section id="services" className="py-24 sm:py-32 scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      <div className="glow-orb w-96 h-96 bg-purple/10 top-20 end-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.services.badge}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[service.id];
            const isStudio = "isStudio" in service && service.isStudio;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.07, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={`service-card group rounded-2xl p-6 sm:p-7 bg-white border ${
                  isStudio
                    ? "border-turquoise/20 lg:col-span-1"
                    : "border-slate-100"
                } ${index === 0 ? "lg:row-span-1" : ""}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-3xl font-bold text-gradient opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.number}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      isStudio
                        ? "bg-turquoise/10 group-hover:bg-turquoise/20 group-hover:shadow-[0_0_24px_rgba(6,182,212,0.3)]"
                        : "bg-purple/10 group-hover:bg-purple/20 group-hover:shadow-[0_0_24px_rgba(107,40,217,0.3)]"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isStudio ? "text-turquoise" : "text-purple"}`}
                    />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {service.description}
                </p>

                {isStudio && (
                  <Link
                    href={SITE.studioUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-turquoise hover:gap-2.5 transition-all"
                  >
                    {t.services.studioLink}
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
          className="text-center mt-14"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-purple font-semibold hover:gap-3 transition-all hover:text-purple-light"
          >
            {t.services.cta} {Arrow}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
