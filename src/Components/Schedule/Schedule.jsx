import React from 'react';
import { Tab, Row, Nav, Col, Sonnet } from 'react-bootstrap'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Schedule.css'
import img1 from './Assets/1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '300px',
    boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.264)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
    objectFit: 'contain',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function Schedule(props) {

  const classes = useStyles();
  const theme = useTheme();


  return (
    <section className="container mar-top-bot-50 mar-top-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="align-center mar-bot-100">
        <h2>Schedule</h2>
        <h4>- Upcoming events -</h4>
        <div className="heading-underline-center"><div className="heading-underline"></div></div>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" data-aos="fade-up" data-aos-delay="200">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <div  data-aos="fade-up" data-aos-delay="300">
                  <Nav.Link className="event-key-hover" eventKey="first">CTF Competition</Nav.Link>
                </div>
              </Nav.Item>
              <Nav.Item>
                <div  data-aos="fade-up" data-aos-delay="400">
                  <Nav.Link className="event-key-hover" eventKey="second">Bootcamp 2</Nav.Link>
                </div>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Card className={classes.root}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        CTF Competition
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" style={{marginTop:'30px'}}>
                        We bring you an amazing Competition of this year 2021. A CTF Competition where you can compete with each other to capture the Flag. Come join us in this CTF and win exciting prizes.
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                      <a style={{textDecoration: 'none'}} target="_blank" href="https://forms.gle/4V6i6rp6AVVsYBiQ6"><Button className="RegisterIcon">Register</Button></a>
                    </div>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image={img1}
                    title="Live from space album cover"
                  />
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Card className={classes.root}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        Bootcamp 2
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" style={{marginTop:'30px'}}>
                        We Bring to you yet another Bootcamp 2. To update and upgrade you during this Pandemic.
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <a style={{textDecoration: 'none', cursor: 'not-allowed'}} target="_blank" ><Button disabled className="RegisterIcon btn-disabled">Registration not Started</Button></a>
                    </div>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image=""
                    title="Live from space album cover"
                  />
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
}

export default Schedule;