import React from 'react'
import "../../styles/inicio.css"
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";

export const Inicio = () => {
  return (
    <nav class="navbar bg-body-tertiary">
     <img
    src={Medigeeks_Logo}
    alt="Bootstrap"
    width="150"
    height="150"
    className="transparent-img"
    />
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Nuestros Servicios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Galeria</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Opiniones de nuestros clientes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Contactenos</a>
      </li>
      
      <button class="btn btn-outline-success me-2" type="button">Ingresar</button>
    
    </ul>
    
  </nav>
  
      
 
  );
};
