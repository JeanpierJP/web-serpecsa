import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Servicios() {
  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <h2 className="services-title">Nuestros Servicios</h2>
        <p className="services-lead">
          Contamos con un equipo altamente capacitado y con experiencia comprobada en saneamiento
          ambiental, utilizando insumos certificados para brindar servicios de alta calidad.
        </p>

        <div className="services-grid">
          {services.map((item) => (
            <article
              className={item.featured ? "service-card featured" : "service-card"}
              key={item.slug}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <Link to={`/${item.slug}`} className="service-more">
                {item.cta || "Ver mas"}
              </Link>
            </article>
          ))}

          <article className="service-card" key="asesoria-personalizada">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
              alt="Asesoria Personalizada"
              loading="lazy"
            />
            <h3>Asesoria Personalizada</h3>
            <p>
              Nuestro equipo evalua tu necesidad y te recomienda el tratamiento mas adecuado
              para tu establecimiento.
            </p>
            <a href="#contacto" className="service-more">
              Solicitar evaluacion
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
