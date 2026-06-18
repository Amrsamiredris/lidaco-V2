"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

interface NavLink {
  key: string;
  path: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const t = useTranslations("Navbar");

  const navLinks: NavLink[] = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "products", path: "/products" },
    { key: "packaging", path: "/packaging" },
    { key: "export", path: "/export" },
    { key: "catalog", path: "/catalog" },
    { key: "contact", path: "/contact" },
  ];

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Split the pathname to replace the locale
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
    setIsOpen(false); // Close mobile menu if open
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === `/${currentLocale}` || pathname === `/`;
    }
    return pathname === `/${currentLocale}${path}` || pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-lidaco-cream text-lidaco-green transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-20">
        {/* Lidaco Logo Left */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push(`/${currentLocale}`)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-9 h-9 text-lidaco-gold fill-current transition-transform duration-500 hover:rotate-12"
          >
            <path d="M50 10 C50 10 75 40 75 60 C75 75 60 90 50 90 C40 90 25 75 25 60 C25 40 50 10 50 10 Z" />
            <path d="M50 25 C50 25 65 48 65 62 C65 72 58 80 50 80 C42 80 35 72 35 62 C35 48 50 25 50 25 Z" className="text-lidaco-green fill-current" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.25em] leading-none">
              LIDACO
            </span>
            <span className="text-[8px] uppercase tracking-[0.35em] text-lidaco-gold mt-1 font-semibold">
              Premium Dates
            </span>
          </div>
        </div>

        {/* Desktop Nav Links Center */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold tracking-[0.15em] uppercase">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <a
                key={link.key}
                href={`/${currentLocale}${link.path === "/" ? "" : link.path}`}
                className={`relative py-1 transition-colors duration-300 hover:text-lidaco-gold ${
                  active ? "text-lidaco-green" : "text-lidaco-green/70"
                }`}
              >
                {t(link.key)}
                {/* Active underline */}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-[2px] bg-lidaco-gold transition-all duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop Language Switcher Right */}
        <div className="hidden lg:flex items-center text-xs font-bold tracking-widest">
          <button
            onClick={() => switchLocale("en")}
            className={`transition-colors duration-300 hover:text-lidaco-gold ${
              currentLocale === "en" ? "text-lidaco-green font-extrabold" : "text-lidaco-green/50"
            }`}
          >
            EN
          </button>
          <span className="mx-2 text-lidaco-gold/40">|</span>
          <button
            onClick={() => switchLocale("zh")}
            className={`transition-colors duration-300 hover:text-lidaco-gold ${
              currentLocale === "zh" ? "text-lidaco-green font-extrabold" : "text-lidaco-green/50"
            }`}
          >
            中文
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-lidaco-green focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-[2px] bg-current rounded-full transition-transform duration-300 origin-left ${
                isOpen ? "rotate-45 translate-x-1 translate-y-[2px]" : ""
              }`}
            />
            <span
              className={`w-full h-[2px] bg-current rounded-full transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-[2px] bg-current rounded-full transition-transform duration-300 origin-left ${
                isOpen ? "-rotate-45 translate-x-1 -translate-y-[2px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Slide-down Drawer */}
      <div
        className={`lg:hidden w-full bg-lidaco-cream absolute left-0 right-0 top-20 z-40 transition-all duration-300 ease-in-out border-b border-lidaco-gold/5 ${
          isOpen ? "max-h-screen opacity-100 py-8 px-6" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <a
                key={link.key}
                href={`/${currentLocale}${link.path === "/" ? "" : link.path}`}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-bold tracking-[0.2em] uppercase py-2 inline-block transition-colors duration-300 ${
                  active ? "text-lidaco-gold" : "text-lidaco-green/80 hover:text-lidaco-gold"
                }`}
              >
                {t(link.key)}
              </a>
            );
          })}

          <div className="h-[1px] bg-lidaco-gold/15 w-1/4 mx-auto my-4" />

          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-center text-sm font-bold tracking-widest">
            <button
              onClick={() => switchLocale("en")}
              className={`px-4 py-2 transition-colors duration-300 ${
                currentLocale === "en" ? "text-lidaco-green font-extrabold" : "text-lidaco-green/50"
              }`}
            >
              EN
            </button>
            <span className="text-lidaco-gold/40">|</span>
            <button
              onClick={() => switchLocale("zh")}
              className={`px-4 py-2 transition-colors duration-300 ${
                currentLocale === "zh" ? "text-lidaco-green font-extrabold" : "text-lidaco-green/50"
              }`}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
