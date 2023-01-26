import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <section className='p-4'>
          <div className='me-5 d-none d-lg-block' >
            <span>Conéctese con nosotros en las redes sociales:</span>
            <br />
            <br />
            <div>
              <a href='' className='me-4 text-reset'>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href='' className='me-4 text-reset'>
                <i className="fab fa-twitter"></i>
              </a>
              <a href='' className='me-4 text-reset'>
                <i className="fab fa-google"></i>
              </a>
              <a href='' className='me-4 text-reset'>
                <i className="fab fa-instagram"></i>
              </a>
              <a href='' className='me-4 text-reset'>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href='' className='me-4 text-reset'>
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-6">
            <div className=' mb-4' style={{ maxWidth: "100%" }}>
              <h4 className='text-uppercase fw-bold mb-4'>
                <i className="fa-solid fa-user-doctor"></i>
                <strong>MediGeeks</strong>
              </h4>
              <p>
                Proporcionar un servicio eficiente y fácil de usar para que los pacientes puedan programar sus citas médicas en línea. Esto incluye la disponibilidad de una amplia variedad de horarios de citas, la capacidad de seleccionar al médico de su elección y la posibilidad de recibir recordatorios y confirmaciones de citas por correo electrónico o mensajes de texto.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="col-6">
            <div className='mx-auto mb-md-0 mb-4' style={{ maxWidth: "100%" }}>
              <h6 className='text-uppercase fw-bold mb-4'>Contactos</h6>
              <p>
                <i className="me-2 fas fa-home"></i>
                Av. Manquehue Sur 350, Oficina 110, Las Condes, Región Metropolitana
              </p>
              <p>
                <i className="me-3 fas fa-envelope"></i>
                medicgeeks1@gmail.com
              </p>
              <p>
                <i className="me-3 fas fa-phone"></i> +56 9 7284 8039
              </p>
              <p>
                <i className="me-3 fas fa-phone"></i> +56 9 5887 9851
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
