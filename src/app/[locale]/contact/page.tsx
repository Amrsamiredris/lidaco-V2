"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  company: string;
  country: string;
  email: string;
  whatsapp: string;
  quantity: string;
  message: string;
  productInterest: string[];
}

export default function ContactPage() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    country: "",
    email: "",
    whatsapp: "",
    quantity: "",
    message: "",
    productInterest: [],
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const productOptions = [
    { key: "mazafati", label: "Mazafati Dates" },
    { key: "piarom", label: "Piarom Dates" },
    { key: "kabkab", label: "Kabkab Dates" },
    { key: "rabi", label: "Rabi Dates" },
    { key: "akbari", label: "Akbari Pistachios" },
    { key: "ahmad-aghaei", label: "Ahmad Aghaei Pistachios" },
    { key: "fandoghi", label: "Fandoghi Pistachios" },
  ];

  const handleCheckboxChange = (label: string) => {
    setFormData((prev) => {
      const exists = prev.productInterest.includes(label);
      return {
        ...prev,
        productInterest: exists
          ? prev.productInterest.filter((p) => p !== label)
          : [...prev.productInterest, label],
      };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/p/3074010494827232445/f/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company || "N/A",
          country: formData.country,
          email: formData.email,
          whatsapp: formData.whatsapp,
          quantity_kg: formData.quantity,
          products: formData.productInterest.join(", ") || "General Inquiry",
          message: formData.message,
          submitted_at: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json();
        setErrorMessage(data?.error || t("errorMsg"));
        setStatus("error");
      }
    } catch {
      setErrorMessage(t("errorMsg"));
      setStatus("error");
    }
  };

  const getWhatsAppLink = () => {
    const phone = "989123456789";
    const text = `Hello Lidaco Export Team,\n\nI just submitted an inquiry on your website:\n- Name: ${formData.name}\n- Company: ${formData.company || "N/A"}\n- Country: ${formData.country}\n- Products: ${formData.productInterest.join(", ") || "General Inquiry"}\n- Quantity: ${formData.quantity} kg\n- Email: ${formData.email}\n- Message: ${formData.message}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      country: "",
      email: "",
      whatsapp: "",
      quantity: "",
      message: "",
      productInterest: [],
    });
    setStatus("idle");
  };

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
            <div className="bg-lidaco-cream border border-lidaco-gold/25 rounded-3xl p-8 space-y-6 shadow-sm">
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
            <div className="bg-lidaco-green text-lidaco-cream rounded-3xl p-8 border border-lidaco-gold/15 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-lidaco-gold/10 flex items-center justify-center text-lidaco-gold border border-lidaco-gold/20 text-lg">
                📍
              </div>
              <p className="text-sm font-bold tracking-wide leading-relaxed">
                {t("mapLabel")}
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form / Success State (8 cols) */}
          <div className="lg:col-span-8 bg-lidaco-cream border border-lidaco-gold/25 rounded-3xl p-8 lg:p-10 shadow-sm transition-all duration-300">
            {status === "success" ? (
              <div className="space-y-8 text-center py-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-lidaco-green/10 border-2 border-lidaco-gold text-lidaco-gold flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>

                <div className="space-y-3 max-w-lg mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-lidaco-green tracking-tight">
                    {t("successTitle")}
                  </h2>
                  <p className="text-sm sm:text-base text-lidaco-brown/85 font-medium leading-relaxed">
                    {t("successDesc")}
                  </p>
                </div>

                {/* Summary Box */}
                <div className="p-6 rounded-2xl bg-lidaco-green/5 border border-lidaco-gold/20 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between font-bold text-lidaco-green border-b border-lidaco-gold/15 pb-2">
                    <span>Contact: {formData.name}</span>
                    <span>{formData.country}</span>
                  </div>
                  <div className="text-lidaco-brown/90">
                    <span className="font-bold text-lidaco-green">Products:</span>{" "}
                    {formData.productInterest.join(", ") || "All Catalog"}
                  </div>
                  <div className="text-lidaco-brown/90">
                    <span className="font-bold text-lidaco-green">Quantity:</span> {formData.quantity} kg
                  </div>
                </div>

                {/* Action Buttons: WhatsApp Forwarding + Reset */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1"
                  >
                    <button className="w-full py-4 px-6 bg-lidaco-gold hover:bg-lidaco-gold/90 text-lidaco-green text-xs font-bold tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg shadow-lidaco-gold/10 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                      <span>💬</span>
                      <span>{t("whatsappCta")}</span>
                    </button>
                  </a>
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto flex-1 py-4 px-6 border-2 border-lidaco-green/40 hover:border-lidaco-green text-lidaco-green bg-transparent text-xs font-bold tracking-wider uppercase rounded-xl transition-all duration-300 hover:bg-lidaco-green/5"
                  >
                    {t("submitAnother")}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                    ⚠️ {errorMessage || t("errorMsg")}
                  </div>
                )}

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
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.company}
                      onChange={handleChange}
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
                      value={formData.country}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.whatsapp}
                      onChange={handleChange}
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
                      value={formData.quantity}
                      onChange={handleChange}
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
                          checked={formData.productInterest.includes(option.label)}
                          onChange={() => handleCheckboxChange(option.label)}
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
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-transparent border border-lidaco-gold/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lidaco-green transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-lidaco-green hover:bg-lidaco-green/90 text-lidaco-cream text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-xl shadow-lidaco-green/10 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-lidaco-cream" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>{t("submitting")}</span>
                      </>
                    ) : (
                      <span>{t("fields.submit")}</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
