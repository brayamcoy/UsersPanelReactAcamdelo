import React from "react"
import {Navbar, Nav} from 'react-bootstrap'

export default function Navbaruser (){
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" >
            <Navbar.Brand href="#home">Panel de Usuarios</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                <Nav.Link href="https://github.com/brayamcoy"> Hecho por Brayan David </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}