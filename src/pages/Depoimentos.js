import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import './Depoimentos.scss'

import depoimentos from '../images/depoimentos.jpg'
import depoimento1 from '../images/saldanha.png'
import depoimento2 from '../images/bastos.png'
import depoimento3 from '../images/silva.png'


const Depoimentos = () => {

    return (
        <section className="testimonyal">
            <div className="testimonyal" style={{backgroundImage: `url(${depoimentos})`}}>
                <Container>
                    <Row>
                        <Col className="my-5 px-lg-5 d-block d-lg-flex flex-column align-items-end">
                            <h1 className="mb-5">.depoimentos</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente repellat ex quibusdam beatae! Pariatur veniam atque perferendis ullam vero
                                reprehenderit ipsam libero autem? Quod eum sapiente explicabo voluptatem. Voluptatum, dolor?
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="testimonyal__people py-3">
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <div className="d-flex align-items-center justify-center text-center flex-column">
                                <img
                                    className="d-block"
                                    src={depoimento1}
                                    alt="first slide"
                                />
                                <h2>Alberto Saldanha<span className="d-block">CEO - VITAMUSIC</span></h2>
                                <FontAwesomeIcon icon={faQuoteLeft} color="#000" size="3x" className="my-2"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna consectetuer adipiscing elit,
                                    sed diam nonummy .
                                </p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="d-flex align-items-center justify-center text-center flex-column">
                                <img
                                    className="d-block"
                                    src={depoimento2}
                                    alt="second slide"
                                />
                                <h2>Mariana Bastos<span className="d-block">PRODUTORA - +MÍDIA</span></h2>
                                <FontAwesomeIcon icon={faQuoteLeft} color="#000" size="3x" className="my-2"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna consectetuer adipiscing elit,
                                    sed diam nonummy .
                                </p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="d-flex align-items-center justify-center text-center flex-column">
                                <img
                                    className="d-block"
                                    src={depoimento3}
                                    alt="third slide"
                                />
                                <h2>Guilherme Silva<span className="d-block">GERENTE - COMUSIC</span></h2>
                                <FontAwesomeIcon icon={faQuoteLeft} color="#000" size="3x" className="my-2"/>
                                <p className="mt-3">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna consectetuer adipiscing elit,
                                    sed diam nonummy .
                                </p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        </section>
    )
}

export default Depoimentos;