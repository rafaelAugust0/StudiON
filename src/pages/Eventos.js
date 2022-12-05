import React from "react";
import { Container, Row, Col, Button, useAccordionButton, Accordion, Card } from "react-bootstrap";
import { faClock, faMap } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Eventos.scss'
import eventos from '../images/eventos.jpg';
import event1 from '../images/event1.jpg';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.jpg';
import event4 from '../images/event4.jpg';
import { Link } from "react-router-dom";

function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
        );
    
        return (
        <button
            className="moreInfo"
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
        );
    }


const Eventos = () => {

    return(
        <section>
            <div className="events" style={{backgroundImage: `url(${eventos})`}}>
                <Container>
                    <Row>
                        <Col className="my-5 px-lg-5">
                            <h1 className="mb-5">.eventos</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente repellat ex quibusdam beatae! Pariatur veniam atque perferendis ullam vero
                                reprehenderit ipsam libero autem? Quod eum sapiente explicabo voluptatem. Voluptatum, dolor?
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="list-event">
                <Row className="mt-5 flex-lg-row flex-column text-center align-items-center">
                    <Col>
                        <img src={event1} alt="creative minds"/>
                    </Col>
                    <Col className="mt-3">
                        <h4>Creative Minds</h4>
                        <h5>
                            <FontAwesomeIcon icon={faClock} color="#ffc500" className="mx-2"/>
                            25 de setembro às 19h
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,
                            sed diam nonummy nibh euismod tincidunt
                        </p>
                    </Col>
                    <Col>
                        <Link to='/contatos'>
                            <Button variant="warning" size="lg" className="my-3" onClick="scroll(0,0)">
                                Comprar ingresso
                            </Button>
                        </Link>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="0">+ informações</CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>
                                        Maecenas eros erat, tristique nec volutpat quis, lacinia lacinia diam.
                                        Pellentesque blandit velit at ante aliquet facilisis.
                                        Nam placerat egestas lectus eget consectetur. Proin sodales lobortis turpis
                                        et elementum. Donec commodo venenatis est a sodales. Mauris sed nisl consequat
                                        lectus mollis venenatis. In hac habitasse platea dictumst. Sed iaculis luctus porta.
                                        Donec feugiat sollicitudin justo, et scelerisque tellus sollicitudin a.
                                        Integer id ligula ut turpis molestie blandit.
                                    </p>
                                    <h5>
                                        <FontAwesomeIcon icon={faMap} color="#ffc500" className="mx-2"/>
                                        Como chegar
                                    </h5>
                                    <h6>Arena Show Business
                                        <small className="d-block">Rua Oswaldo Cruz nº 45 - SC 401 - Florianópolis / SC</small>
                                    </h6>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>

                <Row className="mt-5 flex-lg-row flex-column text-center align-items-center">
                    <Col>
                        <img src={event2} alt="event listener"/>
                    </Col>
                    <Col className="mt-3">
                        <h4>Event Listener</h4>
                        <h5>
                            <FontAwesomeIcon icon={faClock} color="#ffc500" className="mx-2"/>
                            03 de outubro às 15h
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,
                            sed diam nonummy nibh euismod tincidunt
                        </p>
                    </Col>
                    <Col>
                        <Link to='/contatos'>
                            <Button variant="warning" size="lg" className="my-3" onClick="scroll(0,0)">
                                Comprar ingresso
                            </Button>
                        </Link>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="0">+ informações</CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>
                                        Maecenas eros erat, tristique nec volutpat quis, lacinia lacinia diam.
                                        Pellentesque blandit velit at ante aliquet facilisis.
                                        Nam placerat egestas lectus eget consectetur. Proin sodales lobortis turpis
                                        et elementum. Donec commodo venenatis est a sodales. Mauris sed nisl consequat
                                        lectus mollis venenatis. In hac habitasse platea dictumst. Sed iaculis luctus porta.
                                        Donec feugiat sollicitudin justo, et scelerisque tellus sollicitudin a.
                                        Integer id ligula ut turpis molestie blandit.
                                    </p>
                                    <h5>
                                        <FontAwesomeIcon icon={faMap} color="#ffc500" className="mx-2"/>
                                        Como chegar
                                    </h5>
                                    <h6>Arena Show Business
                                        <small className="d-block">Rua Oswaldo Cruz nº 45 - SC 401 - Florianópolis / SC</small>
                                    </h6>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>

                <Row className="mt-5 flex-lg-row flex-column text-center align-items-center">
                    <Col>
                        <img src={event3} alt="fest forward"/>
                    </Col>
                    <Col className="mt-3">
                        <h4>Fest Forward</h4>
                        <h5>
                            <FontAwesomeIcon icon={faClock} color="#ffc500" className="mx-2"/>
                            02 de novembro às 23h
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,
                            sed diam nonummy nibh euismod tincidunt
                        </p>
                    </Col>
                    <Col>
                        <Link to='/contatos'>
                            <Button variant="warning" size="lg" className="my-3" onClick="scroll(0,0)">
                                Comprar ingresso
                            </Button>
                        </Link>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="0">+ informações</CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>
                                        Maecenas eros erat, tristique nec volutpat quis, lacinia lacinia diam.
                                        Pellentesque blandit velit at ante aliquet facilisis.
                                        Nam placerat egestas lectus eget consectetur. Proin sodales lobortis turpis
                                        et elementum. Donec commodo venenatis est a sodales. Mauris sed nisl consequat
                                        lectus mollis venenatis. In hac habitasse platea dictumst. Sed iaculis luctus porta.
                                        Donec feugiat sollicitudin justo, et scelerisque tellus sollicitudin a.
                                        Integer id ligula ut turpis molestie blandit.
                                    </p>
                                    <h5>
                                        <FontAwesomeIcon icon={faMap} color="#ffc500" className="mx-2"/>
                                        Como chegar
                                    </h5>
                                    <h6>Arena Show Business
                                        <small className="d-block">Rua Oswaldo Cruz nº 45 - SC 401 - Florianópolis / SC</small>
                                    </h6>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>

                <Row className="my-5 flex-lg-row flex-column text-center align-items-center">
                    <Col>
                        <img src={event4} alt="daily rock"/>
                    </Col>
                    <Col className="mt-3">
                        <h4>Daily Rock</h4>
                        <h5>
                            <FontAwesomeIcon icon={faClock} color="#ffc500" className="mx-2"/>
                            15 de novembro às 22h
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,
                            sed diam nonummy nibh euismod tincidunt
                        </p>
                    </Col>
                    <Col>
                        <Link to='/contatos'>
                            <Button variant="warning" size="lg" className="my-3" onClick="scroll(0,0)">
                                Comprar ingresso
                            </Button>
                        </Link>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="0">+ informações</CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>
                                        Maecenas eros erat, tristique nec volutpat quis, lacinia lacinia diam.
                                        Pellentesque blandit velit at ante aliquet facilisis.
                                        Nam placerat egestas lectus eget consectetur. Proin sodales lobortis turpis
                                        et elementum. Donec commodo venenatis est a sodales. Mauris sed nisl consequat
                                        lectus mollis venenatis. In hac habitasse platea dictumst. Sed iaculis luctus porta.
                                        Donec feugiat sollicitudin justo, et scelerisque tellus sollicitudin a.
                                        Integer id ligula ut turpis molestie blandit.
                                    </p>
                                    <h5>
                                        <FontAwesomeIcon icon={faMap} color="#ffc500" className="mx-2"/>
                                        Como chegar
                                    </h5>
                                    <h6>Arena Show Business
                                        <small className="d-block">Rua Oswaldo Cruz nº 45 - SC 401 - Florianópolis / SC</small>
                                    </h6>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Eventos;