import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // نسخه استاتیک برای انتشار رایگان روی GitHub Pages
  output: "export",
  // آدرس موقت سایت: shamshirgaran-danai.github.io/danai
  // بعد از وصل کردن دامنه danai.ir فقط همین خط را حذف کنید.
  basePath: "/danai",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
