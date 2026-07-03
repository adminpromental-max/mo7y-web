import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/constants";
import AppShell from "@/components/AppShell";

const sakkalMajalla = localFont({
  src: "../../public/fonts/sakkal-majalla.woff",
  variable: "--font-sakkal",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.nameAr} — ${SITE.tagline}`,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${sakkalMajalla.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased bg-white text-foreground">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
