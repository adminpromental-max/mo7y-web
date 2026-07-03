"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
