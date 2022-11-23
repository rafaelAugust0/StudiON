import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import './Counter.scss'

const Counter = () => {
    return (
        <section className="counter d-flex justify-content-center align-items-center">
            <Container className="text-center w-80">
                <Row className="flex-lg-row flex-column">
                    <Col className="py-3">
                        <h3>+ de 500
                            <span className="d-block">eventos realizados</span>
                        </h3>
                    </Col>
                    <Col className="py-3">
                        <h3>+ de 1.000.000
                            <span className="d-block">de ingressos vendidos</span>
                        </h3>
                    </Col>
                    <Col className="py-3">
                        <h3>+ de 300
                            <span className="d-block">empresas atendidas</span>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Counter;