import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import './Galeria.scss'

import galeria from '../images/galeria.jpg'
import g1 from '../images/g1.jpg'
import g2 from '../images/g2.jpg'
import g3 from '../images/g3.jpg'
import g4 from '../images/g4.jpg'
import g5 from '../images/g5.jpg'
import g6 from '../images/g6.jpg'
import g7 from '../images/g7.jpg'
import g8 from '../images/g8.jpg'
import g9 from '../images/g9.jpg'
import g10 from '../images/g10.jpg'



const Galeria = () => {

    return (
        <section className="gallery">
            <div className="gallery" style={{backgroundImage: `url(${galeria})`}}>
                <Container>
                    <Row>
                        <Col className="my-5 px-lg-5 d-block d-lg-flex flex-column align-items-end">
                            <h1 className="mb-5">.galeria</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente repellat ex quibusdam beatae! Pariatur veniam atque perferendis ullam vero
                                reprehenderit ipsam libero autem? Quod eum sapiente explicabo voluptatem. Voluptatum, dolor?
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="mt-3 flex-lg-row flex-column">
                    <Col className="mb-3">
                        <img src={g1} alt="gallery 1"/>
                    </Col>
                    <Col className="mb-3">
                        <img src={g2} alt="gallery 2"/>
                    </Col>
                    <Col className="mb-3">
                        <img src={g3} alt="gallery 3"/>
                    </Col>
                    <Col className="mb-3">
                        <img src={g4} alt="gallery 4"/>
                    </Col>
                </Row>

                <Row className="flex-lg-row flex-column">
                    <Col className="mb-3">
                        <img src={g5} alt="gallery 5"/>
                    </Col>
                    <Col className="mb-3">
                        <img src={g6} alt="gallery 6"/>
                    </Col>
                    <Col className="mb-3">
                        <img src={g7} alt="gallery 7"/>
                    </Col>
                    <Col className="mb-3">
                        <img src={g8} alt="gallery 8"/>
                    </Col>
                </Row>

                <Row className="flex-lg-row flex-column">
                    <Col className="mb-3">
                        <img src={g9} alt="gallery 9"/>
                    </Col>
                    <Col className="mb-3">
                        <img src={g10} alt="gallery 10"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Galeria;