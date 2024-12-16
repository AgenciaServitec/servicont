interface Service {
  title: string;
  description: string;
  image: string;
  items: [string, string, string];
  direction: string;
}

export const services: Service[] = [
  {
    title: "Outsourcing contable",
    description:
      "Delega la contabilidad de tu negocio nuestro estudio contable en Lima. Así evitarás posibles multas o sanciones de la Sunat, no tendrás que corregir errores futuros y tendrás más tiempo para enfocarte en impulsar tu negocio.",
    image: "/images/contadores.webp",
    items: [
      "Registro de ventas y compras en libros contables.",

      "Gestión de documentos contables.",

      "Declaración de impuestos IGV - Renta.",
    ],
    direction: "right",
  },
  {
    title: "Asesoría contable y tributaria",
    description:
      "Contar con la asesoría de un estudio contable en Lima, te permite prevenir o afrontar multas con Sunat y estar al tanto de las nuevas oportunidades que el gobierno ofrece en beneficio de los emprendedores",
    image: "/images/asesoria.webp",
    items: [
      "Orientación si ocurre algún problema con SUNAT.",
      "Asesoría para llevar una contabilidad saludable.",
      "Aviso oportuno sobre nuevas normativas y/o beneficios del Gobierno.",
    ],
    direction: "left",
  },
  {
    title: "Cálculo de Planillas",
    description:
      "Nuestro estudio contable en Lima realiza un análisis de los beneficios sociales de los colaboradores, manteniendo el estándar adecuado para que la información sea presentada de forma confidencial y oportuna, lo que te evitará problemas con la SUNAFIL y malentendidos con tus trabajadores.",
    image: "/images/clientes.webp",
    items: [
      "Cálculo de descuentos de planilla, adelantos, renta 5ta categoría, EsSalud.",
      "Declaración de planilla electrónica (Plame y AFPnet).",
      "Cálculo de beneficios laborales (CTS, gratificaciones, vacaciones, liquidaciones, etc.).",
    ],
    direction: "right",
  },
];
