import React from 'react'
import ContactForm from './components/contactForm'
import delivery16 from './assets/serviceFast/delivery16.png'

const ContactPage = () => {
  return (
    <section className="relative py-28 px-6 bg-neutral-100 overflow-hidden">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT - Visual */}
            <div className="relative flex justify-center">

            {/* Glow */}
            

            {/* Image container */}
            <div className="relative z-10">
                <img 
                src={delivery16}
                alt="Delivery"
                className="w-105 object-contain drop-shadow-2xl"
                />
            </div>

            </div>

            {/* RIGHT - Form */}
            <div className="flex justify-center">
            <ContactForm /> 
            </div>

        </div>

    </section>

  )
}
export default ContactPage