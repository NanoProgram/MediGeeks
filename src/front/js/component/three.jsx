import React from 'react'
import "../../styles/three.css"
export const Three = () => {
  return (
    <section id="Gallery">
      <div id="carouselExampleDark" class="carousel carousel-dark slide mx-auto" style={{ width: '80%', height: '80%' }}>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">holaaaaa</button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://www.vidatres.cl/wp-content/uploads/2016/11/alemana-la-dehesa-fachada.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h2 style={{ color: "white" }}>Clinica Alemana</h2>
              <p style={{ color: "white" }}>Clínica Alemana de Santiago en su búsqueda por entregar medicina de alto nivel, cuenta con médicos, tecnología, infraestructura y atención de la mejor calidad, para satisfacer de manera integral los requerimientos de salud de toda la comunidad.
                La institución ha respondido en forma continua y personalizada a las necesidades de prevención y tratamiento individual y colectivo de la salud, privilegiando la excelencia y seguridad de todos los pacientes.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://www.vidatres.cl/wp-content/uploads/2016/11/fachada-indisa.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h2 style={{ color: "white" }}>Clinica Indisa</h2>
              <p style={{ color: "white" }}>Entrega soluciones de salud con los más altos estándares de calidad a toda la comunidad. Estan comprometidos con el servicio de excelencia y la eficiencia en la gestión, inspirados siempre por sólidos principios éticos.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.vidatres.cl/wp-content/uploads/2016/05/examenes_de_laboratorio.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ color: "sky blue" }}>Examenes de Laboratorios</h5>
              <p style={{ color: "bsky blue" }}>La API de exámenes de laboratorio es una herramienta valiosa para cualquier sitio web que brinde servicios de salud en línea. Con ella, los usuarios pueden acceder a una amplia variedad de exámenes de laboratorio desde la comodidad de sus hogares, lo que les permite ahorrar tiempo y evitar desplazamientos innecesarios. La integración es fácil y la interfaz es intuitiva, lo que permite a los usuarios navegar con facilidad y obtener resultados de manera rápida y precisa. Además, la API ofrece una gran cantidad de opciones de personalización, lo que permite a los desarrolladores adaptarla a las necesidades específicas de su sitio web. En resumen, la API de exámenes de laboratorio es una excelente opción para aquellos que buscan ofrecer un servicio de salud en línea completo y de alta calidad a sus usuarios.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}
