import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

export function SignUp() {
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
          <h3>Sign Up</h3>
          &nbsp;
          <Form.Control
            wrapperClass="mb-4"
            placeholder="Nombre"
            id="form1"
            type="Nombre"
          />
          &nbsp;
          <Form.Control
            wrapperClass="mb-4"
            placeholder="Rut"
            id="form1"
            type="Rut"
          />
          &nbsp;
          <Form.Control
            wrapperClass="mb-4"
            placeholder="Previsión"
            id="form1"
            type="Previsión"
          />
          &nbsp;
          <Form.Control
            wrapperClass="mb-4"
            placeholder="Email"
            id="form1"
            type="email"
          />
          &nbsp;
          <Form.Control
            wrapperClass="mb-4"
            placeholder="Password"
            id="form1"
            type="password"
          />
          &nbsp;
          <Form.Control
            wrapperClass="mb-4"
            placeholder="Confirma Password"
            id="form1"
            type="Confirma password"
          />
          &nbsp;
          <Button className="w-100 mb-4" size="md">
            Sign up
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
