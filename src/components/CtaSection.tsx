"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.contact.whatsappMsg)}`;

  return (
    <section id="contact" className="py-24 sm:py-32 scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/40 to-turquoise-50/30" />
      <div className="glow-orb w-96 h-96 bg-purple/10 top-0 start-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeading
            badge={t.contact.badge}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />

          <div className="glass-light rounded-3xl p-8 sm:p-12 border border-purple/10 shadow-[0_20px_80px_rgba(107,40,217,0.1)]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-white font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                {t.contact.whatsapp}
              </Link>
              <Link
                href={`mailto:${SITE.email}`}
                className="btn-outline inline-flex items-center gap-3 w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-purple font-semibold"
              >
                <Mail className="w-5 h-5" />
                {SITE.email}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-700 pt-6 border-t border-purple/10">
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4 text-turquoise" />
                <span dir="ltr">{SITE.phone}</span>
              </span>
              <span>{SITE.address}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
