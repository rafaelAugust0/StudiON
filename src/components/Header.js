import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import './Header.scss'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand href="/">
                        <div className="d-flex flex-column">
                            <h1>Studi<span className="yellow">on</span></h1>
                            <span className="text-end subtitle">eventos</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <div>
                        <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto py-3">
                                        <Nav.Link href="/empresa">Empresa</Nav.Link>
                                        <Nav.Link href="/eventos">Eventos</Nav.Link>
                                        <Nav.Link href="/galeria">Galeria</Nav.Link>
                                        <Nav.Link href="/depoimentos">Depoimentos</Nav.Link>
                                        <Nav.Link href="/contatos">Contatos</Nav.Link>
                                </Nav>
                        </Navbar.Collapse>
                    </div>
            </Container>
        </Navbar>
    )
}

export default Header;