import delivery1 from './serviceFast/delivery1.jpg'
import delivery2 from './serviceFast/delivery2.jpg'
import delivery3 from './serviceFast/delivery3.jpg'
import delivery5 from './serviceFast/delivery5.jpg'
import delivery6 from './serviceFast/delivery6.avif'
import delivery7 from './serviceFast/delivery7.jpg'
import delivery8 from './serviceFast/delivery8.jpg'
import ayo from './faces/ayo.jpg'
import clem from './faces/clem.jpg'
import erik from './faces/erik.jpg'
import joe from './faces/joe.jpg'
import kaci from './faces/kaci.jpg'
import clem2 from './faces/clem2.jpg'
import abby from './faces/abby.jpg'
import ariana from './faces/ariana.jpg'
import ally from './faces/ally.avif'


export const heroData = {
  title: "ServiFast",
  subtitle: "Tu pedido, más rápido de lo que imaginas",
  description: "Conectamos personas, comercios y repartidores en una sola plataforma web. Pedí, enviá y recibí en minutos.",
  primaryCTA: "Hacer pedido",
  secondaryCTA: "Registrar mi negocio",
};

export const servicesData = [
  {
    id: 1,
    title: "Delivery de comida",
    description: "Pedidos de restaurantes, fast food, cafeterías y locales gastronómicos.",
    fullDescription: "Conectamos a los clientes con restaurantes, cafeterías, fast food y locales gastronómicos de toda la ciudad. Realizamos entregas rápidas, seguras y confiables, con seguimiento del pedido en tiempo real y atención al cliente personalizada para garantizar una experiencia de delivery eficiente y de calidad.",
    icon: "🍔",
    features: [
      "Tracking en tiempo real",
      "Soporte 24/7",
      "Cobertura en Gran Asunción",
      "Entregas express"
    ],
    imagen: delivery1
  },
  {
    id: 2,
    title: "Envíos express",
    description: "Mensajería rápida de documentos, paquetes y productos.",
    fullDescription: "Servicio de mensajería express para documentos importantes, paquetes y productos comerciales. Ideal para envíos urgentes dentro de Gran Asunción, con tiempos de entrega reducidos, trazabilidad del envío y soporte operativo para empresas y particulares.",
    icon: "📦",
    features: [
      "Tracking en tiempo real",
      "Soporte 24/7",
      "Cobertura en Gran Asunción",
      "Entregas express"
    ],
    imagen: delivery2,
  },
  {
    id: 3,
    title: "Supermercados",
    description: "Compras de supermercados y tiendas de conveniencia.",
    fullDescription: "Realizamos compras y entregas de supermercados, minimarkets y tiendas de conveniencia. Desde productos básicos hasta compras completas del hogar, garantizando entregas seguras, organizadas y en el menor tiempo posible, directamente en la puerta del cliente.",
    icon: "🛒",
    features: [
      "Tracking en tiempo real",
      "Soporte 24/7",
      "Cobertura en Gran Asunción",
      "Entregas express"
    ],
    imagen: delivery7
    
  },
  {
    id: 4,
    title: "Farmacias",
    description: "Medicamentos y productos farmacéuticos a domicilio.",
    fullDescription: "Servicio especializado de delivery farmacéutico para medicamentos, productos de cuidado personal y artículos de farmacia. Trabajamos con protocolos de seguridad y confidencialidad para garantizar entregas responsables y confiables.",
    icon: "💊",
    imagen: delivery3,
  },
  {
    id: 5,
    title: "Servicios corporativos",
    description: "Logística para empresas y comercios locales.",
    fullDescription: "Soluciones logísticas para empresas, pymes y comercios locales. Ofrecemos servicios de distribución, mensajería corporativa, entregas programadas y gestión de pedidos para negocios que necesitan una infraestructura de delivery eficiente y escalable.",
    icon: "🏢",
    imagen: delivery5,
  },
  {
    id: 6,
    title: "Delivery programado",
    description: "Entregas planificadas por horario y fecha.",
    fullDescription: "Sistema de entregas programadas que permite a los clientes elegir fechas y horarios específicos para recibir sus pedidos. Ideal para eventos, empresas, compras grandes o envíos organizados, garantizando puntualidad y planificación logística.",
    icon: "🕒",
    imagen: delivery6,
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
    title: "Entrega rápida",
    description: "Pedidos entregados en minutos.",
  },
  {
    id: 2,
    title: "Seguimiento en tiempo real",
    description: "Visualiza tu pedido desde que sale del local hasta tu puerta.",
  },
  {
    id: 3,
    title: "Pagos seguros",
    description: "Pagos online protegidos y confiables.",
  },
  {
    id: 4,
    title: "Soporte 24/7",
    description: "Atención al cliente siempre disponible.",
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
    imagen: ayo,
    role: "Cliente",
    comment: "ServiFast me solucionó la vida, los pedidos llegan rápido y sin problemas.",
  },
  {
    id: 2,
    name: "María López",
    imagen: joe,
    role: "Dueña de restaurante",
    comment: "Aumenté mis ventas desde que uso ServiFast. Muy fácil de usar.",
  },
  {
    id: 3,
    name: "Juan Martínez",
    imagen: clem2,
    role: "Repartidor",
    comment: "Plataforma clara, pagos seguros y buen flujo de pedidos.",
  },

  // 🔁 Duplicados con nuevas opiniones (mismas imágenes)
  {
    id: 4,
    name: "Ana González",
    imagen: erik,
    role: "Cliente frecuente",
    comment: "Excelente servicio, siempre puntuales y muy buena atención al cliente.",
  },
  {
    id: 5,
    name: "Ally Benitez",
    imagen: ally,
    role: "Comerciante",
    comment: "ServiFast me ayudó a organizar mis envíos y mejorar la logística del negocio.",
  },
  {
    id: 6,
    name: "Luis Ramírez",
    imagen: clem,
    role: "Repartidor",
    comment: "Buena organización, rutas claras y sistema de pedidos bien estructurado.",
  },
  {
    id: 7,
    name: "Sofía Duarte",
    imagen: kaci,
    role: "Cliente",
    comment: "La app es rápida, los pedidos llegan bien y el servicio es confiable.",
  },
  {
    id: 8,
    name: "Ariana Rojas",
    imagen: ariana,
    role: "Dueña de cafetería",
    comment: "Desde que trabajo con ServiFast tengo más pedidos y mejor gestión de entregas.",
  },
  {
    id: 9,
    name: "Abby Acosta",
    imagen: abby,
    role: "Repartidor independiente",
    comment: "Sistema simple, pagos claros y buena cantidad de pedidos diarios.",
  },
];


export const ctaData = {
  title: "Empieza a usar ServiFast hoy",
  description: "Únete a la plataforma que está transformando el delivery en tu ciudad.",
  primaryCTA: "Registrarse",
  secondaryCTA: "Contactar",
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
};

export default landingPageData;
