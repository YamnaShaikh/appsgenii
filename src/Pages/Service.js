import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import image1 from '../images/cybersecurity-Appsgenii.jpg'
import image2 from '../images/ico.jpeg'
import image3 from '../images/AG_blockchain.jpg'
import image4 from '../images/MACHING-LEARNING.jpg'
import image5 from '../images/mobile-app-design-services-1024x584.jpeg'
import image6 from '../images/web-development-services-1024x584.jpeg'
import '../App.css'
import Footer from '../components/Footer'

const Service = () => {
    return (
        <div>
            <Header />
            <div className='Cards'>
                <div>
                    <Card style={{ width: '18rem' }} className='card'>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Cyber Security</Card.Title>
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
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>Initial Coin Offering</Card.Title>
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
                        <Card.Img variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>Block Chain</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
            <div className='Cards'>
                <div>
                    <Card style={{ width: '18rem' }} className='card'>
                        <Card.Img variant="top" src={image4} />
                        <Card.Body>
                            <Card.Title>Development</Card.Title>
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
                        <Card.Img variant="top" src={image5} />
                        <Card.Body>
                            <Card.Title>Mobile App Design</Card.Title>
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
                        <Card.Img variant="top" src={image6} />
                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Service