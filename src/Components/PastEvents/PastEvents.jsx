import React from 'react';
import './PastEvents.css'
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from './Assets/AI.JPG'
import img2 from './Assets/git and github.png'
import img3 from './Assets/socket.png'
import img4 from './Assets/Linux funda.png'
import img5 from './Assets/Comp.png'
import img6 from './Assets/CTF 2.png'
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardsScroll from './CardsScroll'

function PastEvents(props) {

    const state = {
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
    }


    return (
        <section className = "container-fluid mar-top-bot-50 mar-bot-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
            <h2 className="align-center">Past Events</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <OwlCarousel 
                className='owl-theme container mar-top-50' 
                item = {3}
                autoplay = {true}
                navText
                autoplayTimeout = {3000}
                dots = {false}
                margin = {10}
                loop
                responsive = {state.responsive}
                data-aos="fade-up" data-aos-delay="300">
                <CardsScroll image={img1} Title="AI BOOTCAMP 2022" description="KHacks had it's first offline event after the pandemic. A 3 day bootcamp on AI was conducted to give students of all departments a good idea of how AI works and it's uses." Date= "14 to 16 Mar 2022" />
                <CardsScroll image={img2} Title="GIT & GITHUB" description="Git and GitHub are version control system used in most of the programming companies to maintain the versions of their code. This concept is important for anyone learning to code." Date= "19 Feb 2022" />
                <CardsScroll image={img3} Title="SOCKET PROGRAMMING" description="In today's world all communications are through networks, KHacks conducted this workshop to make the students understand how communication with each other through network is possible." Date= "16 Feb 2022" />
                <CardsScroll image={img4} Title="LINUX FUNDAMENTALS" description="Linux is essential for all computer related fields. KHacks trainers helped the students get a introduction and a hands on with this kernal." Date= "12 Feb 2022" />
                <CardsScroll image={img5} Title="COMPUTATIONAL THINKING IN PYTHON" description="KHacks took the students into a journey of thinking and solving problems with programming language. The students got a hands on with solving problems with python." Date= "05 Feb 2022" />
                <CardsScroll image={img6} Title="BASICS OF CTF (EXCLUSIVE FOR 1ST YEARS)" description="Since the First years have joined late and to give them an awareness of the threats online, CTF basics was conducted which helped the students to gain knowledge on the important fields of cyber security." Date= "23 Oct 2021" />
            </OwlCarousel>
            <Link to="/PastEvents" style={{ textDecoration: 'none' }} className="container Button-center-past-event"><Button>See more</Button></Link>
        </section>
    );
}

export default PastEvents;