import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap'
import AppsGeniiLogo from '../images/AppsGenii-Technologies.png'
import '../App.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" className='container'>
                <Navbar.Brand href="/" className='logo'>
                    <img src={AppsGeniiLogo} alt='logo' style={{width: '50px', height: '50px', marginRight: '10px'}} />AppsGenii</Navbar.Brand>
                <Nav className="ms-auto navbar">
                    <Nav.Link>
                        <NavLink to="/" className='nav'>Home</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/About" className='nav'>About</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/Service" className='nav'>Service</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/Contact" className='nav'>Contact</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/countries" className='nav'>Countries</NavLink>
                    </Nav.Link>
                </Nav>

            </Navbar>
        </div>
    )
}

export default Header