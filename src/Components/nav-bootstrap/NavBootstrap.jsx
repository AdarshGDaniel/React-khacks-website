import React, { useState, useEffect }from 'react';
import './nav-bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './KHLogo.png';
import { Link, animateScroll as scroll } from "react-scroll";

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
            <Nav.Link className="nav-buttons"><Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={500}>About</Link></Nav.Link>
            <Nav.Link className="nav-buttons"><Link activeClass="active" to="PastEvents" spy={true} smooth={true} offset={0} duration={500}>Past Events</Link></Nav.Link>
            <Nav.Link className="nav-buttons"><Link activeClass="active" to="Schedule" spy={true} smooth={true} offset={0} duration={500}>Schedule</Link></Nav.Link>
            <Nav.Link className="nav-buttons"><Link activeClass="active" to="Sponsors" spy={true} smooth={true} offset={0} duration={500}>Sponsors</Link></Nav.Link>
            <Nav.Link className="nav-buttons" href="ContactUs#">Contact</Nav.Link>
            <Nav.Link className="nav-buttons" href="Rules#">Rules</Nav.Link>
            <div class="underbar"></div>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBootstrap;