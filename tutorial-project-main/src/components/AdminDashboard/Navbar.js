import React, { useState } from 'react';



import {
  Table,
  Col,
  Row,
  Nav,
  Container,
  Navbar,
  NavDropdown
} from 'react-bootstrap';

export default function NavBar() {

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Online Exam Portal</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">User</Nav.Link>
                  <Nav.Link href="#features">Exams</Nav.Link>
                  <Nav.Link href="#pricing">Reports</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                <NavDropdown title="xxxx(Admin Name)" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Log out</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Switch to other accout</NavDropdown.Item>
        </NavDropdown>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <br />
            
      
        
          </Col>
          </Row>
          </Container>
          </div>
  );
}