"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function CtaSection() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("مرحباً، أريد حجز استشارة مع Mo7y")}`;

  return (
    <section id="contact" className="py-20 sm:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-turquoise-50 text-turquoise text-xs font-semibold tracking-label mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            جاهز نُحيي مشروعك؟
          </h2>
          <p className="text-slate-700 text-lg mb-10">
            احجز استشارتك الأولى — Online أو حضوري في السعودية.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 rounded-xl bg-purple text-white font-semibold hover:bg-purple-light transition-all shadow-[0_4px_14px_rgba(107,40,217,0.25)]"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل عبر واتساب
            </Link>
            <Link
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 rounded-xl border-2 border-purple text-purple font-semibold hover:bg-purple-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              {SITE.email}
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2" dir="ltr">
              <Phone className="w-4 h-4 text-turquoise" />
              {SITE.phone}
            </span>
            <span>{SITE.address}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
