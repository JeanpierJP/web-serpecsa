import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import DesinsectacionFumigacionPage from "./components/service-pages/DesinsectacionFumigacionPage";
import DesinfeccionPage from "./components/service-pages/DesinfeccionPage";
import DesratizacionPage from "./components/service-pages/DesratizacionPage";
import LimpiezaTanquesCisternaPage from "./components/service-pages/LimpiezaTanquesCisternaPage";
import ControlAviarPage from "./components/service-pages/ControlAviarPage";

export default function App() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSection = (id) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
  };

  const handleSelectService = (slug) => {
    navigate(`/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header
        onHome={handleHome}
        onSection={handleSection}
        onSelectService={handleSelectService}
      />

      <main>
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Servicios />
                <Nosotros />
              </>
            }
          />

          {/* SERVICIOS */}
          <Route
            path="/desinsectacion-fumigacion"
            element={<DesinsectacionFumigacionPage />}
          />
          <Route path="/desinfeccion" element={<DesinfeccionPage />} />
          <Route path="/desratizacion" element={<DesratizacionPage />} />
          <Route
            path="/limpieza-tanques-cisterna"
            element={<LimpiezaTanquesCisternaPage />}
          />
          <Route path="/control-aviar" element={<ControlAviarPage />} />
        </Routes>

        <Contacto />
      </main>

      <Footer />
    </>
  );
}
