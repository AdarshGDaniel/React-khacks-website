import React from 'react'
import './Heads.css'
import b1 from './Assets/b1.jpg'
import b2 from './Assets/b2.jpg'
import b3 from './Assets/b3.jpg'
import b4 from './Assets/b4.jpg'
import b5 from './Assets/b5.jpg'
import b6 from './Assets/b6.jpg'
import b7 from './Assets/b7.jpg'
import b8 from './Assets/b8.jpg'
import b9 from './Assets/b9.jpg'
import b10 from './Assets/b10.jpg'
import b11 from './Assets/b11.jpg'
import b12 from './Assets/b12.jpg'
import g1 from './Assets/g1.jpg'
import g2 from './Assets/g2.jpg'
import g3 from './Assets/g3.jpg'
import g4 from './Assets/g4.jpg'
import g5 from './Assets/g5.jpg'
import { FaGithub, FaLink, FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Heads(props) {

    
    return (
        <div className="Heads-profile container">
            <div className="row">
                <div className="team-box" data-aos="fade-up" data-aos-delay="100">
                    <img src={b1} alt="Adarsh G Daniel"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Adarsh G Daniel</h5>
                            <span>(Event Cordinator)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.facebook.com/adarshg.daniel/" target="_blank"><FaFacebookF size="20" /></a>
                                <a href="https://twitter.com/Adarsh_G_Daniel" target="_blank"><FaTwitter size="20" /></a>
                                <a href="https://www.linkedin.com/in/adarsh-g-daniel-25b236192/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/accounts/login/?next=/adarsh_g_daniel/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={b2} alt="Benvin"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Benvin</h5>
                            <span>(Event Cordinator)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.facebook.com/benvin.david" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="https://www.linkedin.com/in/benvin-david/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/benvin_david/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="300">
                    <img src={b3} alt="Ashvin Vinu"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Ashvin Vinu</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://acedev003.github.io/" target="_blank"><FaLink size="20" /></a>
                                <a href="https://github.com/Acedev003" target="_blank"><FaGithub size="20" /></a>
                                <a href="https://www.instagram.com/acedev003/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={b4} alt="Asir Sam Shanoon A"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Asir Sam Shanoon A</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                {/* <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={b5} alt="David Sanjeet Kumar"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>David Sanjeet Kumar</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://github.com/Davidskumar" target="_blank"><FaGithub  size="20" /></a>
                                <a href="https://www.linkedin.com/in/david-sanjeet-kumar-b38401209/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/rusian2824/?hl=en" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="300">
                    <img src={g1} alt="Elvina Sharon"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Elvina Sharon</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://github.com/elvinasharon" target="_blank"><FaGithub  size="20" /></a>
                                <a href="https://www.linkedin.com/in/elvina-sharon-31aug2002/" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={g2} alt="Emi Mary Rose"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Emi Mary Rose</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/emimaryrose111202/" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="500">
                    <img src={g3} alt="FEBY SARA SHIBU"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>FEBY SARA SHIBU</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/feby-sara-shibu-3a5400209/" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="100">
                    <img src={g4} alt="Florina"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Florina</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                {/* <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={b6} alt="JoeHinn"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>JoeHinn</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                {/* <a href="" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="" target="_blank"><FaTwitter size="20" /></a>
                                <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={b7} alt="Joy Sam Raj M"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Joy Sam Raj M</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.joysam.me/" target="_blank"><FaLink  size="20" /></a>
                                <a href="https://github.com/JOY-SAM" target="_blank"><FaGithub size="20" /></a>
                                <a href="https://in.linkedin.com/in/joy-sam-raj" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/joy_wayne_14/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={b8} alt="P. Arnold Anand"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>P. Arnold Anand</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://github.com/arnold-anand" target="_blank"><FaGithub  size="20" /></a>
                                <a href="https://www.linkedin.com/in/arnold-anand/" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={b9} alt="Paritosh Sahu"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Paritosh Sahu</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                {/* <a href="" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="" target="_blank"><FaTwitter size="20" /></a>
                                <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={b10} alt="Pavitra Pati"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Pavitra Pati</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://github.com/pavitrapati" target="_blank"><FaGithub  size="20" /></a>
                                <a href="https://www.linkedin.com/in/pavitra-pati-324636209" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/pavitraxdr/?hl=en" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={b11} alt="Roshan Daniel"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Roshan Daniel</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.facebook.com/roshan.daniel.980" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="https://github.com/RoshanDaniel1208" target="_blank"><FaGithub size="20" /></a>
                                <a href="https://www.linkedin.com/in/roshan-daniel-6490b41b9/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/danonymous99/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={b12} alt="S Parthiban"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>S Parthiban</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                {/* <a href="" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="" target="_blank"><FaTwitter size="20" /></a>
                                <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={g5} alt="Vaishnawi Sinha"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Vaishnawi Sinha</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                {/* <a href="" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="" target="_blank"><FaTwitter size="20" /></a>
                                <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heads;