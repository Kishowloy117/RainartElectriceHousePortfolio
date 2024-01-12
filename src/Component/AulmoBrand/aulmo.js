import React from 'react'
import './aulmo.css'; // Import your CSS file
import { Container, Row, Col } from 'react-bootstrap';

const aulmo = () => {
    const imageUrls = [
        'http://www.aulmo.com/static/upload/image/20230617/1686996604250339.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996625232607.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996643123925.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996665733079.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996681742648.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996693902645.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996707375711.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996717303690.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996744805982.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996754593261.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996765883417.jpg',
        'http://www.aulmo.com/static/upload/image/20230617/1686996775322294.jpg',
      ];
  return (
    <div>
      {/* Banner at the top row */}
      <div className="banner">
        {/* Add your banner content here */}
        <img
          src="http://www.aulmo.com/static/upload/image/20230617/1686995153504250.jpg" // Replace with the actual path to the banner image
          alt="Banner Image"
          className="banner-image"
        />
      </div>

      {/* Large image of the brand's logo in the middle of the row */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <img
              src="http://www.aulmo.com/template/aoerma/images/cico.png" // Replace with the actual path to the brand's logo
              alt="Brand Logo"
              className="large-logo"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="yellow-banner">
        <Row className="justify-content-center">
        <Col md={4} className="text-center order-md-0">
            {/* Add content for the yellow banner */}
            <img
              src="http://www.aulmo.com/template/aoerma/images/clogo.png" // Replace with the actual path to the image
              alt="Banner Icon"
              className="banner-icon"
            />
          </Col>
          <Col md={8} className="text-center order-md-1">
            {/* Add content for the yellow banner */}
            <h1 className="large-title bold-text">AULMO IN GLOBAL WORD</h1>
            <h2 className='mt-4'>AULMO SWITCH IS POPULAR IN THE WORLD, MAINLY EXPORTED TO THE MIDDLE EAST,AUSTRALIA ,EUROPE ,AFRICA,SOUTH AMERICA AND OTHER REGIONS</h2>
          </Col>
          
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="large-title bold-text">Certification</h1>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        {Array.from({ length: Math.ceil(imageUrls.length / 3) }).map((_, rowIndex) => (
          <Row key={rowIndex} className="mb-4">
            {imageUrls.slice(rowIndex * 3, rowIndex * 3 + 3).map((imageUrl, colIndex) => (
              <Col key={colIndex} md={4} className="text-center">
                <img
                  src={imageUrl}
                  alt={`Image ${rowIndex * 3 + colIndex + 1}`}
                  className="image-thumbnail"
                />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default aulmo