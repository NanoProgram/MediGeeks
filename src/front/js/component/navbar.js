import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../styles/navbar.css";

export function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <h3>Menu</h3>
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>MediGeeks</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button variant="info" className="long-button">
            <h4>Atencion Medica</h4>
          </Button>
          &nbsp;
          <Button variant="info" className="long-button">
            <h4>Reservar Hora</h4>
          </Button>{" "}
          &nbsp;
          <Button variant="info" className="long-button">
            <h4>Consultar Hora</h4>
          </Button>
          &nbsp;
          <Button variant="info" className="long-button">
            <h4>Centros Medicos</h4>
          </Button>{" "}
          &nbsp;
          <Button variant="info" className="long-button">
            <h4> Perfil</h4>
          </Button>{" "}
          &nbsp;
          <Button variant="info" className="long-button">
            <h4> Cerrar Sesion</h4>{" "}
          </Button>{" "}
          &nbsp;
          <Button variant="info" className="long-button">
            <h4> Recuperar Contraseña</h4>{" "}
          </Button>{" "}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
