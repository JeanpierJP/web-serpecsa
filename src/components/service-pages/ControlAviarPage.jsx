export default function ControlAviarPage() {
  return (
    <section className="control-aviar-page">
      <div className="container">
        <header className="control-aviar-header">
          <h1 className="control-aviar-title">Control Aviar</h1>
        </header>

        <div className="control-aviar-main">
          <article className="control-aviar-copy">
            <h2>Las aves como amenaza a la salud en las personas y a la reputacion de las industrias.</h2>
            <p>
              La presencia de aves plaga (palomas y otras) cerca del ser humano, significa riesgos a
              la salud y amenazas a la reputacion de las industrias. Son causantes de mas de 40
              enfermedades, todas mortales, ademas pueden transportar y ser vectores de mas de 50
              clases de ectoparasitos.
            </p>
            <p>
              Otro problema que causan las plagas de aves es la contaminacion y deterioro de materias
              primas y productos terminados cuando sobre estos, caen excretas de aves. Para brindar
              una solucion se cuenta con diferentes opciones:{" "}
              <strong>
                Opticos, Visuales, Sistema de sonido, Fisico, mecanicos, Naturales (Cetreria).
              </strong>
            </p>
          </article>

          <figure className="control-aviar-media">
            <img
              src="https://www.allamericanturf.com/wp-content/uploads/pest-control.png"
              alt="Especialista en control aviar"
              loading="lazy"
            />
          </figure>
        </div>

        <section className="control-aviar-capture">
          <h2>Captura de Aves</h2>
          <p>
            Serpecsa dispone de una amplia variedad de sistemas de control de aves en funcion de las
            caracteristicas del sitio donde necesiten ser instalados y de la gravedad de la plaga de
            palomas.
          </p>
          <ul>
            <li>
              <strong>Sistema de redes:</strong> Este sistema se adapta perfectamente a cualquier
              edificio, ya que Serpecsa posee redes de cualquier tamano y color, que ademas se ajustan
              facilmente.
            </li>
            <li>
              <strong>Sistema de puas:</strong> El sistema de puas ha sido disenado para interiores
              donde han anidado las palomas, por ejemplo, naves o almacenes. Las puas se instalan en
              casi cualquier lugar de sus instalaciones donde haya aves, por ejemplo, aleros, camaras
              de seguridad, luces, chimeneas.
            </li>
            <li>
              <strong>Gel anti palomas:</strong> duradero y no toxico ademas de ser incoloro e inodoro
              y de facil aplicacion.
            </li>
            <li>
              <strong>Cetreria:</strong> sistema de control mediante aves rapaces.
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
