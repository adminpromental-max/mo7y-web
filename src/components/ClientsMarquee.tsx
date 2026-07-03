"use client";

import Image from "next/image";
import { clientLogos } from "@/data/clients";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function ClientsMarquee() {
  const { t } = useLanguage();
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-16 sm:py-20 bg-dark relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="glow-orb w-64 h-64 bg-purple/20 top-0 left-1/4" />
      <div className="glow-orb w-48 h-48 bg-turquoise/15 bottom-0 right-1/4 animation-delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        <SectionHeading
          badge={t.clients.badge}
          title={t.clients.title}
          subtitle={t.clients.subtitle}
          dark
        />
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        <div className="marquee-track gap-6 px-4">
          {doubled.map((client, i) => (
            <div
              key={`${client.src}-${i}`}
              className="client-logo-card flex-shrink-0 w-36 sm:w-44 h-20 sm:h-24 rounded-2xl glass flex items-center justify-center p-4"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={160}
                height={60}
                className="max-h-12 sm:max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
