import React, { useState } from 'react';
import './App.css';


import {
  Table,
  Col,
  Row,
  Nav,
  Container,
  Navbar,
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
                  <Navbar.Text>xxxx(Student Name)</Navbar.Text>
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