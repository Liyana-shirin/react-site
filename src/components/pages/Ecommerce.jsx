// import { Fragment } from "react"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

import React, { Fragment } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import'../styles/contactform.css'; 

// const Ecommerce= ()=> {
  
//   return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <img src="../public/fliplogo.png" alt="logo" />
    //     <form>
    //     <input type="search" id="searchbar" placeholder="search brands,products and more" />
    //     </form>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //       <NavDropdown title="Login" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //         </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="#home">Cart</Nav.Link>
    //         <Nav.Link href="#link">Became a seller</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>   
    // </Navbar>
    

  

const Ecommerce = () => {
  return (
    <Fragment>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2 className="mb-4 text-center">contact Form</h2>
            <Form>
              {/* First Name */}
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control size="md" type="text" placeholder="Enter your first name" />
              </Form.Group>

              {/* Last Name */}
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control size="md" type="text" placeholder="Enter your last name" />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Enter your password"
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </Form.Text>
              </Form.Group>

              {/* Email Address */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              {/* Textarea */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Additional Information</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter additional details here..." />
              </Form.Group>

              {/* Submit Button */}
              <div className="d-grid">
                <Button variant="primary" size="lg" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Ecommerce;
