"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandTone = "display" | "text" | "on-dark";

const toneColors: Record<BrandTone, [string, string]> = {
  /** متن درشت — فیروزه‌ای و مرجانی اصلی برند */
  display: ["#1d9e90", "#e0563e"],
  /** متن کوچک — نسخه‌های تیره برای کنتراست کامل AA */
  text: ["#0f766e", "#9a3412"],
  /** روی زمینه تیره — نسخه‌های روشن */
  "on-dark": ["#2bb3a3", "#ff8e72"],
};

/**
 * نام برند دانای — قانون طلایی: همیشه دو رنگ، همیشه یک کلمهٔ متصل.
 * «دان» فیروزه‌ای + «ای» حال‌خوب (مرجانی)؛ با گرادیان stop-hard روی متنِ پیوسته
 * اعمال می‌شود تا حروف هیچ‌گاه از هم جدا نشوند.
 * مرز رنگ دقیقاً روی اتصال «نـا» می‌افتد: دان فیروزه‌ای، ای مرجانی.
 */
export function BrandWord({
  className,
  tone = "display",
  split = "60%",
}: {
  className?: string;
  tone?: BrandTone;
  split?: string;
}) {
  const [danColor, aiColor] = toneColors[tone];
  return (
    <span
      dir="rtl"
      className={cn("danai-word inline-block align-baseline", className)}
      style={{
        backgroundImage: `linear-gradient(to left, ${danColor} 0%, ${danColor} ${split}, ${aiColor} ${split}, ${aiColor} 100%)`,
      }}
    >
      دانای
    </span>
  );
}

/** نشان اصلی برند — لوگوی واقعی دانای: کتاب باز با رشته‌های شبکهٔ عصبی */
export function BrandEmblem({
  className,
  boxClassName,
  priority = false,
}: {
  className?: string;
  boxClassName?: string;
  priority?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-turquoise-bright/30 shadow-[0_2px_10px_rgb(23_63_60/0.10)]",
        boxClassName,
      )}
    >
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={574}
        height={574}
        priority={priority}
        className={cn("h-[82%] w-[82%] object-contain", className)}
      />
    </span>
  );
}

/** نام کامل برند — «کانون هم‌آفرینی دانای» با نام دانای همیشه دو رنگ */
export function BrandFullName({
  className,
  tone = "display",
}: {
  className?: string;
  tone?: BrandTone;
}) {
  return (
    <span className={cn("inline-flex items-baseline gap-1.5", className)}>
      کانون هم‌آفرینی
      <BrandWord tone={tone} />
    </span>
  );
}

export function BrandLogo({
  className,
  boxClassName,
  tone = "display",
}: {
  className?: string;
  boxClassName?: string;
  tone?: BrandTone;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandEmblem boxClassName={cn("h-11 w-11", boxClassName)} />
      <BrandWord tone={tone} className="text-2xl font-extrabold leading-none" />
    </span>
  );
}

/** شعار رسمی برند — نام دانای در دل شعار هم دو رنگ است */
export function Slogan({
  className,
  tone = "display",
  extended = true,
}: {
  className?: string;
  tone?: BrandTone;
  extended?: boolean;
}) {
  return (
    <span className={className}>
      با <BrandWord tone={tone} /> در سفر یادگیری
      {extended && (
        <span className="mt-2 block text-[0.6em] leading-[1.6] font-bold opacity-80">
          از اندیشه‌ورزی تا خرد عملی
        </span>
      )}
    </span>
  );
}

/** توضیح رسمی برند */
export const brandDescription =
  "دانایی «دان» در عصر هوش مصنوعی «آی»؛ فضایی برای هم‌افزایی و هم‌آفرینی معلمان و دانش‌آموزان تا سفر یادگیری را به تجربه‌ای تازه و امیدبخش تبدیل کنیم.";

/** نام کامل برند به‌صورت متن ساده (برای متادیتا و اسکیما) */
export const brandFullName = "کانون هم‌آفرینی دانای";
