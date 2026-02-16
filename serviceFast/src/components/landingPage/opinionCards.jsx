import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import landingPageData from '../../assets/landingPageInfo.js'

function OpinionCards() {
  return (
    <section className="bg-black py-30 ">
      <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-400 mt-3">
              Experiencias reales usando ServiFast
            </p>
          </div>

      {/* Grid */}
      
     <div className="max-w-7xl mx-auto px-6 overflow-visible">
          <Swiper  
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        grabCursor={true}
      >
        {landingPageData.testimonialsData.map(customer => (
          <SwiperSlide key={customer.id} className='pt-8'>
            
            {/* CARD */}
            <div
              className="
                w-full mx-auto
                bg-linear-to-br from-[#0f0f0f] to-[#151515]
                border border-white/10
                rounded-2xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-blue-500/30
                hover:shadow-[0_0_40px_rgba(0,0,0,0.6)]
              "
            >

              {/* Header */}
              <div className="h-20 bg-white rounded-t-2xl"/>

              {/* Content */}
              <div className="px-6 py-5 overflow-visible">

                {/* Avatar */}
                <div className="flex justify-center -mt-14 mb-3">
                  <img
                    className="w-24 h-24 rounded-full border-4 border-black object-cover shadow-lg"
                    src={customer.imagen}
                    alt={customer.name}
                  />
                </div>

                {/* Name */}
                <div className="text-center mb-2">
                  <h2 className="text-lg font-bold text-white">{customer.name}</h2>
                  <p className="text-sm text-gray-400">{customer.role}</p>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-3 text-red-500">
                  ★ ★ ★ ★ ★
                </div>

                {/* Comment */}
                <p className="text-gray-300 text-center text-sm leading-relaxed mb-5">
                  {customer.comment}
                </p>

                {/* Footer */}
                <div className="flex justify-center">
                  <span className="text-xs text-gray-500">
                    Pedido realizado hace 2 días
                  </span>
                </div>

              </div>
            </div>

    </SwiperSlide>
  ))}
          </Swiper>
      </div>
        
    </div>
  </section>


  )
}

export default OpinionCards;
