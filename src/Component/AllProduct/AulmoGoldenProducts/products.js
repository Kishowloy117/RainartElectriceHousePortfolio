import React, {useState,useEffect, useRef} from 'react';
import './products.css';
import {Button,Pagination} from 'react-bootstrap';
import {products} from '../../Arrays/AulmoGoldenArray'
import AulmoBanner from '../../Assets/AulmoBanner.jpg'
import { Helmet } from "react-helmet"; 

function ProductComponent(props) {
    const productsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const totalPages = Math.ceil(products.length / productsPerPage);
    const productsRef = useRef(null);
    const handlePageChange = (pageNumber) => {
        productsRef.current?.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(pageNumber);
      };

  return (
    <div>
      <Helmet>  
        <html lang="en" />  
        <title>Aulmo DZ30 series Golden</title>  
        <meta name="description" content="Aulmo DZ30 series" />  
        <meta name="keywords" content="bulb, switch, flat light, shop, Aulmo, SWE, VR, light, electronic" />  
      </Helmet>
      <div className="large-image-container">
        <img 
          src={AulmoBanner}
          alt="Large Banner"
          className="large-image"
        />
      </div>
      <h1 className="large-title" ref={productsRef}>Products</h1>
      <div className="products-container">
      {currentProducts.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrls[0]} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <Button variant="outline-warning" href={`/aulmo-golden/${product.id}`}>Prodcut Info</Button>
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
