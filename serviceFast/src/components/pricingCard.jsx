function PricingCard({ origin, prices, openZone, setOpenZone }) {
  const isOpen = openZone === origin

  return (
    <div
      className="
        group
        bg-linear-to-br from-[#0f0f0f] to-[#151515]
        border border-white/10
        rounded-2xl
        overflow-hidden
        hover:border-red-500/30
        hover:shadow-[0_0_40px_rgba(0,0,0,0.6)]
        transition
      "
    >
      {/* HEADER */}
      <div className="p-6 flex justify-between items-center">
        <h3 className="text-white text-lg font-semibold tracking-wide">
          {origin}
        </h3>

        <button
          onClick={() => setOpenZone(isOpen ? null : origin)}
          className="
            text-sm font-semibold
            text-red-500
            flex items-center gap-2
            hover:text-red-400
            transition
          "
        >
          {isOpen ? "Ocultar tarifas" : "Ver tarifas"}
          <span className={`transform transition ${isOpen ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>
      </div>

      {/* CONTENIDO EXPANDIDO */}
      <div
        className={`
          transition-all duration-500 overflow-hidden
          ${isOpen ? "max-h-185 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-6 grid grid-cols-1 gap-3">
          {Object.entries(prices).map(([dest, price]) => (
            <div
              key={dest}
              className="flex justify-between text-sm text-gray-300 border-b border-white/5 pb-2"
            >
              <span>{dest}</span>
              <span className="text-white font-semibold">
                Gs. {price.toLocaleString("es-PY")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingCard
