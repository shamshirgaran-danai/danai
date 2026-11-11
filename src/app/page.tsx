import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { JourneyMap } from "@/components/site/journey-map";
import { TeachersJourney } from "@/components/site/teachers-journey";
import { StudentsJourney } from "@/components/site/students-journey";
import { About } from "@/components/site/about";
import { SmartBackpack } from "@/components/site/smart-backpack";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://danai.ir";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "دکتر سیده فاطمه شمشیرگران",
      alternateName: [
        "سیده فاطمه شمشیرگران",
        "Seyedeh Fatemeh Shamshirgaran",
        "Fatemeh Shamshirgaran",
      ],
      jobTitle: "متخصص یادگیری و توسعه",
      url: siteUrl,
      sameAs: [
        "https://www.linkedin.com/in/fatemeh-shamshirgaran-ph-d-94080710b",
      ],
      worksFor: {
        "@type": "EducationalOrganization",
        name: "کانون هم‌آفرینی دانای",
      },
      knowsAbout: [
        "یادگیری و توسعه",
        "توسعه حرفه‌ای معلمان",
        "هوش مصنوعی در آموزش",
        "مهارت‌های یادگیری",
        "کوله‌پشتی هوشمند",
        "هم‌آفرینی و هم‌افزایی آموزشی",
      ],
      memberOf: [
        "انجمن ملی هوش مصنوعی",
        "اتحادیه کشوری آموزگاران",
        "ISTE",
      ],
    },
    {
      "@type": "EducationalOrganization",
      name: "کانون هم‌آفرینی دانای",
      alternateName: ["دانای", "Danai"],
      slogan: "با دانای در سفر یادگیری؛ از اندیشه‌ورزی تا خرد عملی",
      url: siteUrl,
      description:
        "دانایی «دان» در عصر هوش مصنوعی «آی»؛ فضایی برای هم‌افزایی و هم‌آفرینی معلمان و دانش‌آموزان تا سفر یادگیری را به تجربه‌ای تازه و امیدبخش تبدیل کنیم. کارگاه‌های توانمندسازی در قالب شش سفر یادگیری و ملزومات سفر.",
      inLanguage: "fa-IR",
      founder: {
        "@type": "Person",
        name: "دکتر سیده فاطمه شمشیرگران",
        jobTitle: "متخصص یادگیری و توسعه",
      },
    },
    {
      "@type": "WebSite",
      name: "کانون هم‌آفرینی دانای",
      alternateName: "دانای",
      url: siteUrl,
      inLanguage: "fa-IR",
    },
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <JourneyMap />
        <TeachersJourney />
        <StudentsJourney />
        <About />
        <SmartBackpack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
