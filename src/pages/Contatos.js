import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";

import './Contatos.scss'
import contato from '../images/contato.jpg'

const Contato = () => {

    return (
        <section className="contact">
            <div className="contact" style={{backgroundImage: `url(${contato})`}}>
                <Container>
                    <Row>
                        <Col className="my-5 px-lg-5 d-block d-lg-flex flex-column align-items-end">
                            <h1 className="mb-5">.contato</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente repellat ex quibusdam beatae! Pariatur veniam atque perferendis ullam vero
                                reprehenderit ipsam libero autem? Quod eum sapiente explicabo voluptatem. Voluptatum, dolor?
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
                <div className="contact__container d-flex flex-lg-row flex-column">
                    <div className="contact__infos w-lg-50 w-100">
                        <Container className="py-5">
                            <Row className="d-flex flex-lg-row flex-column">
                                <Col>
                                    <Container>
                                        <div className="my-3 py-5 text-center">
                                            <h3>Liga pra gente</h3>
                                            <FontAwesomeIcon icon={faPhone} color="#333" className="mx-2"/>
                                            <span>+55 47 0000-0000</span>
                                            <FontAwesomeIcon icon={faWhatsapp} color="#333" className="mx-2"/>
                                            <span>+55 47 0000-0000</span>
                                        </div>
                                        <div className="address my-5 text-center">
                                        <h3>Venha nos fazer uma visita</h3>
                                            <FontAwesomeIcon icon={faMap} color="#333" className="mx-2"/>
                                            <span>Rua Miguel Daux, 129 - Coqueiros Florianópolis / SC</span>
                                        </div>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="contact__form w-lg-50 w-100 py-5">
                        <Col>
                            <Container>
                                <div className="form-contact">
                                    <h3 className="text-center py-3">Deixe sua mensagem</h3>
                                    <Form autoComplete="off">
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Seu nome</Form.Label>
                                            <Form.Control type="text"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Seu email</Form.Label>
                                            <Form.Control type="email"/>
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Label>Sua mensagem</Form.Label>
                                            <textarea className="form-control" rows="5"/>
                                        </Form.Group>

                                        <Button onClick={() => alert('Formulário enviado com sucesso!') }
                                        variant="warning" 
                                        className="my-3 px-5" 
                                        size="lg" 
                                        type="reset">
                                            Enviar
                                        </Button>
                                    </Form>
                                </div>
                            </Container>
                        </Col>
                    </div>
                </div>
                <div className="maprouter">
                    <iframe title="gmaps"
                        src="https://maps.google.com/maps?width=1285&amp;height=400&amp;hl=en&amp;q=Rua Miguel Daux, 129 - Coqueiros Florianópolis / SC&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
        </section>
    )
}

export default Contato;