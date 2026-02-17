import React from 'react'
import ContactForm from './components/contactForm'
import delivery16 from './assets/serviceFast/delivery16.png'
import asuncion from './assets/backgrounds/Asuncion.jpg'

const ContactPage = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-32 overflow-hidden bg-black">

      {/* Background gradients */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-neutral-900 to-black" />

      {/* Glows */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-red-600/20 blur-[160px] rounded-full" />
      <div className="absolute top-1/2 -right-40 w-125 h-125 bg-blue-600/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-50 left-1/3 w-200 h-200 bg-white/5 blur-[180px] rounded-full" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
            Logística urbana<br />
            para un delivery moderno
          </h2>

          <p className="mt-6 text-gray-300 max-w-lg leading-relaxed">
            Conectamos negocios y clientes con entregas rápidas, seguras y eficientes en toda la zona metropolitana.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-gray-400">Cobertura</p>
              <p className="text-lg font-semibold">Metropolitana</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-gray-400">Tiempo</p>
              <p className="text-lg font-semibold">Entrega rápida</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-gray-400">Servicio</p>
              <p className="text-lg font-semibold">Profesional</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-gray-400">Soporte</p>
              <p className="text-lg font-semibold">Directo</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex justify-center">
          <ContactForm />
        </div>

      </div>
    </section>
  )
}

export default ContactPage