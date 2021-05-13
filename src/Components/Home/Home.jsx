import React, { useEffect } from 'react';
import NavBootstrap from '../nav-bootstrap/NavBootstrap'
import SliderBootstrap from '../SliderBootstrap/SliderBootstrap'
import About from '../About/About'
import Clubs from '../Clubs/Clubs'
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoTab from '../VideoTab/VideoTab'
import ParticlesBg from 'particles-bg'
import PastEvents from '../PastEvents/PastEvents'
import Schedule from '../Schedule/Schedule'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sponsors from '../Sponsors/Sponsors'
import OurTeam from '../OurTeam/OurTeam'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'


function Home(props) {

    useEffect(() => {
        AOS.init({duration: 1000})
      }, [])
      
    
        let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        scale: [.1, 0.4],
        position: "all",
        color: ["random", "#ff0000"],
        cross: "dead",
        // emitter: "follow",
        random: 15
      };
    
      if (Math.random() > 0.85) {
        config = Object.assign(config, {
          onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(
              particle.p.x,
              particle.p.y,
              particle.radius * 2,
              particle.radius * 2
            );
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
          }
        });
      }




    return (
        <div>
            <NavBootstrap />
            <SliderBootstrap />
            <Clubs />
            <div id="About" className = "space-section"></div>
            <About />
            <VideoTab />
            <div id="PastEvents" className = "space-section"></div>
            <PastEvents />
            <div id="Schedule" className = "space-section"></div>
            <Schedule />
            <div id="Sponsors" className = "space-section"></div>
            <Sponsors />
            <div id="OurTeam" className = "space-section"></div>
            <OurTeam />
            <div id="FAQ" className = "space-section"></div>
            <FAQ />
            <Footer />
            <ParticlesBg className="bg-particles" type="custom" config={config} bg={true} />
        </div>
    );
}

export default Home;