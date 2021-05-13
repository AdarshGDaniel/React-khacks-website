import React from 'react';
import './Sponsors.css'
import Gatsby from './Assets/Gatsby.png'
import StickerMule from './Assets/sticker-mule.png'
import Znetlive from './Assets/Znetlive.png'
import PricingCards from './PricingCards'
import { BsBookmarkCheck } from "react-icons/bs";

function Sponsors(props) {
    return (
        <section className="mar-top-bot-50 mar-top-100"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2 className="align-center">Sponsors</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            &nbsp;
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h4>Why Sponsor Us?</h4>
                &nbsp;
                <p>
                    <p data-aos="fade-up" data-aos-delay="200"><BsBookmarkCheck color="red" fontSize="larger" fontSize="1.5rem" /> &nbsp; <i> Demo your API during the event or showcase your hardware/devices enabling students to tinker and create, while also receiving invaluable feedback to further improve your product.</i></p>
                    <p data-aos="fade-up" data-aos-delay="300"><BsBookmarkCheck color="red" fontSize="larger" fontSize="1.5rem" />&nbsp; <i> Showcasing your company brand during the Hackathon, allows you a better platform to broadcast your company stature, thus boosting brand recognition, hence encouraging students to know more about your company</i></p>
                    <p data-aos="fade-up" data-aos-delay="400"><BsBookmarkCheck color="red" fontSize="larger" fontSize="1.5rem" />&nbsp; <i> Also we will promote your brand throughout our event through social media platforms and other platforms</i></p>
                </p>
            </div>
            <div className="sponsors-logo mar-top-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="container logos-align">
                    <img className="img-sponsors" src={Gatsby} alt="Gatsby logo"/>
                    <img className="img-sponsors" src={StickerMule} alt="StickerMule logo"/>
                    <img className="img-sponsors" src={Znetlive} alt="Znetlive logo"/>
                </div>
            </div>
            <h3 className="align-center mar-top-100">- OUR PRICING -</h3>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <PricingCards />
            
        </section>
    );
}

export default Sponsors;