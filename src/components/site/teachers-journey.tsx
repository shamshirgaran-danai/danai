import {
  Bot,
  Brain,
  Compass,
  GraduationCap,
  Palette,
  PackageOpen,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./fade-in";

type JourneyStatus = "active" | "waiting";

const journeys: Array<{
  icon: typeof GraduationCap;
  title: string;
  description: string;
  status: JourneyStatus;
  iconBg: string;
  iconColor: string;
}> = [
  {
    icon: Palette,
    title: "سفر زیبایی‌شناختی / تاریخ و هنر",
    description:
      "هنر، زیبایی و تاریخ را به بهانه‌ی یادگیری وارد کلاس کنید؛ سفری برای دیدن دوباره‌ی جهان با چشم معلمِ هنردوست و ساختن درس‌هایی که در ذهن می‌مانند.",
    status: "active",
    iconBg: "bg-secondary",
    iconColor: "text-turquoise-deep",
  },
  {
    icon: Compass,
    title: "سفر خودشناسی و اخلاق",
    description:
      "نقشه‌ی خودتان را بشناسید؛ سفری درون‌نگر برای شناخت ارزش‌ها، اخلاق حرفه‌ای و تعادل معلمی. این سفر هنوز راه نیفتاده و منتظر همسفر است.",
    status: "waiting",
    iconBg: "bg-muted",
    iconColor: "text-muted-foreground",
  },
  {
    icon: Brain,
    title: "سفر عصب‌شناختی / سلامت روان و یادگیری",
    description:
      "مغز چگونه یاد می‌گیرد؟ از عادت‌های ذهن تا سلامت روان؛ سفری برای یادگیریِ آرام‌تر، عمیق‌تر و ماندگارتر بر پایه‌ی تازه‌ترین دانسته‌های علوم اعصاب.",
    status: "active",
    iconBg: "bg-secondary",
    iconColor: "text-turquoise-deep",
  },
  {
    icon: Bot,
    title: "سفر مدرن با هوش مصنوعی",
    description:
      "هوش مصنوعی را هم‌تدریس‌گر خود کنید؛ کار با ابزارهای کاربردی برای طراحی تدریس، تولید محتوا و شخصی‌سازی یادگیری در کلاس امروز.",
    status: "active",
    iconBg: "bg-accent",
    iconColor: "text-accent-foreground",
  },
  {
    icon: UsersRound,
    title: "سفر با همکاران و گروه",
    description:
      "یادگیری در جمع ماندگارتر است؛ سفری از هم‌افزایی و هم‌آفرینی با همکاران. این سفر منتظر همسفرهایش می‌ماند.",
    status: "waiting",
    iconBg: "bg-muted",
    iconColor: "text-muted-foreground",
  },
  {
    icon: PackageOpen,
    title: "جعبه ابزار مدرن و جعبه حمایتی نوسفران",
    description:
      "ملزومات سفر برای نوسفران (نومعلمان): جعبه ابزار مدرن و جعبه حمایتی؛ آماده‌ی باز شدن، منتظر همسفرهای تازه‌کار!",
    status: "waiting",
    iconBg: "bg-muted",
    iconColor: "text-muted-foreground",
  },
];

const persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶"];

export function TeachersJourney() {
  return (
    <section id="teachers" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-turquoise-ink">
            مسیر سفر اول
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            سفر معلمان
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            کارگاه‌های توانمندسازی دانای در قالب شش سفر هیجان‌انگیز و ملزومات
            سفر چیده شده‌اند؛ هر معلم فراخور نیاز، علاقه و توانایی خودش سفرش
            را انتخاب می‌کند. فعلاً سه سفر در حال حرکت‌اند و بقیه منتظر
            همسفر!
          </p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-12">
          <h3 className="text-center text-xl font-bold sm:text-2xl">
            کارگاه‌های توانمندسازی
          </h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            شش سفر هیجان‌انگیز و ملزومات سفر
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {journeys.map((journey, index) => (
            <FadeIn key={journey.title} delay={index * 0.07}>
              <article
                className={`group h-full rounded-3xl border p-6 shadow-[0_8px_30px_rgb(23_63_60/0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgb(23_63_60/0.12)] ${
                  journey.status === "active"
                    ? "border-turquoise-bright/35 bg-card"
                    : "border-border/70 bg-card/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${journey.iconBg} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <journey.icon className={`h-6 w-6 ${journey.iconColor}`} />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      journey.status === "active"
                        ? "bg-secondary text-turquoise-ink"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {journey.status === "active" ? (
                      <>
                        <span
                          aria-hidden
                          className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-turquoise-bright align-middle"
                        />
                        در حال حرکت
                      </>
                    ) : (
                      "منتظر همسفر"
                    )}
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold text-muted-foreground">
                  سفر {persianNumbers[index]}
                </p>
                <h4 className="mt-1 text-lg font-bold leading-7">
                  {journey.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {journey.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25">
            <a href="#contact">مسیر من را شروع کن</a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            برای دریافت برنامه کارگاه‌ها و رزرو جایگاه، پیام بدهید.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
