import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("About");

  return (
    <main className="min-h-screen bg-lidaco-cream text-lidaco-green py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl text-center md:text-left">
          <span className="text-xs font-bold tracking-[0.25em] text-lidaco-gold uppercase">
            Lidaco Company Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lidaco-green">
            {t("title")}
          </h1>
          <p className="text-lg text-lidaco-brown/85 font-semibold leading-relaxed">
            {t("tagline")}
          </p>
        </div>

        {/* Section 1: Brand Story (Split layout with colored placeholder block) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-lidaco-green uppercase border-l-4 border-lidaco-gold pl-4">
              {t("storyTitle")}
            </h2>
            <p className="text-base sm:text-lg text-lidaco-brown/90 font-medium leading-relaxed">
              {t("storyContent")}
            </p>
          </div>

          {/* Sourcing Colored Placeholder Block */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] rounded-3xl bg-lidaco-green border border-lidaco-gold/20 shadow-2xl flex flex-col justify-end p-8 text-lidaco-cream overflow-hidden">
              {/* Abstract luxury backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(#C8A84B_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
              <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-lidaco-gold/10 rounded-full blur-2xl" />
              
              <div className="z-10 space-y-2 text-left">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-lidaco-gold">
                  Direct Sourcing
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-lidaco-cream">
                  Tehran HQ & Bam Facilities
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Three Value Pillars (Direct Sourcing | Export Standards | Long-Term Partnership) */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold tracking-wider uppercase text-lidaco-gold">
              {t("pillarsTitle")}
            </h2>
            <div className="h-0.5 w-16 bg-lidaco-gold/30 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Direct Sourcing */}
            <div className="border border-lidaco-gold/20 rounded-3xl p-8 space-y-4 hover:border-lidaco-gold/40 transition-colors duration-300">
              <span className="text-3xl block">🌾</span>
              <h3 className="text-xl font-extrabold tracking-tight text-lidaco-green">
                {t("pillars.sourcing.title")}
              </h3>
              <p className="text-sm text-lidaco-brown/85 font-medium leading-relaxed">
                {t("pillars.sourcing.description")}
              </p>
            </div>

            {/* Pillar 2: Export Standards */}
            <div className="border border-lidaco-gold/20 rounded-3xl p-8 space-y-4 hover:border-lidaco-gold/40 transition-colors duration-300">
              <span className="text-3xl block">📋</span>
              <h3 className="text-xl font-extrabold tracking-tight text-lidaco-green">
                {t("pillars.standards.title")}
              </h3>
              <p className="text-sm text-lidaco-brown/85 font-medium leading-relaxed">
                {t("pillars.standards.description")}
              </p>
            </div>

            {/* Pillar 3: Long-Term Partnership */}
            <div className="border border-lidaco-gold/20 rounded-3xl p-8 space-y-4 hover:border-lidaco-gold/40 transition-colors duration-300">
              <span className="text-3xl block">🤝</span>
              <h3 className="text-xl font-extrabold tracking-tight text-lidaco-green">
                {t("pillars.partnership.title")}
              </h3>
              <p className="text-sm text-lidaco-brown/85 font-medium leading-relaxed">
                {t("pillars.partnership.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Business Model */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold tracking-wider uppercase text-lidaco-gold">
              {t("modelTitle")}
            </h2>
            <div className="h-0.5 w-16 bg-lidaco-gold/30 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Model 1 */}
            <div className="bg-lidaco-green/5 border border-lidaco-gold/20 rounded-3xl p-8 space-y-3 hover:border-lidaco-gold/40 transition-colors duration-300">
              <span className="text-xs font-bold uppercase tracking-widest text-lidaco-gold">
                Operations A
              </span>
              <h3 className="text-lg font-extrabold text-lidaco-green tracking-tight">
                {t("models.ownExport.title")}
              </h3>
              <p className="text-sm text-lidaco-brown/85 font-medium leading-relaxed">
                {t("models.ownExport.description")}
              </p>
            </div>

            {/* Model 2 */}
            <div className="bg-lidaco-green/5 border border-lidaco-gold/20 rounded-3xl p-8 space-y-3 hover:border-lidaco-gold/40 transition-colors duration-300">
              <span className="text-xs font-bold uppercase tracking-widest text-lidaco-gold">
                Operations B
              </span>
              <h3 className="text-lg font-extrabold text-lidaco-green tracking-tight">
                {t("models.management.title")}
              </h3>
              <p className="text-sm text-lidaco-brown/85 font-medium leading-relaxed">
                {t("models.management.description")}
              </p>
            </div>

            {/* Model 3 */}
            <div className="bg-lidaco-green/5 border border-lidaco-gold/20 rounded-3xl p-8 space-y-3 hover:border-lidaco-gold/40 transition-colors duration-300">
              <span className="text-xs font-bold uppercase tracking-widest text-lidaco-gold">
                Global Network
              </span>
              <h3 className="text-lg font-extrabold text-lidaco-green tracking-tight">
                {t("models.b2bTrade.title")}
              </h3>
              <p className="text-sm text-lidaco-brown/85 font-medium leading-relaxed">
                {t("models.b2bTrade.description")}
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
