import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { sendEmailViaWeb3Forms } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.email().max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "داده‌های ورودی معتبر نیستند" },
        { status: 400 },
      );
    }

    const name = parsed.data.name.trim();
    const email = parsed.data.email.trim().toLowerCase();
    const message = parsed.data.message.trim();

    // ۱) اگر کلید Web3Forms تنظیم شده باشد، پیام مستقیم به ایمیل مالک سایت می‌رود
    const emailed = await sendEmailViaWeb3Forms({
      subject: `پیام جدید از سایت دانای — ${name}`,
      replyTo: email,
      fields: { name, email, message },
    });

    // ۲) در غیر این صورت (یا در صورت شکست ایمیل) پیام در دیتابیس ذخیره می‌شود
    if (!emailed) {
      await db.contactMessage.create({
        data: { name, email, message },
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "ارسال پیام با مشکل مواجه شد" },
      { status: 500 },
    );
  }
}
