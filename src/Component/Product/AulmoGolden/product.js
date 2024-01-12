// ProductDetail.js
import React, {useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import './productdetails.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageGallery from '../../Home/galleryShow';
import WhatSpecial from './WhatSpecial/whatspecial';
import Switch from '../../Assets/switch.png'
import Front from '../../Assets/futa.JPG'
import Pakcet from '../../Assets/pasa.JPG'
import {useParams} from 'react-router-dom';
import {products} from '../../Arrays/AulmoGoldenArray';


// const products = [
//   { 
//     id: 1, 
//     name: '1 Gang 1 Way', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['../Assets/AULMO/usbWhite2.jpg', '../Assets/AULMO/usbWhitePack.jpg', '../Assets/AULMO/usbWhite3.jpg'] 
//   },
//   { 
//     id: 2, 
//     name: '2 Gang 1 Way', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 3, 
//     name: '3 Gang 1 Way', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 4, 
//     name: '4 Gang 1 Way', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 5, 
//     name: 'Door Bell', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },  
//   { 
//     id: 6, 
//     name: '20 A DP Switch', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 7, 
//     name: '45 A DP Switch', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 8, 
//     name: 'Fan Dimmer', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 9, 
//     name: '2 Pin Socket', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 10, 
//     name: 'TV Socket', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },  
//   { 
//     id: 11, 
//     name: 'Telephone Socket', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 12, 
//     name: 'Internet Socket', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 13, 
//     name: '15A Socket', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 14, 
//     name: '13A Multi Socket', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
//   { 
//     id: 15, 
//     name: '13A 3 Pin U Socket', 
//     description: 'Color: White / Gold<br>• Material (panel): PC<br>• Size:86*90mm<br>• Max. Current:16A<br>• Max. Voltage: 250V<br>• Cutting-edge Technology from Germany<br>• Enable You to Enjoy Quality Life; Latest Originality from Europe Leads<br>• The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },  
//   { 
//     id: 16, 
//     name: '13A Socket 3 Pin + 2 USB', 
//     description: 'Color: White / Gold • Material (panel): PC • Size:86*90mm • Max. Current:16A • Max. Voltage: 250V • Cutting-edge Technology from Germany • Enable You to Enjoy Quality Life; Latest Originality from Europe Leads • The Design Trend; Perfect Interpretation of Inspiration andInnovation; Combination of Fashion and Taste; AULMO, Touches the New World', 
//     imageUrls: ['./Assets/packet1.png', './Assets/packet2.png', './Assets/packet3.png'] 
//   },
  
// ];


//Array


const ProductDetail = ({ name, description, price, imageUrl }) => {
  const params = useParams();

  console.log(params.id)
  const id = params.id;
  const product = products.find(item => item.id == id); // searching for element with id
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    Switch,
    Front,
    Pakcet,
  ];
  const carouselStyle = {
    width: '10%',
  };
  const cartIcon = {
    cursor: 'pointer',
    width: '10%', // Adjust the width as needed
    height: '10%', // Adjust the height as needed
  }
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <Container className="py-3 py-lg-5">
      <Row>
        <Col md={6}>
        <div className="carousel-container">
      <Carousel autoPlay interval={5000} transitionTime={1000}>
      {product.imageUrls.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Product ${index + 1}`} />
                  </div>
        ))}
      </Carousel>
    </div>
        </Col>
        <Col md={6}>
            <h1 className="custome-title">{product.name}</h1>
            <h3 className='mt-4 mb-4' style={{ fontWeight: 'bold', color: '#a80c0c' }}>Product Description</h3>
            <p 
                className='custome-description mt-4' 
                dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
        </Col>
      </Row>
    </Container>
    <WhatSpecial/>
    </div>
    
  );
};

export default ProductDetail;
