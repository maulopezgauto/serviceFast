import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import landingPageData from '../../assets/landingPageInfo.js'

function OpinionCards() {
  return (
    <section className="relative py-16 sm:py-32 overflow-hidden">

      {/* Background base */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0b0b0b] to-black" />

      {/* Glow lights */}
      <div className="absolute -top-40 left-1/4 w-125 h-125 bg-red-600/15 blur-[180px] rounded-full" />
      <div className="absolute top-1/3 -right-40 w-125 h-125 bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-50 left-1/3 w-200 h-200 bg-white/5 blur-[200px] rounded-full" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[36px_36px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Experiencias reales usando ServiFast
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-visible">
          <Swiper  
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            grabCursor={true}
          >
            {landingPageData.testimonialsData.map(customer => (
              <SwiperSlide key={customer.id} className='pt-4 sm:pt-8'>
                
                {/* CARD */}
                <div
                  className="
                    w-full mx-auto
                    bg-linear-to-br from-[#0f0f0f] via-[#121212] to-[#0a0a0a]
                    border border-white/10
                    rounded-2xl
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-3
                    hover:border-red-500/30
                    hover:shadow-[0_0_60px_rgba(255,0,0,0.12)]
                    relative
                    overflow-hidden
                  "
                >

                  {/* Card glow line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-red-500/40 to-transparent" />

                  {/* Header */}
                  <div className="h-16 sm:h-20 bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-t-2xl"/>

                  {/* Content */}
                  <div className="px-4 sm:px-6 py-4 sm:py-6 overflow-visible">

                    {/* Avatar */}
                    <div className="flex justify-center -mt-10 sm:-mt-14 mb-3">
                      <img
                        className="w-20 sm:w-24 h-20 sm:h-24 rounded-full border-4 border-black object-cover shadow-lg"
                        src={customer.imagen}
                        alt={customer.name}
                      />
                    </div>

                    {/* Name */}
                    <div className="text-center mb-2">
                      <h2 className="text-base sm:text-lg font-bold text-white">{customer.name}</h2>
                      <p className="text-xs sm:text-sm text-gray-400">{customer.role}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-3 sm:mb-4 text-red-500 text-sm sm:text-base">
                      ★ ★ ★ ★ ★
                    </div>

                    {/* Comment */}
                    <p className="text-gray-300 text-center text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
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
