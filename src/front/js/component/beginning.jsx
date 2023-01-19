import React from 'react'
import "../../styles/inicio.css"
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";

export const Inicio = () => {
  return (
   
    <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={Medigeeks_Logo} alt="Bootstrap" width="150" height="120"></img>
    </a>
    <button type="button" class="btn btn-primary">Nuestros Servicios</button>
    <button type="button" class="btn btn-primary">Galeria</button>
    <button type="button" class="btn btn-primary">Opiniones de nuestros clientes</button>
    <button type="button" class="btn btn-primary">Contactenos</button>
    <button type="button" class="btn btn-primary">Ingresar</button>
  </div>
</nav>
  );
};
