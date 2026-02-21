export default function DesinsectacionFumigacionPage() {
  return (
    <section className="desinsect-page">
      <div className="container">
        <header className="desinsect-header">
          <h1 className="desinsect-title">Desinsectacion Fumigacion</h1>
        </header>

        <p className="desinsect-lead">
          La Desinsectacion/Fumigacion es la accion de eliminar determinados artropodos daninos,
          principalmente insectos, por medios quimicos, fisicos o con la aplicacion de medidas de
          saneamiento basico. Puede haber especies daninas para la agricultura, ganaderia, para las
          personas, etc.
        </p>

        <p className="desinsect-lead">
          Los insectos mas comunes considerados como de interes en la salud publica y dentro de las
          actividades economicas son:{" "}
          <strong>
            Avispas, Carcoma, Cucaracha, Chinche de las camas, Hormigas, Mosca domestica, Mosquito,
            Picudo rojo, Procesionaria, Pulga.
          </strong>
        </p>

        <div className="desinsect-gallery">
          <figure className="desinsect-image">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
              alt="Tecnico aplicando tratamiento de desinsectacion"
              loading="lazy"
            />
          </figure>
          <figure className="desinsect-image">
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=80"
              alt="Equipo preparado para fumigacion"
              loading="lazy"
            />
          </figure>
          <figure className="desinsect-image">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
              alt="Tecnico realizando control sanitario"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
