import { Quote, Route, Lightbulb, HandHeart, Linkedin } from "lucide-react";
import { BrandEmblem, BrandFullName } from "./brand";
import { FadeIn } from "./fade-in";
import { siteLinks } from "@/lib/site-links";

const values = [
  { icon: Route, label: "یادگیری یک سفر است، نه یک مقصد" },
  { icon: Lightbulb, label: "دانایی در عصر هوش مصنوعی" },
  { icon: HandHeart, label: "حال خوب، شرط یادگیری خوب" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <span className="text-sm font-semibold text-turquoise-ink">درباره من</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              من متخصص یادگیری و توسعه هستم
            </h2>
            <div className="mt-6 space-y-4 leading-8 text-muted-foreground">
              <p>
                من دکتر سیده فاطمه شمشیرگران هستم؛ متخصص یادگیری و توسعه،
                مدرس دانشگاه و سخنران بین‌المللی. سال‌هاست کنار معلمان و
                یادگیرنده‌ها ایستاده‌ام تا یادگیری را از یک الزام به یک
                تجربه‌ی لذت‌بخش و ماندگار تبدیل کنم.
              </p>
              <p>
                در کانون هم‌آفرینی دانای، کارگاه‌های توانمندسازی معلمان را در
                قالب شش سفر هیجان‌انگیز طراحی کرده‌ام؛ از سفر عصب‌شناختی
                سلامت روان و یادگیری تا سفر مدرن با هوش مصنوعی. رویدادهای
                «پنجره‌ای به آموزش» و کوله‌پشتی هوشمند هم خانه‌ی همین
                تجربه‌ها و یادداشت‌های تخصصی من‌اند.
              </p>
            </div>

            <ul className="mt-7 space-y-3">
              {values.map((value) => (
                <li key={value.label} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary"
                  >
                    <value.icon className="h-4.5 w-4.5 text-turquoise-deep" />
                  </span>
                  <span className="text-sm font-semibold">{value.label}</span>
                </li>
              ))}
            </ul>

            {siteLinks.linkedin && (
              <a
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full border bg-card px-5 py-2.5 text-sm font-semibold text-turquoise-ink transition-all hover:-translate-y-0.5 hover:border-turquoise-bright/60 hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary"
                >
                  <Linkedin className="h-3.5 w-3.5 text-turquoise-deep" />
                </span>
                پروفایل لینکدین من
                <span aria-hidden className="text-xs text-muted-foreground">↗</span>
              </a>
            )}
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="rounded-3xl border bg-card p-7 shadow-[0_16px_44px_rgb(23_63_60/0.08)] sm:p-9">
              <Quote
                className="h-8 w-8 text-coral-bright"
                aria-hidden
                style={{ transform: "scaleX(-1)" }}
              />
              <blockquote className="mt-4 text-lg leading-9 font-semibold sm:text-xl">
                من باور دارم هر یادگیرنده مسیر خودش را دارد؛ کار من روشن‌کردن
                همین مسیرهاست — از دان تا آی.
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                دکتر سیده فاطمه شمشیرگران — بنیان‌گذار <BrandFullName className="font-extrabold" />
              </figcaption>

              <div className="mt-7 flex items-center gap-4 rounded-2xl bg-muted p-4">
                <BrandEmblem boxClassName="h-14 w-14" />
                <div className="min-w-0">
                  <p className="text-sm font-bold">چارچوب DOT.B</p>
                  <p className="mt-1 text-xs leading-6 text-muted-foreground">
                    چهار ایستگاه آگاهی و رهبری خود: کشف، تصاحب، گذار، بودن.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
