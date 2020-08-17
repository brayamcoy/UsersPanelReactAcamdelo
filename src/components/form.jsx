import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col} from "react-bootstrap"

export default function FormUser (props){ 
    return (
      <div>
        <Form onInput={props.handleInput} onSubmit={props.addUser}>
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required name="name" type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group as={Col} controlId="lastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control required name="lastname" type="text" placeholder="Apellido" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control required name="email" type="email" placeholder="Correo"/>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control required name="password" type="password" placeholder="Contraseña"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    );
 }
