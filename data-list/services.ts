import {
  BookUser,
  FileText,
  LucideIcon,
  PieChart,
  ShieldCheck,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
  items: string[];
  direction: string;
  code: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Contabilidad",
    description:
      "Delega la contabilidad de tu negocio a nuestro estudio contable en Lima. Así evitarás posibles multas o sanciones de la Sunat, no tendrás que corregir errores futuros y tendrás más tiempo para enfocarte en impulsar tu negocio.",
    image: "/images/contadores.webp",
    items: [
      "Servicios Contables",
      "Presentaciones Tributarias",
      "Asesoría Contable - Tributaria",
      "Control Interno",
      "Actualización de Registros y Libros Contables",
      "Preparación de Estados Financieros",
      "Declaración de Impuestos",
    ],
    direction: "right",
    code: "accounting",
    icon: BookUser,
  },
  {
    title: "Administración de Empresas",
    description:
      "Optimiza la gestión de tu empresa con nuestra asesoría, asegurando eficiencia, cumplimiento normativo y crecimiento sostenido.",
    image: "/images/asesoria.webp",
    items: [
      "Outsourcing Laboral y de Recursos Humanos",
      "Servicios Laborales y de Recursos Humanos",
      "Outsourcing Administrativo Financiero",
    ],
    direction: "left",
    code: "business-administration",
    icon: FileText,
  },
  {
    title: "Reestructuración y Liquidación de Empresas",
    description:
      "Te guiamos en la reorganización o liquidación de tu empresa, garantizando decisiones estratégicas y cumplimiento legal.",
    image: "/images/clientes.webp",
    items: [
      "Auditoria de Estados Financieros",
      "Auditoria Operativa",
      "Auditoria Tributaria",
      "Auditoria Interna",
      "Exámenes Especiales de Auditoria",
    ],
    direction: "right",
    code: "restructuring-companies",
    icon: PieChart,
  },
  {
    title: "Otras Especialidades",
    description:
      "Soluciones personalizadas en gestión fiscal, beneficios laborales y procesos contables, adaptadas a las necesidades de tu empresa.",
    image: "/images/businessMeet.webp",
    items: [
      "Asesoría Jurídica en lo Civil",
      "Asesoría en la Ley General de Sociedades.",
      "Elaboramos Minutas, Actas, Poderes, Aumentos de Capital y Levantamiento de Hipotecas.\n",
      "Cobranzas difíciles de Letras, Facturas, etc.",
      "Asesoría ante Registros Públicos.",
      "Asesoría ante Notarías.",
      "Reclamaciones y Apelaciones ante SUNAT.",
      "Leyes Laborales - Indemnizaciones - Subsidios.",
      "Negociación y Administración de Contratos.",
      "Selección de Personal.",
      "Evaluación de Puestos de Trabajo.",
      "Gestiones ante ESSALUD - AFP - CTS.",
    ],
    direction: "right",
    code: "other-specialties",
    icon: ShieldCheck,
  },
];
