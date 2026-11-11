"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Backpack, ChevronDown, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandWord, Slogan } from "./brand";
import { FadeIn } from "./fade-in";

/** مسیر سفر شناور — مسیر نقطه‌چینی که با جرقه هوش مصنوعی به پایان می‌رسد */
function JourneyPath() {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden
      className="h-auto w-full max-w-md drop-shadow-[0_10px_30px_rgb(23_63_60/0.08)]"
    >
      <motion.path
        d="M290 190 C 240 185 235 150 190 132 C 150 116 120 120 95 88 C 78 66 62 52 40 38"
        stroke="#1d9e90"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="1 14"
        initial={reduce ? undefined : { pathLength: 0 }}
        animate={reduce ? undefined : { pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
      />
      <circle cx="290" cy="190" r="10" fill="#a8e6cf" />
      <circle cx="190" cy="132" r="6" fill="#2bb3a3" />
      <circle cx="95" cy="88" r="6" fill="#ff8e72" />
      <path
        d="M40 6 L48 30 L72 38 L48 46 L40 70 L32 46 L8 38 L32 30 Z"
        fill="#ff8e72"
        className="animate-float-slow"
      />
      <circle cx="40" cy="38" r="12" fill="#2bb3a3" opacity="0.18" />
    </svg>
  );
}

const floatingCards = [
  {
    icon: GraduationCap,
    label: "کارگاه‌های توانمندسازی",
    className: "animate-float",
    position: "top-6 -right-2 sm:right-2",
    bg: "bg-card",
  },
  {
    icon: Sparkles,
    label: "به‌زودی: تست‌های دانای",
    className: "animate-float-delay",
    position: "bottom-24 -left-1 sm:left-3",
    bg: "bg-card",
  },
  {
    icon: Backpack,
    label: "کوله‌پشتی هوشمند",
    className: "animate-float-slow",
    position: "bottom-10 -right-1 sm:right-6",
    bg: "bg-card",
  },
];

export function Hero() {
  return (
    <section id="home" className="journey-dots relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* لکه‌های نرم پس‌زمینه */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pastel/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-28 h-96 w-96 rounded-full bg-coral-bright/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-turquoise-bright/12 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div>
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-turquoise-bright/40 bg-secondary px-4 py-1.5 text-sm font-semibold text-turquoise-ink">
              کانون هم‌آفرینی
              <BrandWord tone="text" />
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-6 text-4xl leading-[1.35] font-extrabold tracking-tight sm:text-5xl sm:leading-[1.35]">
              <Slogan />
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
              دانایی «دان» در عصر هوش مصنوعی «آی»؛ فضایی برای هم‌افزایی و
              هم‌آفرینی معلمان و دانش‌آموزان تا سفر یادگیری را به تجربه‌ای
              تازه و امیدبخش تبدیل کنیم. این کانون به سرپرستی دکتر سیده
              فاطمه شمشیرگران، متخصص یادگیری و توسعه، اداره می‌شود.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-7 text-base shadow-lg shadow-primary/25">
                <a href="#teachers">شروع سفر معلمان</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-coral-bright/60 px-7 text-base text-accent-foreground hover:bg-accent"
              >
                <a href="#about">بیشتر بدانید</a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-semibold text-turquoise-ink">
                <span aria-hidden className="h-2 w-2 rounded-full bg-turquoise-bright" />
                سفر معلمان فعال است
              </span>
              <span aria-hidden>•</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-coral-deep">
                <span aria-hidden className="h-2 w-2 rounded-full bg-coral-bright" />
                سفر دانش‌آموزان در راه است
              </span>
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-3xl border bg-white/60 p-6 shadow-[0_24px_60px_rgb(23_63_60/0.10)] backdrop-blur-sm sm:p-10">
            <JourneyPath />
            {floatingCards.map((card) => (
              <div
                key={card.label}
                className={`absolute ${card.position} ${card.className} inline-flex items-center gap-2 rounded-2xl border bg-card px-3.5 py-2.5 text-xs font-semibold shadow-[0_10px_30px_rgb(23_63_60/0.10)] sm:text-sm`}
              >
                <span
                  aria-hidden
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary"
                >
                  <card.icon className="h-4 w-4 text-turquoise-deep" />
                </span>
                {card.label}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <a
        href="#teachers"
        aria-label="رفتن به بخش سفر معلمان"
        className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground sm:block"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
