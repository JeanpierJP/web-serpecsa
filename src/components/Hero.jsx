import { useEffect, useState } from "react";

const slides = [
  {
    title: "Desinsectacion fumigacion",
    text: "Aseguramos el control de plagas eliminando insectos daninos para la salud con procedimientos quimicos y fisicos.",
    cta: "Solicitar evaluacion sanitaria",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Desratizacion integral",
    text: "Monitoreo, control y prevencion de roedores en zonas industriales, comerciales y residenciales.",
    cta: "Solicitar inspeccion tecnica",
    image: "https://servicioschicago.com/wp-content/uploads/2020/04/fumigacion-control-plagas-urbanas-3.jpg",
  },
  {
    title: "Limpieza y desinfeccion",
    text: "Planes de sanitizacion para instalaciones con protocolos de bioseguridad y trazabilidad operativa.",
    cta: "Programar servicio",
    image: "https://www.allamericanturf.com/wp-content/uploads/pest-control.png",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setIndex((current) => (current - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((current) => (current + 1) % slides.length);

  const activeSlide = slides[index];

  return (
    <section id="inicio" className="hero">
      <div className="hero-media">
        <div className="hero-overlay">
          <div className="container hero-layout">
            <article className="hero-card">
              <h1>{activeSlide.title}</h1>
              <p>{activeSlide.text}</p>
              <a href="#contacto" className="btn-primary">{activeSlide.cta}</a>
            </article>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src={activeSlide.image} alt={activeSlide.title} />
        </div>

        <button className="slider-arrow left" onClick={prevSlide} aria-label="Slide anterior">
          &#8592;
        </button>
        <button className="slider-arrow right" onClick={nextSlide} aria-label="Slide siguiente">
          &#8594;
        </button>
      </div>

      <div className="slider-dots" aria-label="Selector de slides">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={dotIndex === index ? "dot active" : "dot"}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Ir al slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
