"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { SITE, LOGO_IMAGE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, toggleLocale, isRtl } = useLanguage();

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#clients", label: t.nav.clients },
    { href: "#why", label: t.nav.why },
    { href: "#journey", label: t.nav.journey },
    { href: "#contact", label: t.nav.contact },
  ];

  const Arrow = isRtl ? "←" : "→";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-4 sm:mx-6 lg:mx-8 mt-3">
        <div className="glass-light rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-14 sm:h-16">
              <Link href="/" className="flex items-center shrink-0">
                <Image
                  src={LOGO_IMAGE}
                  alt="Mo7y"
                  width={140}
                  height={44}
                  className="h-8 sm:h-9 w-auto"
                  priority
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-purple transition-colors rounded-lg hover:bg-purple/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-purple transition-colors rounded-lg hover:bg-purple/5"
                  aria-label="Switch language"
                >
                  <Globe className="w-4 h-4" />
                  {t.lang.switch}
                </button>
                <Link
                  href={SITE.studioUrl}
                  className="px-3 py-2 text-sm font-semibold text-turquoise hover:text-turquoise-light transition-colors"
                >
                  {t.nav.studio}
                </Link>
                <Link
                  href="#contact"
                  className="btn-primary px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
                >
                  {t.nav.cta}
                </Link>
              </div>

              <div className="flex lg:hidden items-center gap-2">
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="p-2 text-slate-600 hover:text-purple transition-colors"
                  aria-label="Switch language"
                >
                  <Globe className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-2 text-foreground"
                  onClick={() => setOpen(!open)}
                  aria-label={t.nav.menu}
                >
                  {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 sm:mx-6 mt-2 glass-light rounded-2xl border border-white/20 shadow-lg overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-4 text-slate-700 font-medium rounded-xl hover:bg-purple/5 hover:text-purple transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={SITE.studioUrl}
                className="block py-3 px-4 text-turquoise font-semibold rounded-xl hover:bg-turquoise/5"
              >
                {t.nav.studio}
              </Link>
              <Link
                href="#contact"
                className="block text-center py-3.5 mt-2 rounded-xl btn-primary text-white font-semibold"
                onClick={() => setOpen(false)}
              >
                {t.nav.cta} {Arrow}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
