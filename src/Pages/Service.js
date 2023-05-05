import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import '../App.css'

const Service = () => {
    return (
        <div>
            <Header />
            <div className='Cards'>
                <div>
                    <Card style={{ width: '18rem' }} className='card'>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
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
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
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
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
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
    )
}

export default Service