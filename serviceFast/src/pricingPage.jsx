import landingPageData from "./assets/landingPageInfo"
import Asuncion from "./assets/backgrounds/Asuncion.jpg"
import PricingCard from "./components/pricingCard.jsx"
import { useState } from "react"

function PricingPage() {
  const [openZone, setOpenZone] = useState(null)

  return (
    <section 
      className="relative py-16 sm:py-28 px-4 sm:px-6 bg-black overflow-hidden min-h-screen"
      style={{
        background: `url(${Asuncion})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="absolute inset-0 flex justify-center">
        <div className="w-175 h-175 bg-red-600/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tarifas de Envío
          </h2>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Precios por zona metropolitana
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
          {Object.entries(landingPageData.pricingMatrix).map(([origin, data]) => (
            <PricingCard
              key={origin}
              origin={origin}
              prices={data.prices}
              openZone={openZone}
              setOpenZone={setOpenZone}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
                                             
export default PricingPage;
