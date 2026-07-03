"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE, LOGO_IMAGE } from "@/lib/constants";

const navLinks = [
  { href: "#services", label: "الخدمات" },
  { href: "#audience", label: "لمن نخدم" },
  { href: "#why", label: "لماذا Mo7y" },
  { href: "#journey", label: "رحلتنا" },
  { href: "#contact", label: "تواصل" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={LOGO_IMAGE}
              alt="Mo7y"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-purple transition-colors tracking-label"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={SITE.studioUrl}
              className="text-sm font-medium text-turquoise hover:text-turquoise-light transition-colors"
            >
              Mo7y Studio
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-purple text-white text-sm font-semibold hover:bg-purple-light transition-colors shadow-[0_4px_14px_rgba(107,40,217,0.25)]"
            >
              احجز استشارتك
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 border-t border-slate-100 pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-slate-700 font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={SITE.studioUrl}
              className="block py-2 text-turquoise font-medium"
            >
              Mo7y Studio
            </Link>
            <Link
              href="#contact"
              className="block text-center py-3 rounded-xl bg-purple text-white font-semibold"
              onClick={() => setOpen(false)}
            >
              احجز استشارتك
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
