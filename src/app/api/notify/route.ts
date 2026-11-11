import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { sendEmailViaWeb3Forms } from "@/lib/email";

const schema = z.object({
  email: z.email().max(200),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "ایمیل معتبر نیست" },
        { status: 400 },
      );
    }

    const email = parsed.data.email.trim().toLowerCase();

    // ۱) اگر کلید Web3Forms تنظیم شده باشد، درخواست به ایمیل مالک سایت می‌رود
    const emailed = await sendEmailViaWeb3Forms({
      subject: "خبرم کن — سفر دانش‌آموزان دانای",
      replyTo: email,
      fields: {
        email,
        message: `درخواست خبر از شروع سفر دانش‌آموزان: ${email}`,
      },
    });

    // ۲) در غیر این صورت (یا در صورت شکست ایمیل) در دیتابیس ثبت می‌شود
    if (!emailed) {
      await db.notifySignup.upsert({
        where: { email },
        update: {},
        create: { email },
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "ثبت ایمیل با مشکل مواجه شد" },
      { status: 500 },
    );
  }
}
