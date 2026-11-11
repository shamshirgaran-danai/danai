"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandLogo, BrandWord } from "./brand";

const links = [
  { label: "خانه", href: "#home" },
  { label: "سفر معلمان", href: "#teachers" },
  { label: "سفر دانش‌آموزان", href: "#students" },
  { label: "درباره من", href: "#about" },
  { label: "کوله‌پشتی هوشمند", href: "#backpack" },
  { label: "تماس", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b bg-background/85 shadow-[0_4px_24px_rgb(23_63_60/0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#home"
          aria-label="دانای — بازگشت به خانه"
          className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BrandLogo />
        </Link>

        <nav aria-label="ناوبری اصلی" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/tests"
            className="hidden items-center gap-1.5 rounded-full border border-coral-bright/50 bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-coral-bright/15 md:inline-flex"
          >
            <Sparkles className="h-3.5 w-3.5 text-coral" aria-hidden />
            به‌زودی: تست‌ها
          </Link>

          <Button asChild className="hidden rounded-full sm:inline-flex">
            <a href="#contact">شروع سفر</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="باز کردن منو"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle asChild>
                  <span className="inline-flex items-center gap-2">
                    <BrandWord className="text-xl font-extrabold" />
                    <span className="text-sm font-medium text-muted-foreground">
                      در سفر یادگیری
                    </span>
                  </span>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  منوی ناوبری دانای
                </SheetDescription>
              </SheetHeader>
              <nav
                aria-label="ناوبری موبایل"
                className="flex flex-col gap-1.5 px-4 pb-6"
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  href="/tests"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-2.5 text-sm font-semibold text-accent-foreground"
                >
                  <Sparkles className="h-4 w-4 text-coral" aria-hidden />
                  به‌زودی: تست‌ها
                </Link>
                <Button asChild className="mt-3 rounded-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    شروع سفر
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
