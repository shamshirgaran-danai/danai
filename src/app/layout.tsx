import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const vazirmatn = localFont({
  src: [
    { path: "./fonts/Vazirmatn-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Vazirmatn-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Vazirmatn-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Vazirmatn-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://danai.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "کانون هم‌آفرینی دانای | دکتر سیده فاطمه شمشیرگران — متخصص یادگیری و توسعه",
    template: "%s | کانون هم‌آفرینی دانای",
  },
  description:
    "کانون هم‌آفرینی دانای به سرپرستی دکتر سیده فاطمه شمشیرگران، متخصص یادگیری و توسعه. دانایی «دان» در عصر هوش مصنوعی «آی»؛ فضایی برای هم‌افزایی و هم‌آفرینی معلمان و دانش‌آموزان؛ کارگاه‌های توانمندسازی در قالب شش سفر یادگیری، کوله‌پشتی هوشمند و سفر دانش‌آموزان به‌زودی.",
  keywords: [
    "کانون هم‌آفرینی دانای",
    "هم‌آفرینی دانای",
    "دانای",
    "متخصص یادگیری و توسعه",
    "آموزش معلمان",
    "کارگاه توانمندسازی معلمان",
    "کوله‌پشتی هوشمند",
    "هوش مصنوعی در آموزش",
    "دکتر سیده فاطمه شمشیرگران",
    "سیده فاطمه شمشیرگران",
    "شمشیرگران",
    "مهارت‌های یادگیری",
  ],
  authors: [{ name: "دکتر سیده فاطمه شمشیرگران" }],
  creator: "کانون هم‌آفرینی دانای",
  openGraph: {
    title:
      "کانون هم‌آفرینی دانای | دکتر سیده فاطمه شمشیرگران — متخصص یادگیری و توسعه",
    description:
      "دانایی «دان» در عصر هوش مصنوعی «آی»؛ فضایی برای هم‌افزایی و هم‌آفرینی معلمان و دانش‌آموزان. کارگاه‌های توانمندسازی در قالب شش سفر یادگیری، کوله‌پشتی هوشمند و سفر دانش‌آموزان به‌زودی.",
    url: siteUrl,
    siteName: "کانون هم‌آفرینی دانای",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "کانون هم‌آفرینی دانای | با دانای در سفر یادگیری",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "کانون هم‌آفرینی دانای | دکتر سیده فاطمه شمشیرگران — متخصص یادگیری و توسعه",
    description:
      "دانایی «دان» در عصر هوش مصنوعی «آی»؛ فضایی برای هم‌افزایی و هم‌آفرینی معلمان و دانش‌آموزان.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#178277",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
