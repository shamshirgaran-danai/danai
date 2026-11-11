"use client";

import Image from "next/image";
import { Backpack, BookOpen, BrainCircuit, PenLine, Route } from "lucide-react";
import { FadeIn } from "./fade-in";

const items = [
  {
    kind: "image" as const,
    image: "/content/resume-tips.jpg",
    title: "چطور یک رزومهٔ حرفه‌ای بنویسیم؟",
    excerpt:
      "اولین قدم برای یک شروع حرفه‌ای؛ از بخش‌های اصلی رزومه تا نکته‌هایی که شما را متمایز می‌کند. نسخهٔ تصویری آماده است.",
    audience: "ویژه همه",
    tags: ["فوت و فن"],
    status: "همین حالا ببینید",
    href: "/content/resume-tips.jpg",
    external: true,
  },
  {
    kind: "icon" as const,
    icon: BrainCircuit,
    headerBg: "from-turquoise-bright/25 to-turquoise-bright/5",
    iconBg: "bg-secondary",
    iconColor: "text-turquoise-deep",
    title: "هوش مصنوعی در کلاس درس؛ از ابزار ساده تا هم‌تدریس‌گر",
    excerpt:
      "چگونه هوش مصنوعی در برنامه‌ریزی درس، تولید محتوا و بازخورد به دانش‌آموزان همراه معلم می‌شود؛ بدون آنکه جای او را بگیرد.",
    audience: "ویژه معلمان",
    tags: ["هوش مصنوعی در آموزش"],
    status: "در حال نوشتن",
    href: "#contact",
    external: false,
  },
  {
    kind: "icon" as const,
    icon: Route,
    headerBg: "from-pastel/50 to-pastel/10",
    iconBg: "bg-pastel/40",
    iconColor: "text-turquoise-ink",
    title: "یادگیری ماندگار؛ چطور درس‌ها را فراموش نکنیم؟",
    excerpt:
      "مرور فاصله‌دار، آزمون‌های کوچک و ارتباط دادن دانسته‌ها؛ سه ابزار ساده که یادگیری را از «دیشب خواندم» به «همیشه می‌دانم» می‌رساند.",
    audience: "ویژه دانش‌آموزان",
    tags: ["مهارت‌های یادگیری"],
    status: "در حال نوشتن",
    href: "#contact",
    external: false,
  },
];

export function SmartBackpack() {
  return (
    <section id="backpack" className="scroll-mt-24 bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-turquoise-ink">
            <Backpack className="h-4 w-4" aria-hidden />
            محتوای کاربردی برای معلمان و دانش‌آموزان
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            کوله‌پشتی هوشمند
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            کوله‌پشتی هوشمند دانای پر است از محتواهای کاربردی و کوتاه؛ هر بار
            برای معلمان، هر بار برای دانش‌آموزان. کم‌کم پرش می‌کنیم — آیتم اولش
            همین حالا آماده است.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-[0_8px_30px_rgb(23_63_60/0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgb(23_63_60/0.12)]">
                {item.kind === "image" ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-44 overflow-hidden"
                    aria-label={`مشاهده نسخه تصویری ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={768}
                      height={512}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                ) : (
                  <div
                    className={`flex h-44 items-center justify-center bg-gradient-to-br ${item.headerBg}`}
                  >
                    <span
                      aria-hidden
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-turquoise-ink"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {item.audience}
                    </span>
                  </div>
                  <h3 className="mt-3.5 text-base leading-7 font-bold">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto pt-4">
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                        item.external
                          ? "text-coral-deep transition-colors hover:text-coral"
                          : "text-muted-foreground"
                      }`}
                    >
                      <BookOpen className="h-4 w-4" aria-hidden />
                      {item.status}
                      {item.external && <span aria-hidden className="sr-only">(باز شدن در تب جدید)</span>}
                      {!item.external && <PenLine className="h-3.5 w-3.5 opacity-60" aria-hidden />}
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
