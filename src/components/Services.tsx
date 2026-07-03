"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  AnimatePresence,
  type PanInfo,
} from "framer-motion";
import { ExternalLink } from "lucide-react";
import { serviceImages } from "@/data/service-images";
import { MO7Y_WORDMARK_IMAGE, SITE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

const CHIP_COLORS = [
  "bg-purple/15 text-purple border-purple/25",
  "bg-turquoise/15 text-turquoise border-turquoise/25",
  "bg-purple-light/15 text-purple-dark border-purple-light/25",
  "bg-turquoise-light/15 text-turquoise border-turquoise-light/30",
  "bg-purple/10 text-purple border-purple/20",
];

export default function Services() {
  const { t, isRtl } = useLanguage();
  const services = t.services.items;
  const rotation = useMotionValue(0);
  const smooth = useSpring(rotation, { stiffness: 60, damping: 18, mass: 0.6 });
  const inverse = useTransform(smooth, (r) => -r);
  const [hovered, setHovered] = useState<number | null>(null);
  const startRef = useRef(0);
  const step = 360 / services.length;
  const Arrow = isRtl ? "←" : "→";

  const active = hovered ?? 0;
  const activeService = services[active];

  function handleDrag(_: unknown, info: PanInfo) {
    rotation.set(startRef.current + info.offset.x * 0.35);
  }

  function spin(dir: number) {
    animate(rotation, rotation.get() + step * dir, {
      type: "spring",
      stiffness: 60,
      damping: 18,
    });
  }

  const radius = "min(42vw, 220px)";

  return (
    <section id="services" className="py-24 sm:py-32 scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white">
      <div className="glow-orb w-96 h-96 bg-purple/8 top-10 end-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple/10 text-purple text-sm font-semibold tracking-label mb-6 border border-purple/20">
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
            {t.services.badge}
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground leading-snug flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            {t.services.titleBefore && (
              <span>{t.services.titleBefore}</span>
            )}
            <Image
              src={MO7Y_WORDMARK_IMAGE}
              alt="Mo7y"
              width={120}
              height={48}
              className="h-8 sm:h-10 md:h-12 w-auto inline-block"
            />
            <span>{t.services.titleAfter}</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="relative mx-auto flex h-[480px] sm:h-[560px] w-full max-w-4xl items-center justify-center my-8">
          <motion.div
            drag="x"
            dragElastic={0.04}
            onDragStart={() => { startRef.current = rotation.get(); }}
            onDrag={handleDrag}
            style={{ rotate: smooth }}
            className="absolute h-[400px] w-[400px] sm:h-[480px] sm:w-[480px] cursor-grab touch-none active:cursor-grabbing"
          >
            {services.map((service, i) => {
              const angle = step * i;
              const isHovered = hovered === i;
              const img = serviceImages[service.id];
              const isStudio = "isStudio" in service && service.isStudio;

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  aria-label={service.title}
                  className="absolute left-1/2 top-1/2 -ml-[40px] -mt-[40px] h-[80px] w-[80px] sm:-ml-[48px] sm:-mt-[48px] sm:h-[96px] sm:w-[96px]"
                  style={{
                    transform: `rotate(${angle}deg) translateY(calc(-1 * ${radius})) rotate(${-angle}deg)`,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.35 : 1,
                      zIndex: isHovered ? 50 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    style={{ rotate: inverse }}
                    className={`relative h-full w-full overflow-hidden rounded-2xl shadow-xl ring-2 ${
                      isStudio ? "ring-turquoise/50" : "ring-purple/30"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={service.title}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                    <span className="absolute bottom-1.5 inset-x-1 text-[9px] sm:text-[10px] font-bold text-white text-center leading-tight line-clamp-2">
                      {service.number}
                    </span>
                  </motion.div>
                </motion.button>
              );
            })}
          </motion.div>

          <div className="pointer-events-none absolute z-10 max-w-[220px] sm:max-w-[280px] text-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <span className="font-display text-3xl sm:text-4xl font-bold text-gradient block mb-2">
                  {activeService.number}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2 leading-snug">
                  {activeService.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeService.description}
                </p>
                {"isStudio" in activeService && activeService.isStudio && (
                  <Link
                    href={SITE.studioUrl}
                    className="pointer-events-auto inline-flex items-center gap-1 mt-3 text-xs font-semibold text-turquoise hover:underline"
                  >
                    {t.services.studioLink}
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
            <p className="mt-4 text-xs text-slate-500">{t.services.dragHint}</p>
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => spin(isRtl ? -1 : 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-purple/20 bg-white text-purple hover:bg-purple hover:text-white transition-colors shadow-sm"
            aria-label="Rotate"
          >
            {isRtl ? "‹" : "›"}
          </button>
          <button
            type="button"
            onClick={() => spin(isRtl ? 1 : -1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-purple/20 bg-white text-purple hover:bg-purple hover:text-white transition-colors shadow-sm"
            aria-label="Rotate"
          >
            {isRtl ? "›" : "‹"}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {t.audienceChips.map((chip, i) => (
            <span
              key={chip}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-transform hover:scale-105 ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
            >
              {chip}
            </span>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-purple font-semibold hover:gap-3 transition-all"
          >
            {t.services.cta} {Arrow}
          </Link>
        </div>
      </div>
    </section>
  );
}
