"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE, LOGO_IMAGE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-white relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="section-glow-line" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={LOGO_IMAGE}
              alt="Mo7y"
              width={140}
              height={44}
              className="h-9 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-label text-turquoise mb-5">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {t.footer.servicesList.map((item) => (
                <li key={item} className="hover:text-white/80 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-label text-turquoise mb-5">
              {t.footer.linksTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={SITE.studioUrl}
                  className="text-white/50 hover:text-turquoise transition-colors"
                >
                  {t.footer.studioLink}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/50 hover:text-turquoise transition-colors"
                >
                  {t.footer.ourServices}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/50 hover:text-turquoise transition-colors"
                >
                  {t.footer.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-label text-turquoise mb-5">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li dir="ltr">{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li>{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>
            © {new Date().getFullYear()} {SITE.name} · {SITE.nameAr}. {t.footer.rights}
          </p>
          <p className="font-display tracking-label text-xs text-gradient">
            {t.footer.motto}
          </p>
        </div>
      </div>
    </footer>
  );
}
