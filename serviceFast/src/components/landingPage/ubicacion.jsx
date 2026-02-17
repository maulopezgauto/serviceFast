import React from 'react'
import DeliveryMap from '../DeliveryMap'

const Ubicacion = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
                
        <div className="
            relative z-10 flex min-h-screen items-center
            md:bg-[url(/src/assets/serviceFast/delivery16.png)]
            md:bg-no-repeat
            md:bg-auto
            md:bg-right">
            <div className="w-full mx-1 px-4 sm:px-6 text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-black mb-4 sm:mb-6">
                    Delivery en 
                    <span className="text-blue-500"> Asunción</span>
                    <span className="text-red-500"> sin límites</span>
                </h1>
            <p className="text-sm sm:text-lg text-black max-w-2xl mb-6 sm:mb-10">
                Puedes contactarnos directamente al número telefónico o completando el formulario.
                Nuestro equipo se comunicará contigo a la brevedad.
            </p>

            <p className="text-base sm:text-lg font-semibold text-neutral-900">
                📞 +595 982 262 452 
            </p>

            <div className="gap-6 mt-6 sm:mt-8">
                <button
                href='/contactPage'
                className="
                    inline-block
                    bg-red-600 hover:bg-red-700
                    text-white font-semibold
                    px-6 py-2 sm:py-3 text-sm sm:text-base
                    rounded-lg
                    shadow-lg shadow-red-600/30
                    transition-all
                    "
                >
                Contactanos
                </button>
            </div>
            </div>
        </div>
        

        <section className="w-full py-12 sm:py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                    Cobertura de Delivery
                    </h2>

                    <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                    Operamos en Asunción y Gran Asunción con entregas rápidas y seguras.
                    </p>

                    <DeliveryMap />

                </div>
        </section>
    </div>
    
  )
}

export default Ubicacion