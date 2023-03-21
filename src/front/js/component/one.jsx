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
        <section id="services" style={{ opacity: 0.8 }}>
            <div className="card w-75 mb-3 mx-auto" style={cardStyle} >
                <div className="card-body text-center">
                    <h1 className="card-title">Quienes somos</h1>
                    <br />
                    <h5 className="card-text text-black" >Somos una empresa líder en el mercado, dedicada a brindar soluciones innovadoras y de alta calidad a nuestros clientes. Contamos con un equipo altamente capacitado y experimentado, compuesto por expertos en diversas áreas, quienes trabajan incansablemente para garantizar que nuestros productos y servicios cumplan con las necesidades y expectativas de nuestros clientes.

                        Nos esforzamos por mantener una cultura empresarial ética y sostenible, y valoramos la colaboración, la creatividad y la iniciativa de nuestros empleados. Además, nos comprometemos a contribuir al desarrollo de nuestra comunidad y al cuidado del medio ambiente.

                        Nuestra misión es brindar soluciones de vanguardia y servicios excepcionales a nuestros clientes, ayudándoles a alcanzar sus objetivos y superar sus desafíos. Estamos comprometidos a ser un socio confiable para nuestros clientes y una empresa respetada en la industria.</h5>
                    <br />
                    <a href="#contact" className="btn btn-primary rounded-pill">Contactenos</a>
                </div>
            </div>
        </section >

    )
}
