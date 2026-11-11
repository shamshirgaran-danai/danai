"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, GraduationCap, School, Sparkles } from "lucide-react";
import { BrandWord } from "./brand";
import { FadeIn } from "./fade-in";

type StationStatus = "active" | "soon";

const stations: Array<{
  id: string;
  n: string;
  icon: typeof GraduationCap;
  title: string;
  status: StationStatus;
  statusLabel: string;
  description: string;
  href: string;
  linkLabel: string;
}> = [
  {
    id: "teachers",
    n: "۱",
    icon: GraduationCap,
    title: "سفر معلمان",
    status: "active",
    statusLabel: "در حال حرکت",
    description:
      "کارگاه‌های توانمندسازی در قالب شش سفر هیجان‌انگیز، کوله‌پشتی هوشمند و هوش مصنوعی در آموزش؛ همین حالا فعال است.",
    href: "#teachers",
    linkLabel: "ورود به این ایستگاه",
  },
  {
    id: "students",
    n: "۲",
    icon: School,
    title: "سفر دانش‌آموزان",
    status: "soon",
    statusLabel: "به‌زودی",
    description:
      "یادگیری بهتر، نه بیشتر خواندن؛ این ایستگاه دارد با کیفیت آماده می‌شود.",
    href: "#students",
    linkLabel: "دیدن خبرهای این ایستگاه",
  },
  {
    id: "tests",
    n: "۳",
    icon: Sparkles,
    title: "تست‌های دانای",
    status: "soon",
    statusLabel: "به‌زودی",
    description:
      "تست‌های تعاملی سنجش مهارت‌های یادگیری برای معلمان و دانش‌آموزان؛ در راه‌اندازی نهایی.",
    href: "/tests",
    linkLabel: "پیش‌نمایش ایستگاه",
  },
];

function Pin({
  icon: Icon,
  status,
  n,
}: {
  icon: typeof GraduationCap;
  status: StationStatus;
  n: string;
}) {
  return (
    <span
      aria-hidden
      className={`relative mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_10px_28px_rgb(23_63_60/0.18)] ring-4 ring-white transition-transform duration-300 group-hover:scale-105 ${
        status === "active"
          ? "bg-gradient-to-br from-turquoise-bright to-turquoise-deep"
          : "bg-gradient-to-br from-coral-bright to-coral"
      }`}
    >
      <Icon className="h-7 w-7" aria-hidden />
      <span className="absolute -top-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-card text-sm font-extrabold text-turquoise-deep shadow ring-1 ring-border">
        {n}
      </span>
      {status === "active" && (
        <span className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 animate-ping rounded-full bg-turquoise-bright/70" />
      )}
    </span>
  );
}

export function JourneyMap() {
  const reduce = useReducedMotion();
  return (
    <section id="journey" className="scroll-mt-24 relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-turquoise-bright/35 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-turquoise-ink">
            <span aria-hidden className="h-4 w-8 rounded-full border-2 border-dashed border-turquoise-bright/60" />
            نقشه سفر
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            مسیر سفر <BrandWord />
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            سه ایستگاه، یک نقشهٔ روشن؛ از ایستگاه اول شروع کن، بقیه در راه‌اند.
          </p>
        </FadeIn>

        <div className="relative mt-14">
          {/* جادهٔ نقطه‌چین — فقط دسکتاپ */}
          <svg
            aria-hidden
            viewBox="0 0 1200 210"
            fill="none"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-10 hidden h-[210px] w-full lg:block"
          >
            <path
              d="M1010 30 C 980 130 820 185 600 185 C 380 185 220 130 190 30"
              stroke="#2bb3a3"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="0.5 15"
              className={reduce ? undefined : "road-dash"}
              opacity="0.75"
            />
            <path
              d="M1010 30 C 980 130 820 185 600 185 C 380 185 220 130 190 30"
              stroke="#ff8e72"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="0.5 15"
              strokeDashoffset="-95"
              opacity="0.35"
            />
            <circle cx="1010" cy="30" r="7" fill="#2bb3a3" />
            <circle cx="600" cy="185" r="6" fill="#a8e6cf" stroke="#1d9e90" strokeWidth="2" />
            <circle cx="190" cy="30" r="6" fill="#ff8e72" />
          </svg>

          <ol className="relative grid gap-10 sm:gap-8 lg:grid-cols-3 lg:gap-6">
            {stations.map((station, index) => (
              <li
                key={station.id}
                className={`relative ${index === 1 ? "lg:mt-36" : ""} ${
                  index === 2 ? "lg:mt-0" : ""
                }`}
              >
                {/* ریل عمودی موبایل */}
                {index < stations.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -bottom-10 left-1/2 top-24 w-0.5 border-r-2 border-dashed border-turquoise-bright/45 lg:hidden"
                  />
                )}
                <FadeIn delay={index * 0.1}>
                  <Link
                    href={station.href}
                    className="group block rounded-3xl border bg-card p-6 pt-7 text-center shadow-[0_10px_36px_rgb(23_63_60/0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_54px_rgb(23_63_60/0.13)]"
                  >
                    <Pin icon={station.icon} status={station.status} n={station.n} />
                    <span
                      className={`mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                        station.status === "active"
                          ? "bg-secondary text-turquoise-ink"
                          : "bg-accent text-accent-foreground"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`h-1.5 w-1.5 rounded-full ${
                          station.status === "active" ? "bg-turquoise-bright" : "bg-coral-bright"
                        }`}
                      />
                      {station.statusLabel}
                    </span>
                    <h3 className="mt-2.5 text-lg font-bold">{station.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {station.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-turquoise-ink transition-colors group-hover:text-turquoise-deep">
                      {station.linkLabel}
                      <ArrowLeft
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
