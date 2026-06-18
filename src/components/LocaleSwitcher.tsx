"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // pathname is like "/en/about" or "/en" or "/zh"
    const segments = pathname.split("/");
    // The first segment after '/' is segments[1], which corresponds to the locale
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="inline-flex rounded-full bg-lidaco-green/10 p-1 border border-lidaco-gold/20 backdrop-blur-sm">
      <button
        onClick={() => switchLocale("en")}
        className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
          currentLocale === "en"
            ? "bg-lidaco-green text-lidaco-cream shadow-md scale-105"
            : "text-lidaco-green/70 hover:text-lidaco-green hover:bg-lidaco-green/5"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("zh")}
        className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
          currentLocale === "zh"
            ? "bg-lidaco-green text-lidaco-cream shadow-md scale-105"
            : "text-lidaco-green/70 hover:text-lidaco-green hover:bg-lidaco-green/5"
        }`}
      >
        中文
      </button>
    </div>
  );
}
