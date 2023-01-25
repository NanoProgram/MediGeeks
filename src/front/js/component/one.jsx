import React from 'react'

const cardStyle = {
    width: '75%',
    height: 'auto',
    marginBottom: '3px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundImage: `url(https://crearmisitioweb.com/images/posts/quienes-somos.jpeg)`,
    backgroundSize: 'cover'
  }

export const One = () => {
    return (
    <section id="services">
        <div class="card w-75 mb-3 mx-auto"style={cardStyle} >
            <div class="card-body text-center">
                <h1 class="card-title">Quienes somos</h1>
                <br />
                <p class="card-text text-black">Somos una empresa líder en el mercado, dedicada a brindar soluciones innovadoras y de alta calidad a nuestros clientes. Contamos con un equipo altamente capacitado y experimentado, compuesto por expertos en diversas áreas, quienes trabajan incansablemente para garantizar que nuestros productos y servicios cumplan con las necesidades y expectativas de nuestros clientes.
                    <br />
                    Nos esforzamos por mantener una cultura empresarial ética y sostenible, y valoramos la colaboración, la creatividad y la iniciativa de nuestros empleados. Además, nos comprometemos a contribuir al desarrollo de nuestra comunidad y al cuidado del medio ambiente.
                    <br />
                    Nuestra misión es brindar soluciones de vanguardia y servicios excepcionales a nuestros clientes, ayudándoles a alcanzar sus objetivos y superar sus desafíos. Estamos comprometidos a ser un socio confiable para nuestros clientes y una empresa respetada en la industria.</p>
                <br />
                <a href="#contact" class="btn btn-primary">Contactenos</a>
            </div>
        </div>
    </section>

    )
}
