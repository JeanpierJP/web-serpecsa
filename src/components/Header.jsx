import { services } from "../data/services";

export default function Header({
  onHome = () => {},
  onSection = () => {},
  onSelectService = () => {},
}) {
  const handleHome = (event) => {
    event.preventDefault();
    onHome();
  };

  const handleSection = (event, id) => {
    event.preventDefault();
    onSection(id);
  };

  return (
    <header>
      <div className="brand-strip">
        <div className="container brand-content">
          <a href="#inicio" className="brand-logo" aria-label="SERPECSA" onClick={handleHome}>
            <span className="brand-mark">S</span>
            <span className="brand-text">
              <strong>SERPECSA S.A.C.</strong>
              <small>Manejo integrado de plagas industriales</small>
            </span>
          </a>
          <div className="brand-contact">
            <p>
              <span className="contact-label">Escribenos</span>
              <span className="contact-value">ventas@serpecsa.com</span>
            </p>
            <p>
              <span className="contact-label">Llamanos</span>
              <span className="contact-value">+5196500569</span>
            </p>
            <div className="social">
              <a href="#inicio" aria-label="Facebook">f</a>
              <a href="#inicio" aria-label="Instagram">ig</a>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-strip">
        <div className="container nav">
          <nav>
            <a href="#inicio" className="active" onClick={handleHome}>Inicio</a>
            <a href="#nosotros" onClick={(event) => handleSection(event, "nosotros")}>Acerca de nosotros</a>

            <div className="nav-dropdown">
              <button type="button" className="nav-dropdown-btn">Nuestros servicios</button>
              <div className="nav-dropdown-menu">
                {services.filter((service) => service.page).map((service) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => onSelectService(service.slug)}
                  >
                    {service.menuTitle}
                  </button>
                ))}
              </div>
            </div>

            <a href="#contacto" onClick={(event) => handleSection(event, "contacto")}>Contactenos</a>
            <a href="#contacto" className="btn-nav" onClick={(event) => handleSection(event, "contacto")}>Contactanos</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
