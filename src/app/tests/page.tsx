import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandEmblem, BrandWord } from "@/components/site/brand";

export const metadata: Metadata = {
  title: "تست‌های دانای — به‌زودی",
  description:
    "تست‌ها و آزمون‌های تعاملی کانون هم‌آفرینی دانای به‌زودی راه‌اندازی می‌شوند؛ ابزارهای سنجش یادگیری برای معلمان و دانش‌آموزان.",
};

export default function TestsPage() {
  return (
    <div className="journey-dots flex min-h-screen flex-col bg-background">
      <header className="border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="دانای — بازگشت به خانه">
            <BrandWord className="text-2xl font-extrabold" />
          </Link>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link href="/">
              <ArrowRight className="h-4 w-4" aria-hidden />
              بازگشت به خانه
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-xl rounded-3xl border bg-card p-8 text-center shadow-[0_24px_60px_rgb(23_63_60/0.10)] sm:p-12">
          <span aria-hidden className="block animate-float">
            <BrandEmblem boxClassName="mx-auto h-20 w-20" />
          </span>
          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            به‌زودی
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            تست‌های <BrandWord />
          </h1>
          <p className="mt-5 leading-8 text-muted-foreground">
            در حال آماده‌سازی یک تجربه‌ی تازه برای سنجش یادگیری هستیم؛ تست‌ها و
            آزمون‌های تعاملی دانای برای معلمان و دانش‌آموزان، با همین کیفیت و
            حال‌خوبِ همیشگی. اگر می‌خواهید اولین خبر شروع به شما برسد، از
            صفحه‌ی اصلی در بخش سفر دانش‌آموزان ایمیل‌تان را ثبت کنید.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-7 text-base shadow-lg shadow-primary/25">
            <Link href="/#students">
              <Bell className="h-4 w-4" aria-hidden />
              ثبت ایمیل اطلاع‌رسانی
            </Link>
          </Button>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        © ۱۴۰۵ کانون هم‌آفرینی دانای — با دانای در سفر یادگیری؛ از اندیشه‌ورزی تا خرد عملی
      </footer>
    </div>
  );
}
