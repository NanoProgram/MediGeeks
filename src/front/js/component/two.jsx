import React from 'react'
import "../../styles/two.css"



export const Two = () => {
    return (
<div className='container'>
        <div className="row" id='nuestros'>
            <div className="col-sm">
                <div className="card" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMDeyo7haKSUnnQGoUP5IUOfG673bkGYnAel0VQRtdycAeWju-s7Sr3KKD9EZbvr22cs&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Agendamiento de horas medicas</h5>
                        <p className="card-text">
                            La programación de citas médicas mediante <strong>MediGeeks</strong> permite a los pacientes reservar sus citas en línea a través de la aplicación. Esto proporciona comodidad y conveniencia al no tener que llamar por teléfono o visitar la oficina del médico en persona.
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <a href="/singup">
                                <button className="btn btn-primary me-2 rounded-pill " type="button">registrarse</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Seleciona tu doctor y centro medico preferido </h5>
                        <p className="card-text">
                            En <strong>MediGeeks</strong> la búsqueda de médicos y centros médicos permite a los pacientes buscar y seleccionar a su médico y centro médico preferido. Puede incluir información como la especialidad del médico, la ubicación y la disponibilidad de citas.
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <a href="/singup">
                                <button className="btn btn-primary me-2 rounded-pill" type="button">registrarse</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <img src="https://www.hospitalserena.cl/wp-content/uploads/2022/01/5-660x440.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Accede a tus examenes online</h5>
                        <p className="card-text">
                            <strong>MediGeeks</strong> te permite acceder a exámenes médicos y descargar sus resultados de exámenes médicos en línea. Esto proporciona comodidad y accesibilidad, ya que los pacientes pueden acceder a sus resultados desde cualquier lugar y en cualquier momento. 
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <a href="/singup">
                                <button className="btn btn-primary me-2 rounded-pill " type="button">registrarse</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    );
}


