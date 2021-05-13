import React from 'react';
import './PastEvents.css'
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from './Assets/pic5.jpg'
import img2 from './Assets/pic01.jpg'
import img3 from './Assets/pic02.jpg'
import img4 from './Assets/pic7.jpg'
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
                <div class='item'>
                    <Card className="event-card" style={{maxWidth: "345px"}}>
                        <CardActionArea >
                            <CardMedia
                            style={{height: "240px"}}
                            image={img2}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" alignLeft>
                            HACKING WITH AMAZON ALEXA
                            </Typography>
                            <Typography variant="body" className="content-text-date" component="p">20th Feb 2021</Typography>
                            <Typography className="content-text-card" variant="body2" component="p">
                                We have conducted Hacking with Amazon Alexa workshop in association with MLH Local Host continuously for the past two years.During this workshop participants will be taught the basics of how to build skills for Amazon Alexa to run on Alexa devices like the Amazon Tap or Echo.
                            </Typography>
                            <FiberNewOutlinedIcon style={{fill: "#00AEEF"}}/>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div class='item'>
                    <Card className="event-card" style={{maxWidth: "345px"}}>
                        <CardActionArea >
                            <CardMedia
                            style={{height: "240px"}}
                            image={img1}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            HACK THE TECHNICAL INTERVIEW: ALGORITHMS PRACTICE
                            </Typography>
                            <Typography variant="body" className="content-text-date" component="p">20th Feb 2021</Typography>
                            <Typography className="content-text-card" variant="body2" color="textSecondary" component="p">
                            In association with MLH Local Host we conducted Hack the Technical Interview workshop.
During this workshop, students learned strategies to perform better in technical interviews.
                            </Typography>
                            <FiberNewOutlinedIcon style={{fill: "#00AEEF"}}/>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div class='item'>
                    <Card className="event-card" style={{maxWidth: "345px"}}>
                        <CardActionArea >
                            <CardMedia
                            style={{height: "240px"}}
                            image={img3}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            INTRODUCTION TO DOCKER
                            </Typography>
                            <Typography variant="body" className="content-text-date" component="p">20th Feb 2021</Typography>
                            <Typography className="content-text-card" variant="body2" color="textSecondary" component="p">
                            During this workshop students were taught the basics of Docker and Software Containers. The workshop covered setting up Docker, running first container, creating a basic web application with Python and Docker, and how to push the Docker Image to DockerHub.
                            </Typography>
                            <FiberNewOutlinedIcon style={{fill: "#00AEEF"}}/>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div class='item'>
                    <Card className="event-card" style={{maxWidth: "345px"}}>
                        <CardActionArea >
                            <CardMedia
                            style={{height: "240px"}}
                            image={img4}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            PYTHON GUI
                            </Typography>
                            <Typography variant="body" className="content-text-date" component="p">20th Feb 2021</Typography>
                            <Typography className="content-text-card" variant="body2" color="textSecondary" component="p">
                            Conducted first self-hosted workshop on python using GUI using Tkinter and Django Web framework on 17th Dec 2018.
                            </Typography>
                            <FiberNewOutlinedIcon style={{fill: "#00AEEF"}}/>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div class='item'>
                    <Card className="event-card" style={{maxWidth: "345px"}}>
                        <CardActionArea >
                            <CardMedia
                            style={{height: "240px"}}
                            image={img2}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body" className="content-text-date" component="p">20th Feb 2021</Typography>
                            <Typography className="content-text-card" variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            <FiberNewOutlinedIcon style={{fill: "#00AEEF"}}/>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div class='item'>
                    <Card className="event-card" style={{maxWidth: "345px"}}>
                        <CardActionArea >
                            <CardMedia
                            style={{height: "240px"}}
                            image={img2}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body" className="content-text-date" component="p">20th Feb 2021</Typography>
                            <Typography className="content-text-card" variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            <FiberNewOutlinedIcon style={{fill: "#00AEEF"}}/>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </OwlCarousel>;
            <Link to="/PastEvents/#2020" style={{ textDecoration: 'none' }} className="container Button-center-past-event"><Button>See more</Button></Link>
        </section>
    );
}

export default PastEvents;