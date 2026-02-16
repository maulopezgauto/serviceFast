import React from 'react'

export const ContactForm = () => {
  return (
    <div className="relative flex justify-center items-center py-24 px-6 bg-neutral-100">

    {/* Card */}
    <div className="
        w-full max-w-3xl
        bg-white
        rounded-2xl
        shadow-xl
        border border-neutral-200
        px-10 py-12
    ">

        {/* Header */}
        <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-neutral-900">
            Contáctanos
        </h2>
        <p className="mt-3 text-neutral-500 text-sm">
            Estamos listos para ayudarte con tus pedidos y entregas
        </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {[ 
            { label: "Nombre", type: "text" },
            { label: "Apellido", type: "text" },
            { label: "Empresa", type: "text", span: true },
            { label: "Correo electrónico", type: "email", span: true },
            { label: "Teléfono", type: "text", span: true },
        ].map((field, i) => (
            <div key={i} className={field.span ? "md:col-span-2" : ""}>
            <label className="text-sm font-medium text-neutral-700">
                {field.label}
            </label>
            <input
                type={field.type}
                className="
                mt-2 w-full
                rounded-lg
                border border-neutral-300
                px-4 py-3
                text-neutral-900
                outline-none
                focus:ring-2 focus:ring-red-500
                focus:border-red-500
                transition
                "
            />
            </div>
        ))}

        {/* Message */}
        <div className="md:col-span-2">
            <label className="text-sm font-medium text-neutral-700">
            Mensaje
            </label>
            <textarea
            rows={4}
            className="
                mt-2 w-full
                rounded-lg
                border border-neutral-300
                px-4 py-3
                text-neutral-900
                outline-none
                focus:ring-2 focus:ring-red-500
                focus:border-red-500
                transition
                resize-none
            "
            />
        </div>

        {/* Button */}
        <div className="md:col-span-2 flex justify-center mt-8">
            <button
            type="submit"
            className="
                px-12 py-3
                rounded-xl
                font-semibold
                text-white
                bg-red-600
                hover:bg-red-700
                shadow-lg
                hover:shadow-xl
                transition-all
            "
            >
            Enviar mensaje
            </button>
        </div>
        </form>

    </div>
</div>


  )
}

export default ContactForm;