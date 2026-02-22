import { useState } from "react";

const initialForm = {
  empresa: "",
  ruc: "",
  nombres: "",
  apellidos: "",
  servicio: "Desinsectacion/Fumigacion",
  telefono: "",
  email: "",
  mensaje: "",
};

export default function Contacto() {
  const [formData, setFormData] = useState(initialForm);
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (feedback) setFeedback("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = [
      formData.empresa,
      formData.ruc,
      formData.nombres,
      formData.apellidos,
      formData.telefono,
      formData.email,
      formData.mensaje,
    ];

    const hasEmptyFields = requiredFields.some((value) => !value.trim());
    if (hasEmptyFields) {
      setFeedback("Completa los campos");
      return;
    }

    setFeedback("Consulta enviada");
  };

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

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Empresa
              <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
            </label>
            <label>
              RUC
              <input type="text" name="ruc" value={formData.ruc} onChange={handleChange} />
            </label>
            <label>
              Nombres
              <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} />
            </label>
            <label>
              Apellidos
              <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} />
            </label>
            <label>
              Servicio
              <select name="servicio" value={formData.servicio} onChange={handleChange}>
                <option>Desinsectacion/Fumigacion</option>
                <option>Desinfeccion</option>
                <option>Desratizacion</option>
              </select>
            </label>
            <label>
              Telef. / Cel.
              <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
            </label>
            <label>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Mensaje
              <textarea rows="1" name="mensaje" value={formData.mensaje} onChange={handleChange} />
            </label>

            <button type="submit" className="contact-submit">ENVIAR CONSULTA</button>
            {feedback ? <p>{feedback}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
