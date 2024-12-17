export const plans: Plan[] = [
  {
    id: "plan-micro",
    name: "Micro",
    price: "200",
    description:
      "El plan perfecto si recién estás empezando a utilizar nuestros servicios.",
    services: [
      "Registro de libros contables compra y venta",
      "Declaración de impuestos PDT (IGV-Renta)",
      "Asesoría inicial",
    ],
  },
  {
    id: "plan-mipe",
    name: "Mipe",
    price: "300",
    description: "El plan ideal si ya facturas de gran cantidad.",
    services: [
      "Registro de libros contables compra y venta",
      "Declaración de impuestos PDT (IGV-Renta)",
      "Atención de consultas",
      "Asesoría de inicial",
      "1 trabajador en planilla",
    ],
  },
  {
    id: "plan-enterprise",
    name: "Enterprise",
    price: "350",
    description:
      "El plan perfecto si ya tienes una empresa consolidada y con grandes ingresos.",
    services: [
      "Registro de libros contables compra y venta",
      "Declaración de impuestos PDT (IGV-Renta)",
      "Atención de consultas",
      "Asesoría inicial",
      "2 trabajadores en planilla",
      "3 asesorías personalizadas",
    ],
  },
];
