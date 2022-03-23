import React, { useState } from 'react';
import './App.css';
import './style.css';
import {
  Table,
  Col,
  Row,
  Button,
  Stack,
  Form,
  FormControl,
  Nav,
  Container,
  Navbar,
} from 'react-bootstrap';

export default function Navigationbar() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Online Exam Portal</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#User">User</Nav.Link>
                  <Nav.Link href="#Exams">Exams</Nav.Link>
                  <Nav.Link href="#Reports">Reports</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>xxxx(Admin Name)</Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
