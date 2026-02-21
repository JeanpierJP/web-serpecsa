export default function ServicePage({ service }) {
  if (!service) return null;

  return (
    <section className="service-page">
      <div className="container service-page-grid">
        <article className="service-page-copy">
          <p className="eyebrow">Nuestros Servicios</p>
          <h1>{service.title}</h1>
          <p>{service.detail}</p>
          <a href="#contacto" className="btn-primary">
            Solicitar informacion
          </a>
        </article>

        <figure className="service-page-media">
          <img src={service.image} alt={service.title} loading="lazy" />
        </figure>
      </div>
    </section>
  );
}