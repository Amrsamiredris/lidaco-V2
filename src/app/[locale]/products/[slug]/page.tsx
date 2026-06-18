import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

interface ProductDetailProps {
  params: {
    locale: string;
    slug: string;
  };
}

const productSlugs = [
  "mazafati-bam-dates",
  "piarom-dates",
  "kabkab-dates",
  "rabi-dates",
  "akbari-pistachio",
  "ahmad-aghaei-pistachio",
  "fandoghi-pistachio",
  "kalleh-ghouchi-pistachio",
] as const;

type ProductSlug = (typeof productSlugs)[number];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    productSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export default async function ProductDetailPage({
  params: { locale, slug },
}: ProductDetailProps) {
  setRequestLocale(locale);
  // Validate that the slug is supported
  if (!productSlugs.includes(slug as ProductSlug)) {
    notFound();
  }

  const t = await getTranslations("Products");

  const name = t(`items.${slug}.name`);
  const origin = t(`items.${slug}.origin`);
  const description = t(`items.${slug}.description`);

  // Retrieve nested keys safely using t.raw
  const details = t.raw(`items.${slug}.details`) as Record<string, string>;

  // Mapping details fields to localized labels
  const detailsFieldLabels: Record<string, string> = {
    moisture: t("moistureLabel"),
    skin: t("skinLabel"),
    packing: t("packingLabel"),
    size: t("sizeLabel"),
    grade: t("gradeLabel"),
    texture: t("textureLabel"),
  };

  const getProductImage = () => {
    let src = "/images/mazafati_dates.png";
    if (slug === "piarom-dates") src = "/images/piarom_dates.png";
    else if (slug === "kabkab-dates") src = "/images/kabkab_dates.png";
    else if (slug === "rabi-dates") src = "/images/rabi_dates.png";
    else if (slug === "akbari-pistachio") src = "/images/akbari_pistachios.png";
    else if (slug === "ahmad-aghaei-pistachio") src = "/images/ahmad_aghaei_pistachios.png";
    else if (slug === "fandoghi-pistachio") src = "/images/fandoghi_pistachios.png";
    else if (slug === "kalleh-ghouchi-pistachio") src = "/images/kalleh_ghouchi_pistachios.png";

    return (
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-lidaco-gold/25 shadow-2xl">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          priority
          sizes="(max-w-7xl) 50vw, 500px"
        />
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-lidaco-cream text-lidaco-green py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 text-lidaco-green/60">
          <Link href={`/${locale}/products`} className="hover:text-lidaco-gold transition-colors duration-300">
            {t("backToList")}
          </Link>
          <span>/</span>
          <span className="text-lidaco-gold">{name}</span>
        </nav>

        {/* Desktop Split Layout: left info & specs, right image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
          
          {/* Left Column: Info & Specs Table (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-lidaco-gold/15 text-[10px] font-bold tracking-wider text-lidaco-gold uppercase border border-lidaco-gold/20">
                📍 {t("originLabel")}: {origin}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lidaco-green leading-none">
                {name}
              </h1>
              <p className="text-base sm:text-lg text-lidaco-brown/85 font-medium leading-relaxed pt-2">
                {description}
              </p>
            </div>

            {/* Specifications Table */}
            <div className="space-y-4 pt-4">
              <h2 className="text-lg font-extrabold tracking-wider uppercase border-b border-lidaco-gold/20 pb-2 text-lidaco-gold">
                {t("specsLabel")}
              </h2>
              <div className="border border-lidaco-gold/20 rounded-2xl overflow-hidden bg-lidaco-cream/50">
                <dl className="divide-y divide-lidaco-gold/15">
                  {Object.entries(details).map(([key, value]) => {
                    const label = detailsFieldLabels[key] || key;
                    return (
                      <div key={key} className="grid grid-cols-1 sm:grid-cols-3 px-6 py-4 gap-2">
                        <dt className="text-xs font-extrabold uppercase tracking-wider text-lidaco-green/60 sm:col-span-1">
                          {label}
                        </dt>
                        <dd className="text-sm font-semibold text-lidaco-green sm:col-span-2">
                          {value}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>

            {/* CTA action block */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}#contact`} className="flex-1 max-w-sm">
                <button className="w-full py-4 bg-lidaco-green hover:bg-lidaco-green/90 text-lidaco-cream text-sm font-bold tracking-wider uppercase rounded-xl transition-all duration-300 shadow-xl shadow-lidaco-green/10 hover:shadow-lidaco-green/20 hover:-translate-y-0.5">
                  {t("requestQuote")}
                </button>
              </Link>
              <Link href={`/${locale}/products`} className="flex-1 max-w-sm">
                <button className="w-full py-4 border-2 border-lidaco-green/45 hover:border-lidaco-green text-lidaco-green bg-transparent text-sm font-bold tracking-wider uppercase rounded-xl transition-all duration-300 hover:bg-lidaco-green/5">
                  {t("backToList")}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Image (5 cols on desktop) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[450px]">
              {getProductImage()}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
