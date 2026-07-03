"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { SITE, STUDIO_LOGO_IMAGE } from "@/lib/constants";

export default function StudioBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-[#1A1A2E] p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-turquoise/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-turquoise/20 text-turquoise text-xs font-semibold tracking-label mb-4">
                Mo7y Studio
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                تحتاج تصوير أو فيديو؟
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                الإنتاج المرئي عبر{" "}
                <strong className="text-white">Mo7y Studio</strong> — تصوير
                فوتوغرافي · فيديو · مونتاج · موشن جرافيك. نفس الجودة · نفس
                الفريق.
              </p>
              <Link
                href={SITE.studioUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-turquoise text-white font-semibold hover:bg-turquoise-light transition-colors"
              >
                زور Mo7y Studio
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src={STUDIO_LOGO_IMAGE}
                alt="Mo7y Studio"
                width={280}
                height={120}
                className="w-full max-w-[280px] h-auto opacity-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
