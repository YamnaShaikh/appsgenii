import React from 'react'
import Header from '../components/Header'
import image from '../images/company-profile-presentation-tips.jpg'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <Header />

            <div className='container'>
                <div className='content'>
                    <h1 style={{textAlign: 'left', marginTop: '10px'}}>About Us</h1>
                    <p style={{textAlign: 'left'}}>AppsGenii Technologies enable clients to out perform the competition and stay ahead of the innovation curve. Our business experiences are real and so are the results that we bring to our clients. We are always in search of exploring new frontiers for clients to transform their businesses, their thinking and their end results. Throughout all of the assigned phases, our people concentrate on design, usability, functionality and execution. Our Team work together to meet your business objectives with the help of project management and quality assurance designed to make the experience of working with AppsGenii Technologies seamless.
                       </p>
                </div>
                <div className='aboutImg'>
                    <img src={image} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About