export default function Nosotros() {
  return (
    <section id="nosotros" className="about-company">
      <div className="container about-company-grid">
        <article className="who-card">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
            alt="Equipo de saneamiento"
            loading="lazy"
          />
          <h3>Quienes Somos</h3>
          <p>
            Serpecsa es una organizacion dirigida por un equipo de profesionales en saneamiento
            ambiental, con experiencia en manejo integrado de control de plagas urbanas, industriales
            y vectoriales.
          </p>
        </article>

        <div className="about-side">
          <div className="mv-grid">
            <article className="mv-card mission-card">
              <div className="mv-icon" aria-hidden="true">M</div>
              <h3>Mision</h3>
              <p>
                Brindar servicios de alta calidad a nuestros clientes, contribuyendo a la
                conservacion del medio ambiente, teniendo espacios limpios y saludables.
              </p>
            </article>

            <article className="mv-card vision-card">
              <div className="mv-icon" aria-hidden="true">V</div>
              <h3>Vision</h3>
              <p>
                Ser la mejor empresa de servicios de gestion ambiental para nuestros clientes,
                con una gran proyeccion en ser lider en el mercado nacional.
              </p>
            </article>
          </div>

          <div className="about-text-block">
            <h3>Valores</h3>
            <p>
              Responsabilidad Social, Compromiso, Generar Confianza, Orientacion al Cliente,
              Proactividad.
            </p>
          </div>

          <div className="about-text-block">
            <h3>Objetivos</h3>
            <p>
              Diagnosticar problemas, buscar alternativas para brindar soluciones tecnicas y
              sustentables, y asi prevenir de forma permanente en los hogares, empresas e
              instituciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
