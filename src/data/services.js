export const services = [
  {
    slug: "desinsectacion-fumigacion",
    title: "Desinsectacion Fumigacion",
    menuTitle: "Desinsectacion Fumigacion",
    page: true,
    text: "Comprende la Desinsectacion/Fumigacion, desinfeccion y desratizacion preventiva.",
    detail:
      "Aplicamos procedimientos quimicos y fisicos para controlar plagas y prevenir reinfestaciones en hogares, comercios e industria.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "desinfeccion",
    title: "Desinfeccion",
    menuTitle: "Desinfeccion",
    page: true,
    text: "Eliminamos agentes patogenos en superficies y ambientes.",
    detail:
      "Eliminamos agentes patogenos en superficies y ambientes con protocolos de bioseguridad.",
    image:
      "https://servicioschicago.com/wp-content/uploads/2020/04/fumigacion-control-plagas-urbanas-3.jpg",
  },
  {
    slug: "desratizacion",
    title: "Desratizacion",
    menuTitle: "Desratizacion",
    page: true,
    text: "Control de roedores en establecimientos.",
    detail:
      "Realizamos inspeccion, cebado, monitoreo y control integrado para eliminar roedores.",
    image:
      "https://www.ilser.net/wp-content/uploads/2022/06/limpiadores-enzimaticos-800x533.jpg",
  },
  {
    slug: "limpieza-tanques-cisterna",
    title: "Limpieza de Tanques y Cisterna",
    menuTitle: "Limpieza de Tanques y Cisterna",
    page: true,
    text: "Limpieza y desinfeccion profesional.",
    detail:
      "Aseguramos agua en condiciones sanitarias adecuadas mediante mantenimiento especializado.",
    image:
      "https://www.wirga.pl/images/design/sprzatanie-biura.jpg",
  },
  {
    slug: "control-aviar",
    title: "Control Aviar",
    menuTitle: "Control Aviar",
    page: true,
    text: "Control vital para mantener la salud.",
    detail:
      "Implementamos metodos seguros para reducir riesgos de contaminacion y danos estructurales.",
    image:
      "https://www.allamericanturf.com/wp-content/uploads/pest-control.png",
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) || null;
}
