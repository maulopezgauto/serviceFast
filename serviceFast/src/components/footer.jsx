import React from "react";
import { useState, useEffect } from "react";
import serviveFastLogo from '../assets/serviceFast/serviceFastLogo.jpg'
import socialLinks from '../assets/logo/index.js'

function Footer() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(media.matches);

    const listener = e => setIsDark(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black border-t border-black/10 dark:border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-28">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">

          {/* Marca */}
          <div>
            <img 
              src={serviveFastLogo}
              className="w-32 sm:w-40 mb-4"
            />

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Servicio de delivery urbano rápido y seguro.  
              Operamos en zona metropolitana.
            </p>

            <p className="mt-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
              📞 0982 262 452
            </p>

            {/* Social */}
            <div className="flex gap-2 sm:gap-3 mt-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="
                    w-8 sm:w-9 h-8 sm:h-9
                    flex items-center justify-center
                    rounded-full
                    bg-gray-900
                    text-white
                    opacity-70
                    hover:opacity-100
                    hover:bg-gray-800
                    transition
                  "
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-4 sm:w-5 h-4 sm:h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white tracking-wide">
              Navegación
            </h3>

            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/pricingPage" className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition">
                  Tarifas
                </a>
              </li>
              <li>
                <a href="/contactPage" className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white tracking-wide">
              Contacto
            </h3>

            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <p>📍 Asunción, Paraguay</p>
              <p>📞 0982 262 452</p>
            </div>

            <a
              href="/contactPage"
              className="
                inline-block mt-4 sm:mt-6
                px-4 sm:px-6 py-2 sm:py-2.5
                bg-red-600
                text-white
                rounded-lg
                text-xs sm:text-sm font-semibold
                hover:bg-red-700
                transition
                shadow-lg
              "
            >
              Solicitar servicio
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 pt-6 border-t border-black/10 dark:border-white/10 text-center text-xs text-gray-500">
          © 2025 ServiceFast. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
