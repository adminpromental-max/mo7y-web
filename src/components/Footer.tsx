import Link from "next/link";
import Image from "next/image";
import { SITE, LOGO_IMAGE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={LOGO_IMAGE}
              alt="Mo7y"
              width={120}
              height={40}
              className="h-9 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {SITE.tagline} — 7 خدمات متكاملة للمشاريع الناشئة والشركات في
              السعودية.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-label text-turquoise mb-4">
              الخدمات
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>استراتيجيات النمو</li>
              <li>الهوية والبراند</li>
              <li>تصميم المواقع</li>
              <li>التسويق الرقمي</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-label text-turquoise mb-4">
              روابط
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={SITE.studioUrl}
                  className="text-white/70 hover:text-turquoise transition-colors"
                >
                  Mo7y Studio — إنتاج بصري
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/70 hover:text-turquoise transition-colors"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/70 hover:text-turquoise transition-colors"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-label text-turquoise mb-4">
              تواصل
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li dir="ltr" className="text-right">
                {SITE.phone}
              </li>
              <li>{SITE.email}</li>
              <li>{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Mo7y · {SITE.nameAr}. جميع الحقوق محفوظة.</p>
          <p className="font-display tracking-label text-xs">7 SERVICES · ONE VISION</p>
        </div>
      </div>
    </footer>
  );
}
