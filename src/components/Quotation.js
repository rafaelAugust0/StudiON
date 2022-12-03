import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Quote from '../images/quote.jpg';

import './Quotation.scss'

const Quotation = () => {

    return (
        
        <section className="quote" style={{backgroundImage: `url(${Quote})`}}>
            <Container className="d-flex justify-content-lg-end">
                <Row className="my-5 description">
                    <Col className="px-3 py-3">
                        <h6 className="pt-5">Você informa a temática  e nós planejamos um evento com tecnologia e</h6>
                        <h2 className="pt-3 pb-5"><span className="title d-block">Muito +</span> diversão</h2>
                        <Link to='/contatos'>
                            <Button variant="outline-warning" size="lg" className="my-3">
                                Fazer cotação
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Quotation;