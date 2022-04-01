import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FiLogOut, FiUser } from "react-icons/fi";
import "./App.css";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Online Exam Portal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">User</Nav.Link>
            <Nav.Link href="#features">Exams</Nav.Link>
            <Nav.Link href="#reports">Reports</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="primary">Student Name</Dropdown.Toggle>

              <Dropdown.Menu variant="primary">
                <Dropdown.Item href="#/logout">
                  Log out <FiLogOut />
                </Dropdown.Item>
                <Dropdown.Item href="#/switchtootheraccount">
                  Switch to other account <FiUser />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
