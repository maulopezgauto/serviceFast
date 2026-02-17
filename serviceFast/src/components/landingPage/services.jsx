import React from 'react'
import { useState } from 'react'
import landingPageData from '../../assets/landingPageInfo.js'

function Services() {

    const [openID, setOpenID] = useState(null)

  return (
    <div className="w-full">
    <section className="bg-[#0b0b0b] py-32 relative overflow-hidden">

    {/* Glow decorativo */}
    <div className="absolute -top-40 -left-40 w-125 h-125 bg-blue-600/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-red-600/10 rounded-full blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">

      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
        Nuestros <span className="text-blue-500">servicios</span>{" "}
        <span className="text-red-500">incluyen</span>
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
        Conectamos personas, comercios y envíos con rapidez, seguridad y cobertura total en Gran Asunción.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 items-start">
        {landingPageData.servicesData.slice(0, 3).map(service => {
            const isOpen = openID === service.id

        return (
            <div
                key={service.id}
                className="
                group
                bg-linear-to-br from-[#0f0f0f] to-[#151515]
                border border-white/10
                rounded-2xl
                overflow-hidden
                hover:border-blue-500/30
                hover:shadow-[0_0_40px_rgba(0,0,0,0.6)]
                "
            >
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden">
                <img
                    src={service.imagen}
                    className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full 
                                bg-blue-600/90 text-white font-semibold">
                    ServiceFast
                </div>
                </div>

                {/* Texto */}
                <div className="p-6">
                <h3 className="text-white text-xl font-semibold tracking-wide">
                    {service.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {service.description}
                </p>

                {/* CONTENIDO EXPANDIDO */}
                <div
                    className={`
                    transition-all duration-500 overflow-hidden
                    ${isOpen ? "max-h-125 opacity-100 mt-4" : "max-h-0 opacity-0"}
                    `}
                >
                    <p className="text-gray-300 text-sm leading-relaxed">
                    {service.fullDescription}
                    </p>

                    {/* Features */}
                    <ul className="mt-3 space-y-2">
                    {service.features?.map((f, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {f}
                        </li>
                    ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-5">
                    <button
                    onClick={() => setOpenID(isOpen ? null : service.id)}
                    className="
                        text-sm font-semibold
                        text-white
                        flex items-center gap-2
                        hover:text-blue-500
                        transition
                    "
                    >
                    {isOpen ? "Ver menos" : "Ver más"}
                    <span
                        className={`transform transition ${isOpen ? "rotate-180" : ""}`}
                    >
                        ↓
                    </span>
                    </button>
                </div>
                </div>
            </div>
        )
    })}
      </div>

    </div>
  </section>
</div>

  )
}

export default Services;
