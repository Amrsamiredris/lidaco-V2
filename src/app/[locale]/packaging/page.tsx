import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

export default async function PackagingPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations("Packaging");

  return (
    <main className="min-h-screen bg-lidaco-cream text-lidaco-green py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl text-center md:text-left">
          <span className="text-xs font-bold tracking-[0.25em] text-lidaco-gold uppercase">
            Quality Assurance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lidaco-green">
            {t("title")}
          </h1>
          <p className="text-lg text-lidaco-brown/85 font-semibold leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Packaging Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Retail Packaging */}
          <div className="bg-lidaco-cream border border-lidaco-gold/25 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-lidaco-gold/50 transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-lidaco-green/5 flex items-center justify-center border border-lidaco-gold/15 text-lidaco-gold text-2xl font-bold">
                📦
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-lidaco-green uppercase">
                {t("retailTitle")}
              </h2>
              <p className="text-sm text-lidaco-brown/80 font-medium leading-relaxed">
                {t("retailDesc")}
              </p>
            </div>
            <div className="pt-4 border-t border-lidaco-gold/10 text-[11px] font-bold text-lidaco-green/60 tracking-widest uppercase">
              Capacities: 600g | 800g | 1kg
            </div>
          </div>

          {/* Vacuum Packaging */}
          <div className="bg-lidaco-cream border border-lidaco-gold/25 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-lidaco-gold/50 transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-lidaco-green/5 flex items-center justify-center border border-lidaco-gold/15 text-lidaco-gold text-2xl font-bold">
                💨
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-lidaco-green uppercase">
                {t("vacuumTitle")}
              </h2>
              <p className="text-sm text-lidaco-brown/80 font-medium leading-relaxed">
                {t("vacuumDesc")}
              </p>
            </div>
            <div className="pt-4 border-t border-lidaco-gold/10 text-[11px] font-bold text-lidaco-green/60 tracking-widest uppercase">
              Moisture: 15% – 25% | Freshness Lock
            </div>
          </div>

          {/* Bulk Packaging */}
          <div className="bg-lidaco-cream border border-lidaco-gold/25 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-lidaco-gold/50 transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-lidaco-green/5 flex items-center justify-center border border-lidaco-gold/15 text-lidaco-gold text-2xl font-bold">
                🚛
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-lidaco-green uppercase">
                {t("bulkTitle")}
              </h2>
              <p className="text-sm text-lidaco-brown/80 font-medium leading-relaxed">
                {t("bulkDesc")}
              </p>
            </div>
            <div className="pt-4 border-t border-lidaco-gold/10 text-[11px] font-bold text-lidaco-green/60 tracking-widest uppercase">
              Sizes: 5kg | 10kg | 25kg | 50kg
            </div>
          </div>

        </div>

        {/* Call to Action Section */}
        <div className="bg-lidaco-green text-lidaco-cream rounded-3xl p-8 lg:p-12 border border-lidaco-gold/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-extrabold tracking-tight text-lidaco-cream">
              Need custom export packaging or branding?
            </h3>
            <p className="text-sm text-lidaco-cream/80 font-medium leading-relaxed">
              We customize inner labels, carton branding, weight specs, and vacuum parameters for large volume distributors.
            </p>
          </div>
          <Link href={`/${locale}/contact`}>
            <button className="px-8 py-4 bg-lidaco-gold hover:bg-lidaco-gold/90 text-lidaco-green text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-xl shadow-lidaco-gold/10 hover:-translate-y-0.5">
              Discuss Packaging Specs
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}
