import { Card } from 'react-bootstrap';
import './Clubs.css'
import { IoIosLock, IoIosApps, IoLogoGameControllerA } from "react-icons/io";
import { GoGistSecret } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import { IoThunderstorm } from "react-icons/io5";

function Clubs(props) {

    const colorRed = {
        color: "#FF0001",
    }

    const colorBlue = {
        color: "#00AEEF",
    }
    // const styles = {
    //       width: 60,
    //       height: 60,
    // }

    return (
        <section className="container mar-top-bot-50 club-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2 className="align-center container"><span style={colorRed}>K</span><span style={colorBlue}>Hacks</span> Club</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <div className="container-fluid row wrapper">
            <div data-aos="fade-up" data-aos-delay="100">
                <Card className="card-club" style={{maxWidth: '18rem', textAlign: 'center', margin: "0 10px 0 10px"}}>
                <Card.Body>
                    <GiBrain className="club-icon" />
                    <Card.Title>AI/ML</Card.Title>
                    <Card.Subtitle>We aim to create new projects based on real life scenarios</Card.Subtitle>
                </Card.Body>
                </Card>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <Card className="card-club" style={{ maxWidth: '18rem', textAlign: 'center', margin: "0 10px 0 10px"}}>
                <Card.Body>
                    <IoIosApps className="club-icon" />
                    <Card.Title>App Development</Card.Title>
                    <Card.Subtitle>Develop Apps for both IOS and Android</Card.Subtitle>
                </Card.Body>
                </Card>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <Card className="card-club" style={{ maxWidth: '18rem', textAlign: 'center', margin: "0 10px 0 10px"}}>
                <Card.Body>
                    <AiFillCode className="club-icon" />
                    <Card.Title>Competitive Programming</Card.Title>
                    <Card.Subtitle>Compete with each other and top the leader board</Card.Subtitle>
                </Card.Body>
                </Card>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
                <Card  className="card-club" style={{ maxWidth: '18rem', textAlign: 'center', margin: "0 10px 0 10px"}}>
                <Card.Body>
                    <GoGistSecret className="club-icon" />
                    <Card.Title>Cyber Security</Card.Title>
                    <Card.Subtitle>Stay secure in all that you do. You are being watched!</Card.Subtitle>
                </Card.Body>
                </Card>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
                <Card className="card-club" style={{ maxWidth: '18rem', textAlign: 'center', margin: "0 10px 0 10px"}}>
                <Card.Body>
                    <IoLogoGameControllerA className="club-icon" />
                    <Card.Title>Game Development</Card.Title>
                    <Card.Subtitle>Love to play game? why not create then!</Card.Subtitle>
                </Card.Body>
                </Card>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
                <Card  className="card-club" style={{ maxWidth: '18rem', textAlign: 'center', margin: "0 10px 0 10px"}}>
                <Card.Body>
                    <IoThunderstorm className="club-icon" />
                    <Card.Title>IOT</Card.Title>
                    <Card.Subtitle>Ever wondered how devices work with wifi? make your home smart with us</Card.Subtitle>
                </Card.Body>
                </Card>
            </div>
            <div data-aos="fade-up" data-aos-delay="700">
                <Card className="card-club" style={{ maxWidth: '18rem', textAlign: 'center', margin: "0 10px 0 10px"}}>
                <Card.Body>
                    <IoIosLock className="club-icon" />
                    <Card.Title>Web Development</Card.Title>
                    <Card.Subtitle>Love the webpage? Then join us and learn how we did it!</Card.Subtitle>
                </Card.Body>
                </Card>
            </div>
            </div>
        </section>
    );
}

export default Clubs;