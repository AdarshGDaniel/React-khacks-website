import React from 'react';
import { Tab, Row, Nav, Col, Sonnet } from 'react-bootstrap'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Button from '@material-ui/core/Button';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import './Schedule.css'
import img1 from './Assets/1.jpeg';
import img2 from './Assets/2.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '400px',
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
    width: 351,
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
                  <Nav.Link className="event-key-hover" eventKey="first">Event 1</Nav.Link>
                </div>
              </Nav.Item>
              <Nav.Item>
                <div  data-aos="fade-up" data-aos-delay="400">
                  <Nav.Link className="event-key-hover" eventKey="second">Event 2</Nav.Link>
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
                        BootCamp 2021
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        We bring you an amazing event of this year 2021. A bootcamp where you can learn to build.
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                      <a style={{textDecoration: 'none'}} target="_blank" href="https://forms.gle/4V6i6rp6AVVsYBiQ6"><Button className="RegisterIcon">Register</Button></a>
                    </div>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image={img2}
                    title="Live from space album cover"
                  />
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Card className={classes.root}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        CodeChef
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Learn your code more!
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
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
}

export default Schedule;