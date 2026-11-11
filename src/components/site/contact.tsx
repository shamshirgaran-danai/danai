"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MessageCircleHeart,
  Send,
  SendHorizonal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { siteLinks } from "@/lib/site-links";
import { FadeIn } from "./fade-in";

const contactSchema = z.object({
  name: z.string().min(2, "نام و نام خانوادگی را کامل وارد کنید"),
  email: z.email("یک ایمیل معتبر وارد کنید"),
  message: z.string().min(10, "پیام باید دست‌کم ۱۰ نویسه باشد"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function buildSocials() {
  return [
    { label: "اینستاگرام", href: siteLinks.instagram, icon: Instagram },
    { label: "تلگرام", href: siteLinks.telegram, icon: SendHorizonal },
    { label: "لینکدین", href: siteLinks.linkedin, icon: Linkedin },
    { label: "ایمیل", href: siteLinks.email, icon: Mail },
  ];
}

export function Contact() {
  const { toast } = useToast();
  const socials = buildSocials();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("failed");
      toast({
        title: "پیام شما با موفقیت ثبت شد",
        description: "به‌زودی پاسخ شما را از همین راه ارسال می‌کنم؛ منتظر خبرهای خوب باشید.",
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
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-turquoise-ink">
            <MessageCircleHeart className="h-4 w-4" aria-hidden />
            تماس
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            سفرت را شروع کن
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            برای همکاری، رزرو کارگاه یا حتی یک سؤال ساده؛ فرم را پر کنید تا در
            اولین فرصت پاسخ شما را بدهم.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <FadeIn className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-3xl border bg-card p-6 shadow-[0_8px_30px_rgb(23_63_60/0.05)]">
                <h3 className="text-base font-bold">ما را در شبکه‌ها دنبال کنید</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  لینک‌های رسمی دانای؛ محتوای آموزشی و خبرهای سفرها اینجا
                  منتشر می‌شوند.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-3">
                  {socials.map((social) => {
                    const isReady = Boolean(social.href);
                    return (
                      <li key={social.label}>
                        <a
                          href={isReady ? social.href : "#contact"}
                          aria-label={`${social.label} دانای`}
                          aria-disabled={!isReady}
                          className="flex items-center gap-2.5 rounded-2xl border bg-background px-3.5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-turquoise-bright/50 hover:shadow-sm"
                        >
                          <span
                            aria-hidden
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary"
                          >
                            <social.icon className="h-4 w-4 text-turquoise-deep" />
                          </span>
                          <span className="min-w-0">
                            {social.label}
                            {!isReady && (
                              <span className="block text-[10px] font-normal text-muted-foreground">
                                به‌زودی
                              </span>
                            )}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex-1 rounded-3xl bg-secondary p-6">
                <p className="leading-8 text-sm">
                  <span className="font-bold text-turquoise-ink">نکته:</span> راه
                  سریع ارتباط، همین فرم است؛ پیام شما مستقیم به خودم می‌رسد و
                  پاسخ از طریق ایمیل ارسال می‌شود.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border bg-card p-6 shadow-[0_16px_44px_rgb(23_63_60/0.08)] sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">نام و نام خانوادگی *</Label>
                  <Input
                    id="contact-name"
                    placeholder="مثلاً مریم احمدی"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">ایمیل *</Label>
                  <Input
                    id="contact-email"
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

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="contact-message">پیام شما *</Label>
                  <Textarea
                    id="contact-message"
                    rows={6}
                    placeholder="کمی از سفری که در ذهن دارید بنویسید؛ کارگاه برای معلمان، همکاری آموزشی یا هر ایده‌ی دیگر…"
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-full text-base sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    در حال ارسال…
                  </>
                ) : (
                  <>
                    ارسال پیام
                    <Send className="h-4 w-4 -scale-x-100" aria-hidden />
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
