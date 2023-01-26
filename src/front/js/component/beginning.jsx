import React from 'react'
import "../../styles/inicio.css"
import { One } from "../component/one.jsx"

export const Inicio = () => {
  return (
    <div className='container'>
      <div className='row'>
<div className='col'>    
    <nav class="navbar bg-body-tertiary">
      <h3 style={{ color: "white" }}>MediGeeks</h3>
      
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#services" style={{ color: "white" }}>Quienes somos </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#nuestros" style={{ color: "white" }}>Nuestros servicios </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Gallery" style={{ color: "white" }}>Galeria</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#opinions" style={{ color: "white" }}>Opiniones de nuestros clientes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#contact" style={{ color: "white" }}>Contactenos</a>
        </li>
        <a href="/login">
          <button className="btn btn-primary me-2" type="button">Ingresar</button>
        </a>
        <a href="/singup">
          <button className="btn btn-primary me-2 " type="button">registrarse</button>
        </a>
      </ul>
    </nav>
    </div>
    </div>
  </div>
  );
};
