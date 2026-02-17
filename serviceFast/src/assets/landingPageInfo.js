import delivery1 from './serviceFast/delivery1.jpg'
import delivery2 from './serviceFast/delivery2.jpg'
import delivery3 from './serviceFast/delivery3.jpg'
import delivery5 from './serviceFast/delivery5.jpg'
import delivery6 from './serviceFast/deliveryProgramado.jpg'
import delivery20 from './serviceFast/delivery20.jpg'
import delivery17 from './serviceFast/delivery17.avif'
import noPfpM from './faces/noPfp.jpg'
import noPfpW from './faces/noPfpW.jpg'

export const heroData = {
  title: "ServiFast",
  subtitle: "Tu pedido, más rápido de lo que imaginas",
  description: "El servicio de delivery confiable para tus compras. Compra donde quieras y nosotros lo llevamos. Contáctanos por WhatsApp o formulario.",
  primaryCTA: "Solicitar delivery",
  secondaryCTA: "Contactar por WhatsApp",
};

export const servicesData = [
  {
    id: 1,
    title: "Envíos express",
    description: "Entregamos documentos, paquetes y productos de forma rápida y segura.",
    fullDescription: "Por tu parte, retira o prepara lo que necesites enviar. Luego contacta a ServiFast por WhatsApp o formulario con los detalles. Nosotros nos encargamos de recoger y entregar de forma segura, con seguimiento completo del envío y máxima confiabilidad.",
    icon: "📦",
    features: [
      "Solicita vía WhatsApp o formulario",
      "Recolección rápida",
      "Seguimiento del envío",
      "Entregas seguras y confiables"
    ],
    imagen: delivery17,
  },
  {
    id: 2,
    title: "Delivery programado",
    description: "Agenda tu entrega para el horario y fecha que prefieras.",
    fullDescription: "Tienes una compra que necesitas entregar en una fecha y hora específica. Contacta a ServiFast por WhatsApp o formulario indicando tus detalles. Nos encargamos de programar y ejecutar entregas puntuales según tu disponibilidad y necesidades.",
    icon: "🕒",
    features: [
      "Elige fecha y hora",
      "Contacta por WhatsApp o formulario",
      "Entrega puntual garantizada",
      "Flexibilidad en programación"
    ],
    imagen: delivery6,
  },
  {
    id:3, 
    title: "Rutas optimizadas",
    description: "Maximizamos la eficiencia de tus entregas con rutas inteligentes.",
    fullDescription: "¿Tienes múltiples entregas o rutas complejas? Contacta a ServiFast por WhatsApp o formulario con los detalles de tus pedidos. Utilizamos tecnología avanzada para optimizar rutas, reducir tiempos de entrega y garantizar que tus pedidos lleguen rápido y sin contratiempos.",
    icon: "🗺️",
    imagen: delivery20,
  },
];


export const categoriesData = [
  { id: 1, name: "Comida rápida", icon: "🍟" },
  { id: 2, name: "Restaurantes", icon: "🍽️" },
  { id: 3, name: "Supermercados", icon: "🏪" },
  { id: 4, name: "Farmacias", icon: "💊" },
  { id: 5, name: "Mensajería", icon: "📨" },
  { id: 6, name: "Tecnología", icon: "📱" },
];

export const benefitsData = [
  {
    id: 1,
    title: "Compra dónde quieras",
    description: "Eres libre de comprar en tu tienda, restaurante o negocio favorito.",
  },
  {
    id: 2,
    title: "Contacta por WhatsApp",
    description: "Solicita el delivery de forma rápida y sencilla por WhatsApp o formulario.",
  },
  {
    id: 3,
    title: "Entrega confiable",
    description: "Nosotros nos encargamos de llevar tu pedido en las mejores condiciones.",
  },
  {
    id: 4,
    title: "Soporte 24/7",
    description: "Atención al cliente siempre disponible para cualquier consulta.",
  },
];

export const statsData = [
  { id: 1, label: "Pedidos diarios", value: "1.200+" },
  { id: 2, label: "Repartidores activos", value: "350+" },
  { id: 3, label: "Comercios afiliados", value: "180+" },
  { id: 4, label: "Ciudades cubiertas", value: "12" },
];

export const partnersData = [
  { id: 1, name: "Burger House" },
  { id: 2, name: "Farmacia Central" },
  { id: 3, name: "Market Express" },
  { id: 4, name: "Pizza City" },
  { id: 5, name: "Tech Store" },
];

export const testimonialsData = [
  {
    id: 1,
    name: "Carlos Fernández",
    imagen: noPfpM,
    role: "Cliente",
    comment: "ServiFast me solucionó la vida, los pedidos llegan rápido y sin problemas.",
  },
  {
    id: 2,
    name: "María López",
    imagen: noPfpW,
    role: "Dueña de restaurante",
    comment: "Aumenté mis ventas desde que uso ServiFast. Muy fácil de usar.",
  },
  {
    id: 3,
    name: "Juan Martínez",
    imagen: noPfpM,
    role: "Repartidor",
    comment: "Plataforma clara, pagos seguros y buen flujo de pedidos.",
  },

  {
    id: 4,
    name: "Ana González",
    imagen: noPfpW,
    role: "Cliente frecuente",
    comment: "Excelente servicio, siempre puntuales y muy buena atención al cliente.",
  },
  {
    id: 5,
    name: "Ally Benitez",
    imagen: noPfpW,
    role: "Comerciante",
    comment: "ServiFast me ayudó a organizar mis envíos y mejorar la logística del negocio.",
  },
  {
    id: 6,
    name: "Luis Ramírez",
    imagen: noPfpM,
    role: "Repartidor",
    comment: "Buena organización, rutas claras y sistema de pedidos bien estructurado.",
  },
  {
    id: 7,
    name: "Sofía Duarte",
    imagen: noPfpW,
    role: "Cliente",
    comment: "La app es rápida, los pedidos llegan bien y el servicio es confiable.",
  },
  {
    id: 8,
    name: "Ariana Rojas",
    imagen: noPfpW,
    role: "Dueña de cafetería",
    comment: "Desde que trabajo con ServiFast tengo más pedidos y mejor gestión de entregas.",
  },
  {
    id: 9,
    name: "Abby Acosta",
    imagen: noPfpW,
    role: "Repartidor independiente",
    comment: "Sistema simple, pagos claros y buena cantidad de pedidos diarios.",
  },
];


export const ctaData = {
  title: "¿Tienes un pedido para entregar?",
  description: "Contacta a ServiFast por WhatsApp o formulario y nosotros nos encargamos de hacerlo llegar de forma rápida y segura.",
  primaryCTA: "Contactar por WhatsApp",
  secondaryCTA: "Llenar formulario",
};

export const companyData = {
  name: "ServiFast",
  slogan: "Entregas rápidas, vidas más simples",
  email: "contacto@servifast.com",
  phone: "+595 900 000 000",
  address: "Asunción, Paraguay",
};

export const footerLinks = [
  {
    title: "Empresa",
    links: ["Nosotros", "Servicios", "Contacto", "Soporte"],
  },
  {
    title: "Usuarios",
    links: ["Clientes", "Repartidores", "Comercios"],
  },
  {
    title: "Legal",
    links: ["Términos", "Privacidad", "Cookies"],
  },
];

export const pricingMatrix = {
  "Asunción": {
    base: true,
    prices: {
      "Asunción": 20000,
      "Lambaré": 25000,
      "Fdo. de la Mora": 25000,
      "San Lorenzo": 30000,
      "Villa Elisa": 25000,
      "Luque": 30000,
      "Loma Pyta y Zeballos": 25000,
      "Ñemby": 35000,
      "Mariano R. Alonso": 30000,
      "San Antonio": 35000,
      "Capiatá": 35000,
      "Limpio": 35000,
      "Areguá": 40000,
      "Ypané": 40000,
      "Ytororó": 40000,
      "Guarambaré": 50000,
      "Itauguá": 60000,
      "Villeta": 60000,
    }
  },

  "Fernando de la Mora": {
    prices: {
      "Asunción": 25000,
      "Lambaré": 25000,
      "Fdo. de la Mora": 20000,
      "San Lorenzo": 25000,
      "Villa Elisa": 25000,
      "Luque": 25000,
      "Loma Pyta y Zeballos": 25000,
      "Ñemby": 35000,
      "Mariano R. Alonso": 30000,
      "San Antonio": 35000,
      "Capiatá": 35000,
      "Limpio": 40000,
      "Areguá": 40000,
      "Ypané": 35000,
      "Ytororó": 35000,
      "Guarambaré": 50000,
      "Itauguá": 60000,
      "Villeta": 60000,
    }
  },

  "San Lorenzo": {
    prices: {
      "Asunción": 25000,
      "Lambaré": 30000,
      "Fdo. de la Mora": 25000,
      "San Lorenzo": 20000,
      "Villa Elisa": 30000,
      "Luque": 25000,
      "Loma Pyta y Zeballos": 25000,
      "Ñemby": 35000,
      "Mariano R. Alonso": 30000,
      "San Antonio": 40000,
      "Capiatá": 30000,
      "Limpio": 40000,
      "Areguá": 40000,
      "Ypané": 40000,
      "Ytororó": 40000,
      "Guarambaré": 50000,
      "Itauguá": 60000,
      "Villeta": 60000,
    }
  },

  "Mariano Roque Alonso": {
    prices: {
      "Asunción": 25000,
      "Lambaré": 30000,
      "Fdo. de la Mora": 25000,
      "San Lorenzo": 30000,
      "Villa Elisa": 30000,
      "Luque": 30000,
      "Loma Pyta y Zeballos": 25000,
      "Ñemby": 35000,
      "Mariano R. Alonso": 20000,
      "San Antonio": 35000,
      "Capiatá": 35000,
      "Limpio": 40000,
      "Areguá": 40000,
      "Ypané": 40000,
      "Ytororó": 40000,
      "Guarambaré": 50000,
      "Itauguá": 60000,
      "Villeta": 60000,
    }
  },

  "Luque": {
    prices: {
      "Asunción": 25000,
      "Lambaré": 30000,
      "Fdo. de la Mora": 25000,
      "San Lorenzo": 30000,
      "Villa Elisa": 30000,
      "Luque": 20000,
      "Loma Pyta y Zeballos": 25000,
      "Ñemby": 35000,
      "Mariano R. Alonso": 30000,
      "San Antonio": 40000,
      "Capiatá": 35000,
      "Limpio": 40000,
      "Areguá": 35000,
      "Ypané": 40000,
      "Ytororó": 40000,
      "Guarambaré": 50000,
      "Itauguá": 60000,
      "Villeta": 60000,
    }
  },

  "Lambaré": {
    prices: {
      "Asunción": 25000,
      "Lambaré": 20000,
      "Fdo. de la Mora": 25000,
      "San Lorenzo": 30000,
      "Villa Elisa": 25000,
      "Luque": 30000,
      "Loma Pyta y Zeballos": 25000,
      "Ñemby": 35000,
      "Mariano R. Alonso": 35000,
      "San Antonio": 35000,
      "Capiatá": 35000,
      "Limpio": 40000,
      "Areguá": 40000,
      "Ypané": 35000,
      "Ytororó": 35000,
      "Guarambaré": 50000,
      "Itauguá": 60000,
      "Villeta": 60000,
    }
  }
};



const landingPageData = {
  heroData,
  servicesData,
  categoriesData,
  benefitsData,
  statsData,
  partnersData,
  partnersData,
  footerLinks,
  testimonialsData,
  pricingMatrix,
};

export default landingPageData;
