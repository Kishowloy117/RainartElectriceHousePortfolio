// ProductDetail.js
import React, {useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import './productdetails.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhatSpecial from './WhatSpecial/whatspecial';
import Switch from '../../Assets/switch.png'
import Front from '../../Assets/futa.JPG'
import Pakcet from '../../Assets/pasa.JPG'
import {useParams} from 'react-router-dom';
import {products} from '../../Arrays/AulmoWhiteArray';
import { Helmet } from "react-helmet"; 




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
        <Helmet>  
        <html lang="en" />  
        <title>Aulmo DZ30 Series</title>  
        <meta name="description" content="Buy Aulmo DZ30 series white" />  
        <meta name="keywords" content="bulb, switch, flat light, shop, Aulmo, SWE, VR, light, electronic" />  
      </Helmet> 
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
