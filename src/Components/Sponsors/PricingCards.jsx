import React from 'react';
import './PricingCards.css'
import { Link } from 'react-router-dom'
import waveImg from './Assets/wave1.png'
import { IoIosCheckbox } from "react-icons/io";
import Button from '@material-ui/core/Button';

function PricingCards(props) {

    return (
    <section className="price-card-container">
        <div className="overlay-for-pricingImg"></div>
        <img className="wave1" src={waveImg} />
        <div className="container aliment-pricingcard">
            <div className="col-lg-4 col-sm-6" data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="500">
                <div className="priceCard col-lg-4">
                    <div className="price-point">
                        <div className="text">
                            <span>SILVER</span>
                            <h1>₹10,000</h1>
                        </div>
                        <div className="line-card"></div>
                    </div>
                    <div className="priceCard-content">
                        <li><IoIosCheckbox color="red" /> &nbsp; Send Resource Person</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Get Hardware</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Sponsor Meal</li>
                    </div>
                    <div className="price-btn">
                        <Link to="ContactUs" style={{textDecoration: 'none'}}><Button className="price-contact">Contact Us</Button> </Link>
                    </div>
                </div>      
            </div>
            <div className="col-lg-4 col-sm-6" data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
                <div className="priceCard col-lg-4">
                    <div className="price-point">
                        <div className="text">
                            <span>PLATINUM</span>
                            <h1>₹50,000</h1>
                        </div>
                        <div className="line-card"></div>
                    </div>
                    <div className="priceCard-content">
                        <li><IoIosCheckbox color="red" /> &nbsp; Send Resource Person</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Get Hardware</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Sponsor Meal</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Judges</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Branding</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Website Logo</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Social Media</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Sponsorship Prizes and Swags</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Hacker Shirt Logo</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Banners, <b>co-hosted by You</b></li>
                    </div>
                    <div className="price-btn">
                        <Link to="ContactUs" style={{textDecoration: 'none'}}><Button className="price-contact">Contact Us</Button> </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6" data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <div className="priceCard col-lg-4">
                    <div className="price-point">
                        <div className="text">
                            <span>GOLD</span>
                            <h1>₹30,000</h1>
                        </div>
                        <div className="line-card"></div>
                    </div>
                    <div className="priceCard-content">
                        <li><IoIosCheckbox color="red" /> &nbsp; Send Resource Person</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Get Hardware</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Sponsor Meal</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Judges</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Branding</li>
                        <li><IoIosCheckbox color="red" /> &nbsp; Website Logo</li>
                    </div>
                    <div className="price-btn">
                        <Link to="ContactUs" style={{textDecoration: 'none'}}><Button className="price-contact">Contact Us</Button> </Link>
                    </div>
                </div>
            </div>
        </div>
        <img className="wave2" src={waveImg} />
    </section>
    );
}

export default PricingCards;