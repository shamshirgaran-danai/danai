/**
 * ارسال مستقیم فرم‌های سایت از مرورگر بازدیدکننده به سرویس رایگان Web3Forms
 * (نسخه استاتیک — بدون نیاز به سرور)
 *
 * کلید دسترسی را از web3forms.com (رایگان، فقط با ایمیل) بگیرید و
 * مقدار زیر را با همان کلید جایگزین کنید. تا آن موقع، فرم‌ها پیام
 * «مشکلی پیش آمد» نشان می‌دهند.
 *
 * نکته امنیتی: کلید دسترسی Web3Forms ذاتاً «عمومی» است و در نسخه
 * استاتیک در کد دیده می‌شود؛ این طبیعی است. فقط پیام‌ها به ایمیل
 * خود شما می‌روند و می‌توانید در پنل Web3Forms محدودیت دامنه فعال کنید.
 */
export const WEB3FORMS_ACCESS_KEY = "PLACEHOLDER_WEB3FORMS_ACCESS_KEY";

export async function submitToWeb3Forms(input: {
  subject: string;
  replyTo?: string;
  fields: Record<string, string>;
}): Promise<boolean> {
  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith("PLACEHOLDER")) {
    return false;
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: input.subject,
        from_name: "کانون هم‌آفرینی دانای",
        replyto: input.replyTo,
        ...input.fields,
      }),
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
