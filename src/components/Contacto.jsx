export default function Contacto() {
  return (
    <section
      id="contacto"
      className="contact-section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(3, 138, 54, 0.9), rgba(3, 118, 49, 0.9)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="container contact-grid">
        <aside className="contact-left">
          <h2>Mas Informacion:</h2>
          <p>Llamenos que gustosamente lo atenderemos.</p>

          <article className="contact-box">
            <span aria-hidden="true">&#9992;</span>
            <div>
              <h3>Escribenos</h3>
              <strong>ventas@serpecsa.com</strong>
            </div>
          </article>

          <article className="contact-box">
            <span aria-hidden="true">&#10013;</span>
            <div>
              <h3>Llamanos</h3>
              <strong>+5196500569</strong>
            </div>
          </article>
        </aside>

        <div className="contact-right">
          <p className="contact-kicker">Profesionales en saneamiento ambiental</p>
          <h2>Contactanos Ahora</h2>
          <p className="contact-lead">
            Somos su mejor opcion y contamos con la experiencia comprobada en servicios de saneamiento
            ambiental y control de plagas, damos garantia de nuestros servicios.
          </p>

          <form className="contact-form">
            <label>
              Empresa
              <input type="text" />
            </label>
            <label>
              RUC
              <input type="text" />
            </label>
            <label>
              Nombres
              <input type="text" />
            </label>
            <label>
              Apellidos
              <input type="text" />
            </label>
            <label>
              Servicio
              <select defaultValue="Desinsectacion/Fumigacion">
                <option>Desinsectacion/Fumigacion</option>
                <option>Desinfeccion</option>
                <option>Desratizacion</option>
              </select>
            </label>
            <label>
              Telef. / Cel.
              <input type="text" />
            </label>
            <label>
              Email
              <input type="email" />
            </label>
            <label>
              Mensaje
              <textarea rows="1" />
            </label>
          </form>

          <button type="button" className="contact-submit">ENVIAR CONSULTA</button>
        </div>
      </div>
    </section>
  );
}
