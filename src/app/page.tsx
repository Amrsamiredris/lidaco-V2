"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { routing, Locale } from "@/i18n/routing";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect language from browser
    const browserLang = navigator.language.split("-")[0] as Locale;
    const locale = routing.locales.includes(browserLang)
      ? browserLang
      : routing.defaultLocale;

    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
