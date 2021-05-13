import React, { useState, useEffect }from 'react';
import './nav-bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './KHLogo.png';

function NavBootstrap(props) {

    const [showNav, setShowNav] = useState(false);

    const listenaction = () => {
        if(window.scrollY >= 80){
            setShowNav(true);
        }else if(window.scrollY < 80){
            setShowNav(false);
        }
    }

    useEffect(() =>{
        if (props.page){
            setShowNav(true);
        }
        else{
            window.addEventListener('scroll', listenaction);
        }
    }, [])

    return (
        <Navbar className={showNav ? 'nav-main-bar active':'nav-main-bar'} collapseOnSelect expand="lg" bg="transperent" sticky="top" variant="light">
        <Navbar.Brand href="/#"><img width="150px" src={logo} alt="KHacks Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <div className="mr-auto"></div>
            <Nav>
            <Nav.Link className="nav-buttons" href="/#About">About</Nav.Link>
            <Nav.Link className="nav-buttons" href="/#PastEvents">Past Events</Nav.Link>
            <Nav.Link className="nav-buttons" href="/#Schedule">Schedule</Nav.Link>
            <Nav.Link className="nav-buttons" href="/#Sponsors">Sponsors</Nav.Link>
            <Nav.Link className="nav-buttons" href="/ContactUs">Contact</Nav.Link>
            <Nav.Link className="nav-buttons" href="Rules">Rules</Nav.Link>
            <div className="underbar"></div>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBootstrap;