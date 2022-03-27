import React from 'react';
import './App.css';
import { FiLogOut, FiUser } from "react-icons/fi";

import {
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
                <Navbar.Collapse className="justify-content-end" bg="primary" variant="dark" >
                <Navbar.Text>xxxx(Admin name)</Navbar.Text>
                
                <NavDropdown id="dropdown-basic-button">

          <NavDropdown.Item href="#logout">Log out <FiLogOut /></NavDropdown.Item>

          <NavDropdown.Item href="#switchtootheraccount">Switch to other account <FiUser /></NavDropdown.Item>

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