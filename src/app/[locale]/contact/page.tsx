import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("Contact");

  const productOptions = [
    { key: "mazafati", label: "Mazafati Dates" },
    { key: "piarom", label: "Piarom Dates" },
    { key: "kabkab", label: "Kabkab Dates" },
    { key: "rabi", label: "Rabi Dates" },
    { key: "akbari", label: "Akbari Pistachios" },
    { key: "ahmad-aghaei", label: "Ahmad Aghaei Pistachios" },
    { key: "fandoghi", label: "Fandoghi Pistachios" },
  ];

  return (
    <main className="min-h-screen bg-lidaco-cream text-lidaco-green py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Stack */}
        <div className="space-y-4 max-w-3xl text-center lg:text-left">
          <span className="text-xs font-bold tracking-[0.25em] text-lidaco-gold uppercase">
            Global Trade Inquiry
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lidaco-green leading-none">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-lidaco-brown/85 font-medium leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-lidaco-cream border border-lidaco-gold/25 rounded-3xl p-8 space-y-6">
              <h2 className="text-lg font-bold tracking-wider uppercase border-b border-lidaco-gold/20 pb-3">
                {t("directContact")}
              </h2>

              {/* Email Block */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-lidaco-green/60">
                  {t("emailLabel")}
                </span>
                <a
                  href="mailto:export@lidaco.com"
                  className="block text-lg font-bold text-lidaco-gold hover:underline transition-all duration-300"
                >
                  export@lidaco.com
                </a>
              </div>

              {/* WhatsApp Block */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-lidaco-green/60">
                  {t("whatsappLabel")}
                </span>
                <a
                  href="https://wa.me/989123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-bold text-lidaco-green hover:text-lidaco-gold transition-colors duration-300"
                >
                  +98 912 345 6789
                </a>
              </div>
            </div>

            {/* Sourcing location badge */}
            <div className="bg-lidaco-green text-lidaco-cream rounded-3xl p-8 border border-lidaco-gold/15 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-lidaco-gold/10 flex items-center justify-center text-lidaco-gold border border-lidaco-gold/20 text-lg">
                📍
              </div>
              <p className="text-sm font-bold tracking-wide leading-relaxed">
                {t("mapLabel")}
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form (8 cols) */}
          <div className="lg:col-span-8 bg-lidaco-cream border border-lidaco-gold/25 rounded-3xl p-8 lg:p-10">
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-lidaco-green/85">
                    {t("fields.name")} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="bg-transparent border border-lidaco-gold/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lidaco-green transition-colors duration-300"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-lidaco-green/85">
                    {t("fields.company")}
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="bg-transparent border border-lidaco-gold/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lidaco-green transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Country */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="country" className="text-xs font-bold uppercase tracking-wider text-lidaco-green/85">
                    {t("fields.country")} *
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    className="bg-transparent border border-lidaco-gold/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lidaco-green transition-colors duration-300"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-lidaco-green/85">
                    {t("fields.email")} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="bg-transparent border border-lidaco-gold/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lidaco-green transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WhatsApp */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="whatsapp" className="text-xs font-bold uppercase tracking-wider text-lidaco-green/85">
                    {t("fields.whatsapp")} *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    id="whatsapp"
                    required
                    placeholder="+98 912 345 6789"
                    className="bg-transparent border border-lidaco-gold/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lidaco-green transition-colors duration-300"
                  />
                </div>

                {/* Quantity */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="quantity" className="text-xs font-bold uppercase tracking-wider text-lidaco-green/85">
                    {t("fields.quantity")} *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="1"
                    required
                    className="bg-transparent border border-lidaco-gold/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lidaco-green transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Product Interest (Multi-select via Checkboxes) */}
              <div className="flex flex-col space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-lidaco-green/85">
                  {t("fields.interest")} *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-lidaco-green/5 p-5 rounded-2xl border border-lidaco-gold/15">
                  {productOptions.map((option) => (
                    <label key={option.key} className="flex items-center gap-3 text-sm font-semibold cursor-pointer group">
                      <input
                        type="checkbox"
                        name="productInterest"
                        value={option.label}
                        className="w-4 h-4 rounded text-lidaco-green focus:ring-lidaco-gold border-lidaco-gold/40 cursor-pointer accent-lidaco-green"
                      />
                      <span className="text-lidaco-green/80 group-hover:text-lidaco-green transition-colors duration-300">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-lidaco-green/85">
                  {t("fields.message")} *
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="bg-transparent border border-lidaco-gold/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lidaco-green transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-lidaco-green hover:bg-lidaco-green/90 text-lidaco-cream text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-xl shadow-lidaco-green/10 hover:-translate-y-0.5"
                >
                  {t("fields.submit")}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
