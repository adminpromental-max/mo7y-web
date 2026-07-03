"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { SITE, LOGO_IMAGE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 scroll-mt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-80" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-turquoise-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-dark text-xs font-semibold tracking-label mb-6">
              <span className="font-display text-turquoise">7</span>
              خدمات متكاملة
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.15] mb-6">
              {SITE.tagline}
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8 max-w-xl">
              {SITE.taglineSub}. فريق صغير بخبرة +10 سنوات — نشتغل مع رواد
              الأعمال والشركات الناشئة والقائمة في السعودية.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple text-white font-semibold hover:bg-purple-light transition-all shadow-[0_4px_14px_rgba(107,40,217,0.25)] hover:shadow-[0_8px_24px_rgba(107,40,217,0.3)]"
              >
                احجز استشارتك
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-purple text-purple font-semibold hover:bg-purple-50 transition-colors"
              >
                استكشف الخدمات
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-turquoise/10 rounded-3xl blur-2xl" />
              <Image
                src={LOGO_IMAGE}
                alt="Mo7y Logo"
                width={500}
                height={500}
                className="relative w-full h-auto drop-shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
