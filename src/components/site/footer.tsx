import Image from "next/image";
import { GraduationCap, School } from "lucide-react";
import { BrandWord, Slogan } from "./brand";
import { siteLinks } from "@/lib/site-links";

const navLinks = [
  { label: "سفر معلمان", href: "#teachers" },
  { label: "سفر دانش‌آموزان", href: "#students" },
  { label: "درباره من", href: "#about" },
  { label: "کوله‌پشتی هوشمند", href: "#backpack" },
  { label: "تماس", href: "#contact" },
];

export function Footer() {
  const socials = [
    { label: "اینستاگرام", href: siteLinks.instagram },
    { label: "تلگرام", href: siteLinks.telegram },
    { label: "لینکدین", href: siteLinks.linkedin },
    { label: "ایمیل", href: siteLinks.email },
  ].filter((item) => Boolean(item.href));

  return (
    <footer className="mt-auto bg-ink text-white/85">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="inline-flex items-center gap-3 rounded-3xl bg-white/95 p-3 shadow-lg ring-1 ring-white/20">
              <Image
                src="/brand/logo-full.png"
                alt="لوگوی کانون هم‌آفرینی دانای — دانایی در عصر هوش مصنوعی"
                width={286}
                height={319}
                className="h-28 w-auto object-contain sm:h-32"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/70">
              دانایی «دان» در عصر هوش مصنوعی «آی»؛ فضایی برای هم‌افزایی و
              هم‌آفرینی معلمان و دانش‌آموزان تا سفر یادگیری را به تجربه‌ای
              تازه و امیدبخش تبدیل کنیم.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">
              <Slogan tone="on-dark" />
            </p>
          </div>

          <nav aria-label="ناوبری فوتر">
            <h3 className="text-sm font-bold text-white">مسیرهای سفر</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-coral-bright" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold text-white">دو سفر، یک مقصد</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                <GraduationCap className="h-4 w-4 text-turquoise-bright" aria-hidden />
                سفر معلمان — فعال و در حال رشد
              </li>
              <li className="flex items-center gap-2.5">
                <School className="h-4 w-4 text-coral-bright" aria-hidden />
                سفر دانش‌آموزان — به‌زودی
              </li>
            </ul>
            {socials.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="شبکه‌های اجتماعی">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:border-turquoise-bright hover:text-white"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>
            © ۱۴۰۵ کانون هم‌آفرینی <BrandWord tone="on-dark" /> | دکتر سیده فاطمه شمشیرگران — همه‌ی حقوق محفوظ است.
          </p>
          <p>
            ساخته‌شده با <span aria-hidden className="text-coral-bright">♥</span> برای یادگیرنده‌ها
          </p>
        </div>
      </div>
    </footer>
  );
}
