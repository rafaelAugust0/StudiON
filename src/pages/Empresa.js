import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import './Empresa.scss'
import empresa from '../images/empresa.jpg'
import companyMan from  '../images/company-men.png'
import partners from '../images/partners.png'
import video from '../images/company-video.png'

const Empresa = () => {
    return (
        <section>
            <div className="company" style={{backgroundImage: `url(${empresa})`}}>
                <Container>
                    <Row>
                        <Col className="my-5 px-lg-5">
                            <h1 className="mb-5">.empresa</h1>
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
                <Row className="company__introduction d-flex flex-lg-row flex-column">
                    <Col className="mt-5">
                        <h3 className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                        </p>
                        <p>
                            Maecenas eros erat, tristique nec volutpat quis, lacinia lacinia diam.
                            Pellentesque blandit velit at ante aliquet facilisis. Nam placerat egestas lectus eget
                            consectetur. Proin sodales lobortis turpis et elementum. Donec commodo venenatis est a sodales.
                            Mauris sed nisl consequat lectus mollis venenatis. In hac habitasse platea dictumst.
                            Sed iaculis luctus porta. Donec feugiat sollicitudin justo, et scelerisque tellus sollicitudin a.
                            Integer id ligula ut turpis molestie blandit..
                        </p>
                    </Col>
                    <Col className="mt-5">
                        <img src={companyMan} alt="company business man" />
                    </Col>
                </Row>
            </Container>
            <div className="company__partners">
                <Container className="py-5">
                    <Row>
                        <Col>
                            <h3 className="text-center mb-5">Quem confia no nosso trabalho</h3>
                            <img src={partners} alt="partners logo"/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="company__video my-5">
                <Row>
                    <Col>
                        <img src={video} alt="video"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Empresa;