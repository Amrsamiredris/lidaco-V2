"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mount delay of 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/989123456789"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-16 opacity-0 scale-50 pointer-events-none"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.46 3.473 1.334 4.978L2 22l5.233-1.373a9.92 9.92 0 004.779 1.229h.004c5.505 0 9.986-4.482 9.986-9.988C22 6.482 17.518 2 12.012 2zm6.012 14.542c-.247.694-1.22 1.268-1.685 1.34-.465.072-1.077.129-3.21-.708-2.73-1.07-4.482-3.844-4.618-4.024-.136-.18-1.107-1.472-1.107-2.812 0-1.34.702-1.999.953-2.261.25-.262.551-.328.735-.328.184 0 .368.002.53.01.171.008.4-.065.626.478.227.542.775 1.888.842 2.023.067.135.11.293.02.473-.09.18-.135.293-.27.45l-.41.488c-.136.16-.279.333-.12.607.159.274.707 1.17 1.517 1.892.81 0 1.258.91 1.637.765l.983-.497c.378-.145.753.07.954.205.2.136 1.33.626 1.558.74.227.113.378.171.434.27.056.1.056.574-.191 1.268z" />
      </svg>
    </a>
  );
}
