import React, { useEffect } from 'react';
import './PastEventsPage.css'
import NavBar2 from '../nav-bootstrap/NavBar2'
import Footer2 from '../Footer/Footer2'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CardsLeft from './CardsLeft';
import CardsRight from './CardsRight';
import { Link, animateScroll as scroll } from "react-scroll";


function PastEventsPage(props) {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <NavBar2 page="true"/>
            <div className="timeline-fixed">
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2021" spy={true} smooth={true} offset={-80} duration={500}>2021</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2020" spy={true} smooth={true} offset={-80} duration={500}>2020</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2019" spy={true} smooth={true} offset={-80} duration={500}>2019</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2018" spy={true} smooth={true} offset={-80} duration={500}>2018</Link></TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                <div className="container mar-top-100">
                    <div className="contents-block">
                        <div id="2020" className="topic-year mar-top-100">
                            <h2>2020</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsLeft image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" title="First Post" description="This event took place yesterday"/>
                        <CardsRight image="https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80" title="Second workshop" description="This event took place today"/>
                        <CardsLeft image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" title="First Post" description="This event took place yesterday"/>
                        <CardsRight image="https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80" title="Second workshop" description="This event took place today"/>
                        <CardsLeft image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" title="First Post" description="This event took place yesterday"/>
                        <CardsRight image="https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80" title="Second workshop" description="This event took place today"/>
                        <div id="2019" className="topic-year mar-top-100">
                            <h2>2019</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsLeft image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" title="First Post" description="This event took place yesterday"/>
                        <CardsRight image="https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80" title="Second workshop" description="This event took place today"/>
                        <CardsLeft image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" title="First Post" description="This event took place yesterday"/>
                        <CardsRight image="https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80" title="Second workshop" description="This event took place today"/>
                        <div id="2018" className="topic-year mar-top-100">
                            <h2>2018</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsLeft image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" title="First Post" description="This event took place yesterday"/>
                        <CardsRight image="https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80" title="Second workshop" description="This event took place today"/>

                    </div>
                </div>
            <Footer2 />
        </div>
    );
}

export default PastEventsPage;