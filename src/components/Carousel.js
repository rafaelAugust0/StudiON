import React from "react";
import { Carousel, Button } from "react-bootstrap";

import slide1 from '../images/slider1.jpg';
import slide2 from '../images/slider2.jpg';
import slide3 from '../images/slider3.jpg';
import mobile from '../images/mobile.jpeg'

import './Carousel.scss'

const Hero = () => {

    return (
        <Carousel>
            <Carousel.Item>

            <img
                className=" d-lg-none d-block w-100"
                src={mobile}
                alt="First slide"
                />

                <img
                className=" d-none d-lg-block w-100"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className="description">
                        <p><span className="event">Próximo evento - </span> dia 25 de setembro ás 19h</p>
                        <h1><span className="title">Creative</span> Minds</h1>
                        <Button variant="outline-warning" size="lg" className="my-3">
                            Conferir
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <div className="description">
                        <p><span className="event">Próximo evento - </span> dia 03 de outubro ás 15h</p>
                        <h1><span className="title">Event</span> Listener</h1>
                        <Button variant="outline-warning" size="lg" className="my-3">
                            Conferir
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <div className="description">
                        <p><span className="event">Próximo evento - </span> dia 02 de novembro ás 23h</p>
                        <h1><span className="title">Fest</span> Forward</h1>
                        <Button variant="outline-warning" size="lg" className="my-3">
                            Conferir
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero;