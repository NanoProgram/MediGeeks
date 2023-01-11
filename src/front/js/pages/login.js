/*import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

  export function Login () {
  return (
   
    <Container className='text-align: center'>
    <Form  >
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Sign whit Gmail
      </Button>  
      &nbsp;&nbsp;
      <Button variant="secondary" type="submit">
        Sign in
      </Button>
    </Form>
        </Container>
    
  );
};
*/
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export function Login() {
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
          <Button className="w-100 mb-4" size="md">
            sign up
          </Button>
          <div className="text-center">
            <p>or sign up with:</p>

            <Button
              className="mx-3"
              variant="light"
              style={{
                boxShadow: "2px 2px 3px #ccc",
                border: "1px solid #ccc",
              }}
            >
              <FontAwesomeIcon icon={faGoogle} size="sm" />
            </Button>
          </div>
          <Button variant="link" onClick={() => this.handleForgotPassword()}>
            Se te olvidó la contraseña?
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
