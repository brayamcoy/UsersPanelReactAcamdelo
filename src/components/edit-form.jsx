import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col} from "react-bootstrap"

export default function EditForm (props){
    const {name, lastname, email, password} = props.user;
    return (
        <div>
             <Form onSubmit={props.updateUser} onInput={props.editInput}>
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required name="name" type="text" placeholder="Nombre" value={name}/>
            </Form.Group>

            <Form.Group as={Col} controlId="lastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control required name="lastname" type="text" placeholder="Apellido" value={lastname}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control required name="email" type="email" placeholder="Correo" value={email}/>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control required name="password" type="password" placeholder="Contraseña" value={password} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Actualizar
          </Button>
          <Button onClick={props.changeForm} variant="warning" className="ml-2">
            Agregar
          </Button>
        </Form>

            {/* <label className="label">ACTUALIZAR</label>
            <form onSubmit={props.updateUser} onInput={props.editInput}>
            <input name="name" type="text" placeholder="Nombre" value={name}  />
            <input name="lastname" type="text" placeholder="Apellidos" value={lastname} />
            <input name="email" type="email" placeholder="Email" value={email}  />
            <input name="password" type="password" placeholder="Contraseña" value={password} />
            <input type="submit" value="Actualizar usuario" />
            </form> */}
        </div>
    )
}