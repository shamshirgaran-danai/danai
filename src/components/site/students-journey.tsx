"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Bell, Loader2, Target, Brain, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { FadeIn } from "./fade-in";

const notifySchema = z.object({
  email: z.email("یک ایمیل معتبر وارد کنید"),
});

type NotifyFormValues = z.infer<typeof notifySchema>;

const futureTopics = [
  { icon: Brain, label: "مهارت‌های یادگیری" },
  { icon: Target, label: "هدف‌گذاری و برنامه‌ریزی" },
  { icon: CalendarCheck, label: "یادگیری در دوره امتحانات" },
];

export function StudentsJourney() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NotifyFormValues>({
    resolver: zodResolver(notifySchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: NotifyFormValues) {
    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("failed");
      toast({
        title: "ایمیل شما با موفقیت ثبت شد",
        description:
          "به‌محض شروع سفر دانش‌آموزان، اولین کسی هستید که خبر آن را می‌شنود.",
      });
      reset();
    } catch {
      toast({
        title: "مشکلی پیش آمد",
        description: "لطفاً چند لحظه بعد دوباره تلاش کنید.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="students" className="scroll-mt-24 bg-secondary/70 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-turquoise-ink">
                مسیر سفر دوم
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                <Bell className="h-3.5 w-3.5" aria-hidden />
                به‌زودی
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              سفر دانش‌آموزان
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-muted-foreground">
              مسیر دوم دانای مخصوص دانش‌آموزان است؛ سفری برای یادگیریِ بهتر،
              نه بیشتر درس خواندن. این مسیر دارد آماده می‌شود تا با کیفیت
              شروع شود؛ اگر می‌خواهید اولین خبر شروع آن به شما برسد، ایمیل
             تان را جا بگذارید.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="موضوعات آینده">
              {futureTopics.map((topic) => (
                <li
                  key={topic.label}
                  className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-semibold shadow-sm"
                >
                  <topic.icon className="h-4 w-4 text-coral" aria-hidden />
                  {topic.label}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.12}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border bg-card p-6 shadow-[0_16px_44px_rgb(23_63_60/0.08)] sm:p-8"
            >
              <h3 className="text-lg font-bold">مرا از شروع این سفر باخبر کن</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                فقط یک ایمیل کافی است؛ بدون مزاحمت، فقط خبرهای خوب.
              </p>
              <div className="mt-5 space-y-2">
                <Label htmlFor="notify-email">ایمیل شما *</Label>
                <Input
                  id="notify-email"
                  type="email"
                  dir="ltr"
                  className="text-left"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-destructive" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-5 w-full rounded-full bg-coral-deep text-base hover:bg-coral-deep/90 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    در حال ثبت…
                  </>
                ) : (
                  <>
                    خبرم کن
                    <Bell className="h-4 w-4" aria-hidden />
                  </>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
