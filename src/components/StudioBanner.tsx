"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { STUDIO_LOGO_IMAGE, SITE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function StudioBanner() {
  const { t, isRtl } = useLanguage();
  const Arrow = isRtl ? "←" : "→";

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl noise-overlay"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#12121f] to-[#1a1035]" />
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="glow-orb w-96 h-96 bg-purple/25 -top-20 -end-20" />
          <div className="glow-orb w-64 h-64 bg-turquoise/15 -bottom-10 -start-10" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12 lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-turquoise text-xs font-semibold tracking-label mb-5 border border-turquoise/20">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
                {t.studio.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-5 leading-tight">
                {t.studio.title}
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                {t.studio.description}
              </p>
              <Link
                href={SITE.studioUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-turquoise to-turquoise-light text-white font-semibold hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] hover:-translate-y-0.5 transition-all"
              >
                {t.studio.cta} {Arrow}
              </Link>
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="glass rounded-2xl p-8 border border-white/10">
                <Image
                  src={STUDIO_LOGO_IMAGE}
                  alt="Mo7y Studio"
                  width={300}
                  height={120}
                  className="w-full max-w-[300px] h-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
