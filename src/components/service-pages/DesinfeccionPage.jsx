export default function DesinfeccionPage() {
  return (
    <section className="desinfeccion-page">
      <div className="container">
        <header className="desinfeccion-header">
          <h1 className="desinfeccion-title">Desinfeccion</h1>
        </header>

        <div className="desinfeccion-block">
          <article className="desinfeccion-copy">
            <p>
              Se denomina desinfeccion a un proceso quimico que mata o erradica los microorganismos
              sin discriminacion (tales como agentes patogenos) al igual como las bacterias, virus y
              protozoos impidiendo el crecimiento de microorganismos patogenos en fase vegetativa que
              se encuentren en objetos inertes. Los desinfectantes reducen los organismos nocivos a un
              nivel que no danan la salud ni la calidad de los bienes perecederos. Algunos, como los
              compuestos fenolicos, pueden actuar tambien como antisepticos.
            </p>
          </article>
          <figure className="desinfeccion-media">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              alt="Tecnico aplicando desinfeccion en interiores"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="desinfeccion-block desinfeccion-block-reverse">
          <figure className="desinfeccion-media">
            <img
              src="https://www.allamericanturf.com/wp-content/uploads/pest-control.png"
              alt="Desinfeccion de superficies en area comun"
              loading="lazy"
            />
          </figure>
          <article className="desinfeccion-copy">
            <p>
              Los desinfectantes se aplican sobre objetos inanimados, como instrumentos y superficies,
              para tratar y prevenir las infecciones. Entre los desinfectantes quimicos del agua mas
              habituales se encuentran el cloro, las cloraminas, el ozono. La desinfeccion del agua
              tambien puede ser fisica cuando se emplea la ebullicion, la filtracion y la irradiacion
              ultravioleta. Se deben distinguir los desinfectantes de los sanitizantes que son
              sustancias que reducen el numero de microorganismos a un nivel seguro.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
