import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

export default async function CatalogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations("Catalog");

  return (
    <main className="min-h-screen bg-lidaco-cream text-lidaco-green py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        
        {/* Content Header Stack */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] text-lidaco-gold uppercase">
            Lidaco Document Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lidaco-green leading-none">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-lidaco-brown/85 font-medium leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Action Button Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Download Button (Gold Fill) */}
          <a
            href="/catalog.pdf"
            download="Lidaco_Product_Catalog.pdf"
            className="w-full sm:w-auto flex-grow"
          >
            <button className="w-full px-8 py-4 bg-lidaco-gold hover:bg-lidaco-gold/90 text-lidaco-green rounded-xl font-bold tracking-wider uppercase text-xs transition-all duration-300 shadow-xl shadow-lidaco-gold/10 hover:-translate-y-0.5">
              {t("downloadButton")}
            </button>
          </a>

          {/* Request Custom Quote (Outline Cream/Brown) */}
          <Link href={`/${locale}/contact`} className="w-full sm:w-auto flex-grow">
            <button className="w-full px-8 py-4 border-2 border-lidaco-green/45 hover:border-lidaco-green bg-transparent text-lidaco-green rounded-xl font-bold tracking-wider uppercase text-xs transition-all duration-300 hover:bg-lidaco-green/5 hover:-translate-y-0.5">
              {t("requestQuote")}
            </button>
          </Link>
        </div>

        {/* Inline PDF Viewer (Iframe) */}
        <div className="w-full border border-lidaco-gold/20 rounded-3xl overflow-hidden shadow-2xl bg-lidaco-green/5">
          <iframe
            src="/catalog.pdf"
            title="Lidaco Product Catalog Preview"
            className="w-full h-[600px] md:h-[800px] border-0"
          />
        </div>

      </div>
    </main>
  );
}
