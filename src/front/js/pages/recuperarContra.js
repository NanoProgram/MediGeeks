import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

export function Recuperar() {
  return (
    <Container fluid>
      <div
        className="p-5"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
          height: "300px",
        }}
      ></div>

      <Card
        className="d-flex justify-content-center align-items-center h-100"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
        }}
      >
        <Card.Body className="p-5 text-center">
          <h1 className="fw-bold mb-5">MediGeeks</h1>
          <Form.Control
            wrapperClass="mb-4"
            placeholder="Escribe tu Email"
            id="form1"
            type="email"
          />
          &nbsp;
          <Button className="w-100 mb-4" size="md">
            Recuperar
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
