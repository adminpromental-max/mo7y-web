"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppFloat() {
  const { t } = useLanguage();
  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.contact.whatsappMsg)}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-pulse fixed bottom-6 end-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      aria-label={t.contact.whatsapp}
    >
      <MessageCircle className="w-7 h-7 text-white relative z-10" />
    </Link>
  );
}
