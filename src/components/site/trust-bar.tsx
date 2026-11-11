import { BrainCircuit, Globe2, Mic, School } from "lucide-react";
import { FadeIn } from "./fade-in";

const badges = [
  { icon: BrainCircuit, label: "عضو انجمن ملی هوش مصنوعی" },
  { icon: School, label: "عضو اتحادیه کشوری آموزگاران" },
  { icon: Globe2, label: "عضو همفکری ISTE" },
  { icon: Mic, label: "سخنران بین‌المللی" },
];

export function TrustBar() {
  return (
    <section aria-label="نشان‌های اعتماد" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <ul className="grid grid-cols-1 gap-3 rounded-3xl border bg-card p-4 shadow-[0_16px_44px_rgb(23_63_60/0.08)] sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
            {badges.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center justify-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary"
              >
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary"
                >
                  <badge.icon className="h-5 w-5 text-turquoise-deep" />
                </span>
                <span className="text-sm font-semibold leading-6">{badge.label}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
