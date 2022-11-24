import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import image from '../images/institutional.jpg'

import './Institutional.scss'

const Institutional = () => {

    return (
        <section className="institutional">
            <Container>
                <Row className="d-flex flex-lg-row flex-column mt-5 mb-5">
                    <Col>
                        <img src={image} alt="institutional"/>
                    </Col>
                    <Col>
                        <h6 className="pt-5 pb-3">Fazemos o seu evento acontecer</h6>
                        <h4 className="pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Odio veniam amet autem alias fugiat, labore laborum ex soluta dolores
                            quidem vel dolorem facilis enim tempora doloremque exercitationem omnis reprehenderit velit.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Institutional;