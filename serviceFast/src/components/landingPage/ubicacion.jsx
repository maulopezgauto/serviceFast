import React from 'react'
import paraguayMap from '../../assets/backgrounds/paraguayMap.jpg'
import delivery13 from '../../assets/serviceFast/delivery13.jpg'
import DeliveryMap from '../DeliveryMap'

const Ubicacion = () => {
  return (
     <div className="bg-white bg-no-repeat min-h-screen" style={{backgroundImage: `url(${delivery13})`, backgroundPositionX: 1000, backgroundPositionY: 150, backgroundSize: 700}}>      
                <div className="relative z-10 flex min-h-screen items-center">
                    <div className="w-full mx-1 px-6 text-left">
                        <h1 className=" text-6xl font-extrabold text-black mb-6">
                            Delivery en 
                            <span className="text-blue-500"> Asunción</span>
                            <span className="text-red-500"> sin límites</span>
                        </h1>
                    <p className="text-xl text-black max-w-2xl mb-10">
                        Podés contactarnos directamente al número telefónico o completando el formulario.
                        Nuestro equipo se comunicará contigo a la brevedad.
                    </p>

                    <p className="text-lg font-semibold text-neutral-900">
                        📞 +595 982 262 452 
                    </p>
    
                    <div className=" gap-6 mt-8">
                        <a
                        href='/ContactPage'
                        className="
                            bg-red-600 hover:bg-red-700
                            text-white font-semibold
                            px-6 py-3 rounded-lg
                            shadow-lg shadow-red-600/30
                            transition-all
                            "
                        >
                        Contactanos
                        </a>
                    </div>
                    </div>
                </div>
                
          

          <section className="w-full py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-6">
                    
                    <h2 className="text-4xl font-bold mb-4">
                    Cobertura de Delivery
                    </h2>

                    <p className="text-gray-400 mb-8">
                    Operamos en Asunción y Gran Asunción con entregas rápidas y seguras.
                    </p>

                    <DeliveryMap />

                </div>
            </section>
        </div>
  )
}

export default Ubicacion