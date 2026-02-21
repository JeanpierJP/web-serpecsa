import { useState } from "react";

const clients = ["Alkofarma", "Montana", "Molino El Triunfo", "Casaclub Las Torres"];

export default function Footer() {
  const [showWaCard, setShowWaCard] = useState(true);

  return (
    <>
      <section className="clients-section">
        <div className="container">
          <h2>Clientes Satisfechos</h2>
          <div className="clients-grid">
            {clients.map((client) => (
              <article key={client} className="client-card">
                <span>{client}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-columns">
          <section>
            <h3>Contáctanos</h3>
            <ul>
              <li>📍 Jr. Mercedes Gallagher #2951 - Lima 31.</li>
              <li>📞 +51965000569 / +51975421717</li>
              <li>✉ ventas@serpecsa.com</li>
            </ul>
          </section>

          <section>
            <h3>Links</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Acerca de Nosotros</a></li>
              <li><a href="#servicios">Nuestros Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </section>

          <section>
            <h3>Subcríbete</h3>
            <form className="subscribe-box">
              <input type="email" placeholder="Email" />
              <button type="button">Subscribirme</button>
            </form>
          </section>

          <section>
            <h3>Síguenos</h3>
            <div className="footer-social">
              <a href="#inicio" aria-label="Facebook">f</a>
              <a href="#inicio" aria-label="Instagram">ig</a>
            </div>
          </section>
        </div>

        <div className="container footer-copy">
          <p>Copyright © {new Date().getFullYear()} Derechos Reservados. | Panel de administracion</p>
        </div>
      </footer>

      {showWaCard && (
        <div className="wa-card">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80" 
            alt="Asesora"
          />
          <div>
            <small>Serpecsa</small>
            <strong>Hablemos por Whatsapp</strong>
          </div>
          <button type="button" aria-label="Cerrar" onClick={() => setShowWaCard(false)}>×</button>
        </div>
      )}

      <a
        className="wa-float"
        href="https://wa.me/51965000569"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
      >
        <img
          className="wa-float-icon"
          src="src\assets\images\whatsapp-logo-free-vector.jpg"
          alt="Whatsapp"
        />
      </a>
    </>
  );
}

