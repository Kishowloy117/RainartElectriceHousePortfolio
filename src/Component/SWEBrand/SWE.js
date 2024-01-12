import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const SWE = () => {
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
            src="https://icdn.tradew.com/stylefile/20557/logo.png?x-oss-process=image/resize,m_fill,h_50,w_210/format,webp" // Replace with the actual path to the brand's logo
            alt="Brand Logo"
            className="large-logo"
          />
        </Col>
      </Row>
    </Container>
    <Container fluid className="yellow-banner mt-4">
      <Row className="justify-content-center mt-4">
      
        <Col md={12} className="text-center order-md-1">
          {/* Add content for the yellow banner */}
          <h1 className="large-title bold-text">SWE IN GLOBAL WORLD</h1>
          <h2 className="large-title mt-4">World Switch Manufacturers And Producers</h2>
          
          <h4 className='mt-4'>Established in 1973, HangzhouHongshiElectrical CO.,Ltd. is specialized in the production of British Standard and Chinese Standard electrical accessories. With the registered capital of RMB150million, now its general assets exceed RMB800 million. The company has one center for R&D and occupies more than 50 acres, with 1300 employees,including 120 technicians.The company now has the enough ability of self-developing, opening the tooling,manufacturing and quality management.

</h4>
          <img
            src="https://icdn.tradew.com/file/201301/1529191/gif/5762868.gif?x-oss-process=image/quality,Q_90/format,webp" // Replace with the actual path to the image
            alt="Banner Icon"
            className="banner-icon"
          />
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

export default SWE