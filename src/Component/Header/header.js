import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-bootstrap-submenu/dist/index.css";
import './header.css';
import Logo from '../Assets/RainartLogo.png';
import { Outlet, Link } from "react-router-dom";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBulbOpen, setIsBulbOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSwitchSubMenuOpen, setIsSwitchSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleMouseEnter2 = () => {
    setIsBulbOpen(true);
  };

  const handleMouseLeave2 = () => {
    setIsBulbOpen(false);
  };

  const handleMouseEnterBrand = () => {
    setIsBrandOpen(true);
  };

  const handleMouseLeaveBrand = () => {
    setIsBrandOpen(false);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary py-2 " >
      <Container >
      <Navbar.Brand href="/">
            <img
              src={Logo} 
              alt="Logo"
              height="120"
              className="d-inline-block align-top align-center"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
         <Nav className="d-flex align-items-center">
    <NavDropdown
            title={<span className="font-weight-bold fs-3">Switch & Socket</span>}  
            id="collasible-nav-dropdown"
            onMouseOver={(e) => e.currentTarget.click()} 
            show={isBulbOpen}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <NavDropdown.Item href="/swe-products">SWE</NavDropdown.Item>
            <DropdownSubmenu 
              title="AULMO"
              >
              <NavDropdown.Item href="/aulmo-products-gl">Golden</NavDropdown.Item>
              <NavDropdown.Item href="/aulmo-products-wh">White</NavDropdown.Item>
            </DropdownSubmenu>
    </NavDropdown>
    
    <NavDropdown 
        title={<span className="font-weight-bold fs-3">Led Light</span>} 
        id="collapsible-nav-dropdown"
        onMouseOver={(e) => e.currentTarget.click()} 
        show={isOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="mr-md-3"
    >
        <a className="dropdown-item" href="/led-light">Led Bulb</a>
        <a className="dropdown-item" href="/flood-light">Flood Light</a>
        <a className="dropdown-item" href="/led-pannel">Led Panel</a>
        <a className="dropdown-item" href="/spot-lights">Spot Light</a>
    </NavDropdown>
    <NavDropdown
            title={<span className="font-weight-bold fs-3">Brands</span>}  
            id="collasible-nav-dropdown"
            onMouseOver={(e) => e.currentTarget.click()} 
            show={isBrandOpen}
            onMouseEnter={handleMouseEnterBrand}
            onMouseLeave={handleMouseLeaveBrand}
          >
            <NavDropdown.Item href="/aulmo">AULMO</NavDropdown.Item>
            <NavDropdown.Item href="/swe">SWE</NavDropdown.Item>
             
    </NavDropdown>

    
    <Nav.Link href="/about">
        <span className="font-weight-bold fs-3">About</span>
    </Nav.Link>
</Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )
}
