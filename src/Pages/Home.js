import React from 'react'
import '../App.css'
import Header from '../components/Header'
import { Carousel } from 'react-bootstrap';
import image1 from '../images/company-profile-presentation-tips.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/Company-Management.jpg';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Carousel>
                    <Carousel.Item className='slider'>
                        <img
                            className="d-block w-100 images"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='slider'> 
                        <img
                            className="d-block w-100 images"
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img
                            className="d-block w-100 images"
                            src={image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Home