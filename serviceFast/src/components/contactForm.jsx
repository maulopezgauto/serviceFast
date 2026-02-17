import { useState } from "react";
import emailjs from "emailjs-com";
import asuncion from '../assets/backgrounds/Asuncion.jpg'

function ContactForm() {

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  // Captura inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Enviar Email
  const sendEmail = (data) => {
    emailjs.send(
      SERVICE_ID,     // ← de EmailJS
      TEMPLATE_ID,    // ← de EmailJS
      {
        nombre: data.nombre,
        apellido: data.apellido,
        empresa: data.empresa,
        email: data.email,
        telefono: data.telefono,
        mensaje: data.mensaje,
      },
      PUBLIC_KEY      // ← de EmailJS
    );
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail(formData);

    // limpiar form
    setFormData({
      nombre: "",
      apellido: "",
      empresa: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <div className="relative flex justify-center items-center py-8 sm:py-24 px-4 sm:px-6 overflow-hidden w-full">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-neutral-200 px-6 sm:px-10 py-8 sm:py-12">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Contáctanos</h2>
          <p className="mt-2 sm:mt-3 text-neutral-500 text-xs sm:text-sm">
            Estamos listos para ayudarte con tus pedidos y entregas
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

          <div>
            <label className="text-xs sm:text-sm font-medium text-neutral-700">Nombre</label>
            <input name="nombre" value={formData.nombre} onChange={handleChange} className="mt-1 sm:mt-2 w-full rounded-lg border px-3 sm:px-4 py-2 sm:py-3 text-sm"/>
          </div>

          <div>
            <label className="text-xs sm:text-sm font-medium text-neutral-700">Apellido</label>
            <input name="apellido" value={formData.apellido} onChange={handleChange} className="mt-1 sm:mt-2 w-full rounded-lg border px-3 sm:px-4 py-2 sm:py-3 text-sm"/>
          </div>

          <div className="md:col-span-2">
            <label className="text-xs sm:text-sm font-medium text-neutral-700">Empresa</label>
            <input name="empresa" value={formData.empresa} onChange={handleChange} className="mt-1 sm:mt-2 w-full rounded-lg border px-3 sm:px-4 py-2 sm:py-3 text-sm"/>
          </div>

          <div className="md:col-span-2">
            <label className="text-xs sm:text-sm font-medium text-neutral-700">Correo electrónico</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} className="mt-1 sm:mt-2 w-full rounded-lg border px-3 sm:px-4 py-2 sm:py-3 text-sm"/>
          </div>

          <div className="md:col-span-2">
            <label className="text-xs sm:text-sm font-medium text-neutral-700">Teléfono</label>
            <input name="telefono" value={formData.telefono} onChange={handleChange} className="mt-1 sm:mt-2 w-full rounded-lg border px-3 sm:px-4 py-2 sm:py-3 text-sm"/>
          </div>

          <div className="md:col-span-2">
            <label className="text-xs sm:text-sm font-medium text-neutral-700">Mensaje</label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} className="mt-1 sm:mt-2 w-full rounded-lg border px-3 sm:px-4 py-2 sm:py-3 text-sm"/>
          </div>

          <div className="md:col-span-2 flex justify-center mt-4 sm:mt-8">
            <button type="submit" className="px-8 sm:px-12 py-2 sm:py-3 rounded-xl font-semibold text-white text-sm sm:text-base bg-red-600 hover:bg-red-700 transition-all">
              Enviar mensaje
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;