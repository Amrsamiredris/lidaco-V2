import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ProductsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations("Products");

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

  // Render a high-end product image for each date or pistachio product
  const getProductPlaceholder = (slug: string, name: string) => {
    let src = "/images/mazafati_dates.png";
    if (slug === "piarom-dates") src = "/images/piarom_dates.png";
    else if (slug === "kabkab-dates") src = "/images/kabkab_dates.png";
    else if (slug === "rabi-dates") src = "/images/rabi_dates.png";
    else if (slug === "akbari-pistachio") src = "/images/akbari_pistachios.png";
    else if (slug === "ahmad-aghaei-pistachio") src = "/images/ahmad_aghaei_pistachios.png";
    else if (slug === "fandoghi-pistachio") src = "/images/fandoghi_pistachios.png";
    else if (slug === "kalleh-ghouchi-pistachio") src = "/images/kalleh_ghouchi_pistachios.png";

    return (
      <div className="relative w-full h-64 bg-lidaco-green/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-w-7xl) 50vw, 500px"
        />
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-lidaco-cream text-lidaco-green py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Minimalist clean header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-bold tracking-[0.2em] text-lidaco-gold uppercase">
            LIDACO EXPORT CATALOG
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lidaco-green">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-lidaco-brown/85 font-medium leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Product Cards Grid: 2 columns desktop, 1 mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productSlugs.map((slug) => {
            const name = t(`items.${slug}.name`);
            const origin = t(`items.${slug}.origin`);
            const description = t(`items.${slug}.description`);
            // Retrieve specs array typed correctly
            const specs: string[] = t.raw(`items.${slug}.specs`);

            return (
              <div
                key={slug}
                className="bg-lidaco-cream border border-lidaco-gold/25 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-lidaco-gold/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Visual Box */}
                  <Link href={`/${locale}/products/${slug}`}>
                    <div className="overflow-hidden border-b border-lidaco-gold/15 cursor-pointer">
                      {getProductPlaceholder(slug, name)}
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <Link href={`/${locale}/products/${slug}`}>
                        <h2 className="text-2xl font-extrabold text-lidaco-green tracking-tight hover:text-lidaco-gold transition-colors duration-300 cursor-pointer">
                          {name}
                        </h2>
                      </Link>
                      <span className="inline-block shrink-0 px-3 py-1 rounded-full bg-lidaco-green/10 text-[10px] font-bold tracking-wider text-lidaco-green uppercase">
                        📍 {origin}
                      </span>
                    </div>

                    <p className="text-sm text-lidaco-brown/80 font-medium leading-relaxed line-clamp-2">
                      {description}
                    </p>

                    {/* 3 Key Specs */}
                    <div className="pt-2">
                      <ul className="grid grid-cols-3 gap-2 text-[11px] font-bold text-lidaco-green/90 tracking-wider">
                        {specs.slice(0, 3).map((spec, index) => (
                          <li
                            key={index}
                            className="bg-lidaco-green/5 py-2 px-3 rounded-xl text-center border border-lidaco-gold/10"
                          >
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-8 pt-0 flex gap-4">
                  <Link href={`/${locale}/products/${slug}`} className="flex-1">
                    <button className="w-full py-3 border border-lidaco-green/45 hover:border-lidaco-green text-lidaco-green bg-transparent hover:bg-lidaco-green/5 text-xs font-bold tracking-wider uppercase rounded-xl transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                  <Link href={`/${locale}#contact`} className="flex-1">
                    <button className="w-full py-3 bg-lidaco-green hover:bg-lidaco-green/90 text-lidaco-cream text-xs font-bold tracking-wider uppercase rounded-xl transition-all duration-300">
                      {t("requestQuote")}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
