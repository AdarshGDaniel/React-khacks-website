import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'
import { IoIosLink } from "react-icons/io";
import Collapse from '@material-ui/core/Collapse';


function About(props) {

    const [val, setVal] = useState(false)
    const [Read, setRead] = useState("Read More")

    const open = (val) =>{
        if(val){
            setRead("Read Less")
        }else{
            setRead("Read More")
        }
        setVal(val);
    }

    return (
        <section className="section-container About mar-top-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2>About Us</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <div className="container">
                <div className="container-fluid mar-top-bot-50" data-aos="fade-up" data-aos-delay="100">
                    <h4>Who are we?</h4>
                    <p>KarunyaHacks is a student organization affiliated to
                        <br /><b>Karunya Innovation and Design Studio at Karunya Institute of Technology and Sciences</b></p>
                    <a href="https://karunya.edu" target="_blank"><i>View more about Karunya<IoIosLink className="link-hover" /></i></a>
                </div>
                <div className="container-fluid mar-top-bot-50" data-aos="fade-up" data-aos-delay="200">
                    <h4>What do we do?</h4>
                    <p>We aim to serve students in their professional pursuit of learning and research. We help students to take up projects to solve problems in areas related to Water, Food, Health and Energy through scientific innovation and technological research.</p>
                    <Collapse in={val}>
                        <p>We conduct events and hackathons which nurtures the capabilities of students in our community.</p>
                    </Collapse>
                    <a href="##" onClick = {()=> {
                        if(val){
                            return open(false)
                        }else{
                            return open(true)
                        }
                    }}><i>{Read}</i></a>
                </div>
            </div>
        </section>
    );
}

export default About;
