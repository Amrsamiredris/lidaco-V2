import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

export default async function ExportPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations("Export");

  return (
    <main className="min-h-screen bg-lidaco-cream text-lidaco-green py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl text-center md:text-left">
          <span className="text-xs font-bold tracking-[0.25em] text-lidaco-gold uppercase">
            Global Trade Operations
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lidaco-green">
            {t("title")}
          </h1>
          <p className="text-lg text-lidaco-brown/85 font-semibold leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Timeline Process Section */}
        <div className="relative border-l border-lidaco-gold/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 max-w-4xl py-2">
          
          {/* Step 1 */}
          <div className="relative group">
            {/* Timeline bullet */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-lidaco-cream border-2 border-lidaco-gold flex items-center justify-center text-[10px] font-bold text-lidaco-green group-hover:bg-lidaco-gold transition-colors duration-300">
              1
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold text-lidaco-green tracking-tight uppercase">
                {t("step1Title")}
              </h2>
              <p className="text-sm sm:text-base text-lidaco-brown/80 font-medium leading-relaxed max-w-2xl">
                {t("step1Desc")}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            {/* Timeline bullet */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-lidaco-cream border-2 border-lidaco-gold flex items-center justify-center text-[10px] font-bold text-lidaco-green group-hover:bg-lidaco-gold transition-colors duration-300">
              2
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold text-lidaco-green tracking-tight uppercase">
                {t("step2Title")}
              </h2>
              <p className="text-sm sm:text-base text-lidaco-brown/80 font-medium leading-relaxed max-w-2xl">
                {t("step2Desc")}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            {/* Timeline bullet */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-lidaco-cream border-2 border-lidaco-gold flex items-center justify-center text-[10px] font-bold text-lidaco-green group-hover:bg-lidaco-gold transition-colors duration-300">
              3
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold text-lidaco-green tracking-tight uppercase">
                {t("step3Title")}
              </h2>
              <p className="text-sm sm:text-base text-lidaco-brown/80 font-medium leading-relaxed max-w-2xl">
                {t("step3Desc")}
              </p>
            </div>
          </div>

        </div>

        {/* Global Markets Value Proposition Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-lidaco-green text-lidaco-cream rounded-3xl p-8 lg:p-12 border border-lidaco-gold/15">
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight text-lidaco-cream">
              High-volume B2B supplies to China, Middle East & Europe
            </h3>
            <p className="text-sm text-lidaco-cream/80 font-medium leading-relaxed">
              Lidaco is equipped to handle complex logistics agreements including custom declarations, container temperature tracking, phytosanitary clearance, and flexible B2B financing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center md:justify-end gap-4">
            <Link href={`/${locale}/contact`}>
              <button className="w-full sm:w-auto px-8 py-4 bg-lidaco-gold hover:bg-lidaco-gold/90 text-lidaco-green text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-xl shadow-lidaco-gold/10 hover:-translate-y-0.5">
                Start B2B Contract
              </button>
            </Link>
            <Link href={`/${locale}/catalog`}>
              <button className="w-full sm:w-auto px-8 py-4 border border-lidaco-cream/40 hover:border-lidaco-cream bg-transparent text-lidaco-cream text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 hover:bg-lidaco-cream/5 hover:-translate-y-0.5">
                Product Catalog
              </button>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
