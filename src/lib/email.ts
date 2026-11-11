/**
 * ارسال ایمیلی پیام‌های سایت از طریق سرویس رایگان Web3Forms (web3forms.com)
 *
 * اگر متغیر محیطی WEB3FORMS_ACCESS_KEY تنظیم شده باشد، پیام فرم تماس و
 * درخواست‌های «خبرم کن» به‌صورت ایمیل برای مالک سایت ارسال می‌شوند.
 * اگر تنظیم نشده باشد، ارسال ایمیل غیرفعال است و پیام‌ها در دیتابیس
 * SQLite ذخیره می‌شوند (مثلاً روی هاست ابری با دیسک دائمی).
 *
 * هر دو مسیر برای بازدیدکننده یکسان است و در صورت شکست ایمیل،
 * پیام برای جلوگیری از گم‌شدن در دیتابیس ذخیره می‌شود.
 */
export async function sendEmailViaWeb3Forms(input: {
  subject: string;
  replyTo?: string;
  fields: Record<string, string>;
}): Promise<boolean> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: input.subject,
        from_name: "کانون هم‌آفرینی دانای",
        replyto: input.replyTo,
        ...input.fields,
      }),
      // اگر سرویس ایمیل بیش از ۱۰ ثانیه پاسخ نداد، به مسیر دیتابیس برمی‌گردیم
      signal: AbortSignal.timeout(10_000),
    });

    const data = (await response.json().catch(() => null)) as {
      success?: boolean;
    } | null;

    return Boolean(response.ok && data?.success);
  } catch {
    return false;
  }
}
