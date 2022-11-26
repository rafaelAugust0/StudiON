import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import sendForm from '../../src/images/send-form.png'

import './Footer.scss'

const Footer = () => {

    return (
        <footer className="py-5">
            <Container>
                    <Row className="d-flex align-items-center">
                        <Col href="/">
                            <div className="d-flex flex-column w-50 logo">
                                <h1>Studi<span className="yellow">on</span></h1>
                                <span className="subtitle">eventos</span>
                            </div>
                        </Col>

                        <Col className="form align-items-center">
                            <Form.Label>
                                <span className="news">Receba novidades sobre os eventos e promoções:</span>
                            </Form.Label>
                            <Form className="d-flex">
                                <Form.Group className="form-newsletter" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Digite seu email" />
                                </Form.Group>
                                
                                <Button variant="primary" type="submit">
                                    <img src={sendForm} alt="send form"/>
                                </Button>
                            </Form>
                        </Col>

                        <Col className="d-flex align-items-center justify-content-lg-end justify-content-center">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#fff" className="mx-2"/>
                            <FontAwesomeIcon icon={faTwitter} size="2x" color="#fff" className="mx-2"/>
                            <FontAwesomeIcon icon={faYoutube} size="2x" color="#fff" className="mx-2"/>
                        </Col>

                        <hr className="mt-5"/>
                        <small className="text-center"> StudiON - projeto recriado com ReactJS por @rafaelAugust0</small>
                    </Row>
            </Container>
        </footer>
    )
}

export default Footer;