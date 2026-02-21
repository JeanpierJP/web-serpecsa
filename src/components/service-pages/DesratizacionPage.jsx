export default function DesratizacionPage() {
  return (
    <section className="desrat-page">
      <div className="container">
        <header className="desrat-header">
          <h1 className="desrat-title">Desratizacion</h1>
        </header>

        <div className="desrat-intro-block">
          <article className="desrat-copy">
            <h2>Que es una desratizacion?</h2>
            <p>
              Una desratizacion se podria definir como una serie acciones mediante las cuales se
              consigue ahuyentar e eliminar plagas de ratas y ratones de un local, vivienda o
              cualquier otro ambiente.
            </p>

            <h2>Cual es el procedimiento de una desratizacion?</h2>
            <p>Una desratizacion se divide en tres etapas que siguen un orden:</p>
          </article>

          <figure className="desrat-media">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
              alt="Tecnico instalando dispositivo para control de roedores"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="desrat-steps">
          <article className="desrat-step">
            <h3>1.- Analisis previo</h3>
            <p>
              Antes de realizar cualquier accion lo primero que se debe hacer es encontrar la causa
              del problema.
            </p>
            <p>
              Lo siguiente es averiguar si realmente se trata de una plaga de ratas o se trata de un
              caso aislado.
            </p>
            <p>
              La forma mas sencilla de detectar si se trata de una plaga es buscar huellas,
              excrementos, roeduras, animales muertos y ver si se oyen los correteos de los ratones.
            </p>
          </article>

          <article className="desrat-step">
            <h3>2.- Plan de accion</h3>
            <p>
              Dentro del plan de accion tambien se puede dividir en varias etapas, aunque es algo que
              puede variar segun la empresa que realice la desratizacion.
            </p>
            <p>
              <strong>Medidas preventivas:</strong> Las medidas preventivas consisten acciones que
              eviten la aparicion de ratas como por ejemplo reparacion de agujeros, tapas, sellado de
              accesos y orden sanitario del ambiente.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
