import React , { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/images/Hexnode-logo.png"; 
import Button from 'react-bootstrap/Button';
import "../assets/css/navbar.css";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
function AppNavbar() {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) { 
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <div className={`navbar-container ${isFixed ? 'fixed' : ''}`}>
        <Container>
 {[false].map((expand) => (
    
        <Navbar key={expand} expand="lg"  className="bg-body-tertiary ">
          <Container fluid>
            <Navbar.Brand href="#">
            <img src={logo} alt="App Logo" style={{ width: "200px", height: "auto" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                  <Button variant="danger" className='danger'>14 DAY FREE TRAIL</Button>
                  </Nav.Link>
                  <Nav.Link href="#action2" className='login'>Login</Nav.Link>
                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
        
        </Container>
  </div>
  )
}

export default AppNavbar