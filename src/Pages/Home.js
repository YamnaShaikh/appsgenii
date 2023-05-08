import React from 'react'
import '../App.css'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { Carousel } from 'react-bootstrap';
import image1 from '../images/company-profile-presentation-tips.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/Company-Management.jpg';
import Footer from '../components/Footer';
import imge1 from '../images/Banner-6-350x250.jpg'
import imge2 from '../images/how-we-work-350x250.jpeg'
import imge3 from '../images/thought-leadership-service.jpeg'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Carousel >
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
                <div className='Cards'>
                <div>
                    <Card style={{ width: '18rem' }} className='card'>
                        <Card.Img variant="top" src={imge1} />
                        <Card.Body>
                            <Card.Title>Why Appsgenii?</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }} className='card'>
                        <Card.Img variant="top" src={imge2} />
                        <Card.Body>
                            <Card.Title>How We Works</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }} className='card'>
                        <Card.Img variant="top" src={imge3} />
                        <Card.Body>
                            <Card.Title>Through leadership</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home