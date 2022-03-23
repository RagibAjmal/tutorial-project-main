import React, { useState } from 'react';
import './App.css';
import './style.css';
import { Nav, Container, Navbar } from 'react-bootstrap';

export default function Navigationbar() {
  return (
    <Container fluid className="bg-primary">
      <Navbar expand="lg">
        <Navbar.Brand className="text-light" href="#home">
          Online Exam Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links mx-auto">
            <Nav.Link className="text-light" href="#users">
              Users
            </Nav.Link>
            <Nav.Link className="text-light" href="#exams">
              Exams
            </Nav.Link>
            <Nav.Link className="text-light" href="#reports">
              Reports
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-light">xxxx(Admin Name)</Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
