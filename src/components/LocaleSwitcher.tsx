"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { routing, localeDetails, Locale } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentDetails = localeDetails[currentLocale] || localeDetails.en;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lidaco-green/5 hover:bg-lidaco-green/10 border border-lidaco-gold/30 text-xs font-bold tracking-wider text-lidaco-green transition-all duration-300 shadow-sm"
      >
        <span className="text-sm">{currentDetails.flag}</span>
        <span className="uppercase">{currentDetails.nativeName}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-3.5 h-3.5 text-lidaco-gold transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-48 rounded-2xl bg-lidaco-cream border border-lidaco-gold/25 shadow-2xl py-2 z-50 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-lidaco-gold border-b border-lidaco-gold/15 mb-1">
            Select Language
          </div>
          <div className="max-h-64 overflow-y-auto space-y-0.5 px-1">
            {routing.locales.map((loc) => {
              const details = localeDetails[loc];
              const isSelected = loc === currentLocale;
              return (
                <button
                  key={loc}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => switchLocale(loc)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                    isSelected
                      ? "bg-lidaco-green text-lidaco-cream font-bold shadow-sm"
                      : "text-lidaco-green hover:bg-lidaco-green/10"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm">{details.flag}</span>
                    <span>{details.nativeName}</span>
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider ${isSelected ? "text-lidaco-gold" : "text-lidaco-green/50"}`}>
                    {loc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
