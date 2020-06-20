import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';


export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={800}
                        src={Img1}
                        alt="Test"
                    />
                    <Carousel.Caption>
                        <h3>Test</h3>
                        <p>Test text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        height={800}
                        src={Img2}
                        alt="Test"
                    />
                    <Carousel.Caption>
                        <h3>Test</h3>
                        <p>Test text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        height={800}
                        src={Img3}
                        alt="Test"
                    />
                    <Carousel.Caption>
                        <h3>Test</h3>
                        <p>Test text</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}