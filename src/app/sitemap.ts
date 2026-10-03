import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://lidaco.shop";

const pages = ["", "about", "products", "packaging", "export", "catalog", "contact"];

const productSlugs = [
  "mazafati-bam-dates",
  "piarom-dates",
  "kabkab-dates",
  "rabi-dates",
  "akbari-pistachio",
  "ahmad-aghaei-pistachio",
  "fandoghi-pistachio",
  "kalleh-ghouchi-pistachio",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...pages, ...productSlugs.map((slug) => `products/${slug}`)];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${BASE_URL}/${locale}/${path ? `${path}/` : ""}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${BASE_URL}/${l}/${path ? `${path}/` : ""}`])
        ),
      },
    }))
  );
}
