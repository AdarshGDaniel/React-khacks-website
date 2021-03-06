import React, { useState, useEffect }from 'react';
import './nav-bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './KHLogo.png';
import { Link as LINK } from 'react-router-dom'

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
        <Navbar.Brand><LINK style={{textDecoration: 'none'}} to="Home"><img width="150px" src={logo} alt="KHacks Logo"/></LINK></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <div className="mr-auto"></div>
            <Nav>
            <Navbar.Text className="nav-buttons"><LINK style={{textDecoration: 'none'}} to="Home">Home</LINK></Navbar.Text>
            <Navbar.Text className="nav-buttons"><LINK style={{textDecoration: 'none'}} to="ContactUs">Contact</LINK></Navbar.Text>
            <Navbar.Text className="nav-buttons"><LINK style={{textDecoration: 'none'}} to="Rules">Rules</LINK></Navbar.Text>
            <div className="underbar"></div>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBootstrap;