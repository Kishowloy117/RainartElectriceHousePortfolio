import React, {useState,useEffect, useRef} from 'react';
import './products.css';
import {Button,Pagination} from 'react-bootstrap';
import {products} from '../../Arrays/SpotLightArray';
import SpotLightBanner from '../../Assets/Banner/spotLightBanner.jpg'
import { Helmet } from "react-helmet"; 



function ProductComponent(props) {
    const productsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const totalPages = Math.ceil(products.length / productsPerPage);
    const handlePageChange = (pageNumber) => {
        productsRef.current.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(pageNumber);
      };
    const productsRef = useRef(null);
    useEffect(() => {
        if (productsRef.current) {
            // productsRef.current.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling to the ref
        }
    }, [currentPage]);
    

  return (
    <div>
      <Helmet>  
        <html lang="en" />  
        <title>VR led spot light</title>  
        <meta name="description" content="LED spot Light" />  
        <meta name="keywords" content="bulb, switch, flat light, shop, Aulmo, SWE, VR, light, electronic" />  
      </Helmet>
      <div className="large-image-container">
        <img 
          src={SpotLightBanner}
          alt="Large Banner"
          className="large-image"
        />
      </div>
      <h1 className="large-title" ref={productsRef}>Products</h1>
      <div className="products-container">
      {currentProducts.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrls[0]} alt={product.name} className="product-image" />
          <h4 className="product-name">{product.name}</h4>
          <Button variant="outline-warning" href={`/spot-light/${product.id}`}>Prodcut Info</Button>
        </div>
      ))}
    </div>

    <div className="text-center mt-4 ">
        <Pagination className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>

  );
}

export default ProductComponent;
