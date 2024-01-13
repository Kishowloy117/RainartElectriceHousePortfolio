import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './effect.css'; // Import your custom CSS file
import Fade from 'react-reveal/Fade';
import ThreepinSocket from '../../Assets/threepinSocket.png'
import DoorBell from '../../Assets/callingBell.png'
import LedPannel from '../../Assets/LedPannel.png'
import SweGangBang from '../../Assets/4gang2angle.png'
import FloodLight from '../../Assets/floodLight.png'
import Bulb from '../../Assets/Heatsinkangle.png'
import Spot from '../../Assets/spotLight.png'
import FacebookBanner from '../../Assets/Banner/facebookPageBanner.jpg'

export default function BannerEffect() {
  return (
    <div className='mt-4'>
          <Container fluid className="custom-container d-flex align-items-center justify-content-center">
      <Row>
        <Col md={6} className="text-center mb-3 mb-md-0">
        <Fade left >
        <img
            src={DoorBell}
            alt="Banner Icon"
            loading="lazy"
            className="custom-image"
          />
        </Fade>
        </Col>
        <Col md={6} className="text-center my-auto text-white">
        <Fade right >
        <h1 className="large-title bold-text px-md-5">Aulmo DZ30 White Series</h1>
        <Button variant="warning" href='/aulmo-products-wh'>Learn More</Button>
        </Fade>
        </Col>
      </Row>
    </Container>
    <Container fluid className="custom-container2 d-flex align-items-center justify-content-center">
      <Row>
        <Col md={6} className="text-center mb-3 mb-md-0">
        <Fade left >
        <img
            src={ThreepinSocket}
            alt="Banner Icon"
            // className="banner-icon custom-image"
            loading="lazy"
            className=" custom-image"
          />
        </Fade>
        </Col>
        <Col md={6} className="text-center my-auto text-black">
        <Fade right >
        <h1 className="large-title bold-text px-md-5">Aulmo DZ30 Gold Series</h1>
        <Button variant="warning" href='/aulmo-products-gl'>Learn More</Button>
        </Fade>
        </Col>
      </Row>
    </Container>
    <Container fluid className="custom-container3 d-flex align-items-center justify-content-center">
      <Row>
        <Col md={6} className="text-center mb-3 mb-md-0">
        <Fade left >
        <img
            src={SweGangBang}
            alt="Banner Icon"
            className="custom-image"
            loading="lazy"
            // style={{width: '80%'}}
          />
        </Fade>
        </Col>
        <Col md={6} className="text-center my-auto text-white">
        <Fade right >
        <h1 className="large-title bold-text px-md-5">SWE White Series</h1>
        <Button variant="warning" href='/swe-products'>Learn More</Button>
        </Fade>
        </Col>
      </Row>
    </Container>
    <Container fluid className="custom-container4 d-flex align-items-center justify-content-center">
      <Row>
        <Col md={6} className="text-center mb-3 mb-md-0">
        <Fade left >
        <img
            src={ Bulb}
            alt="Banner Icon"
            loading="lazy"
            className="custom-image"
          />
        </Fade>
        </Col>
        <Col md={6} className="text-center my-auto text-white">
        <Fade right >
        <h1 className="large-title bold-text px-md-5">VR LED Bulb</h1>
        <Button variant="warning" href='/led-light'>Learn More</Button>
        </Fade>
        </Col>
      </Row>
    </Container>
    <Container fluid className="custom-container5 d-flex align-items-center justify-content-center">
      <Row>
        <Col md={6} className="text-center mb-3 mb-md-0">
        <Fade left >
        <img
            src={FloodLight}
            alt="Banner Icon"
            loading="lazy"
            className="custom-image"
          />
        </Fade>
        </Col>
        <Col md={6} className="text-center my-auto text-white">
        <Fade right >
        <h1 className="large-title bold-text px-md-5">VR LED Flood Light</h1>
        <Button variant="warning" href='/flood-light'>Learn More</Button>
        </Fade>
        </Col>
      </Row>
    </Container>
    <Container fluid className="custom-container6 d-flex align-items-center justify-content-center">
      <Row>
        <Col md={6} className="text-center mb-3 mb-md-0">
        <Fade left >
        <img
            src={LedPannel}
            alt="Banner Icon"
            loading="lazy"
            className="custom-image"
          />
        </Fade>
        </Col>
        <Col md={6} className="text-center my-auto text-white">
        <Fade right >
        <h1 className="large-title bold-text px-md-5">VR LED Panel Light</h1>
        <Button variant="warning" href='/led-pannel'>Learn More</Button>
        </Fade>
        </Col>
      </Row>
    </Container>
    <Container fluid className="custom-container7 d-flex align-items-center justify-content-center">
      <Row>
        <Col md={6} className="text-center mb-3 mb-md-0">
        <Fade left >
        <img
            src={Spot}
            alt="Banner Icon"
            // className="custom-image"
            loading="lazy"
            style={{width:'80%'}}
          />
        </Fade>
        </Col>
        <Col md={6} className="text-center my-auto text-white">
        <Fade right >
        <h1 className="large-title bold-text px-md-5">VR LED Spot Light</h1>
        <Button variant="warning" href='/spot-lights'>Learn More</Button>
        </Fade>
        </Col>
      </Row>
    </Container>
  </div>
  );
}
