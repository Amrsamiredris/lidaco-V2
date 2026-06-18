import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  const tHero = await getTranslations("Hero");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-lidaco-green bg-grain overflow-hidden py-16">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          
          {/* Left Text Column */}
          <div className="text-center lg:text-left flex flex-col justify-center space-y-6 lg:space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full border border-lidaco-gold/30 bg-lidaco-gold/10 text-xs font-bold tracking-[0.25em] text-lidaco-gold uppercase">
                {tHero("label")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-lidaco-cream leading-[1.15]">
              {tHero("title")}
            </h1>

            <p className="text-base sm:text-lg text-lidaco-cream/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              {tHero("description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link href={`/${locale}/products`} className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 bg-lidaco-gold hover:bg-lidaco-gold/90 text-lidaco-green rounded-xl font-bold tracking-wider transition-all duration-300 shadow-xl shadow-lidaco-gold/10 hover:shadow-lidaco-gold/20 hover:-translate-y-0.5">
                  {tHero("ctaPrimary")}
                </button>
              </Link>
              <Link href={`/${locale}/catalog`} className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 border-2 border-lidaco-cream/40 hover:border-lidaco-cream bg-transparent text-lidaco-cream rounded-xl font-bold tracking-wider transition-all duration-300 hover:bg-lidaco-cream/5 hover:-translate-y-0.5">
                  {tHero("ctaSecondary")}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden border border-lidaco-gold/20 shadow-2xl hover:border-lidaco-gold/40 transition-all duration-500 group">
              {/* Overlay inside image to make it fit with dark theme */}
              <div className="absolute inset-0 bg-lidaco-green/10 z-10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent" />
              <Image
                src="/images/mazafati_dates.png"
                alt="Dark Mazafati Dates"
                fill
                priority
                sizes="(max-w-7xl) 50vw, 500px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Features Showcase */}
      <section className="bg-lidaco-green py-24 px-6 text-lidaco-cream">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-lidaco-cream">
              Our Signature Categories
            </h2>
            <div className="h-1 w-20 bg-lidaco-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-lidaco-green/50 border border-lidaco-gold/20 p-8 rounded-2xl space-y-4 hover:border-lidaco-gold/50 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-lidaco-gold/10 flex items-center justify-center border border-lidaco-gold/30 text-lidaco-gold group-hover:bg-lidaco-gold group-hover:text-lidaco-green transition-all duration-300">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-lidaco-gold">
                {t("features.dates.title")}
              </h3>
              <p className="text-sm text-lidaco-cream/80 leading-relaxed font-medium">
                {t("features.dates.description")}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-lidaco-green/50 border border-lidaco-gold/20 p-8 rounded-2xl space-y-4 hover:border-lidaco-gold/50 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-lidaco-gold/10 flex items-center justify-center border border-lidaco-gold/30 text-lidaco-gold group-hover:bg-lidaco-gold group-hover:text-lidaco-green transition-all duration-300">
                🌿
              </div>
              <h3 className="text-xl font-bold text-lidaco-gold">
                {t("features.organic.title")}
              </h3>
              <p className="text-sm text-lidaco-cream/80 leading-relaxed font-medium">
                {t("features.organic.description")}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-lidaco-green/50 border border-lidaco-gold/20 p-8 rounded-2xl space-y-4 hover:border-lidaco-gold/50 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-lidaco-gold/10 flex items-center justify-center border border-lidaco-gold/30 text-lidaco-gold group-hover:bg-lidaco-gold group-hover:text-lidaco-green transition-all duration-300">
                🎁
              </div>
              <h3 className="text-xl font-bold text-lidaco-gold">
                {t("features.gifting.title")}
              </h3>
              <p className="text-sm text-lidaco-cream/80 leading-relaxed font-medium">
                {t("features.gifting.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="border-t border-lidaco-gold/10 py-12 px-6 bg-lidaco-cream text-center text-xs font-semibold tracking-widest text-lidaco-green/60">
        <p>© {new Date().getFullYear()} LIDACO. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
