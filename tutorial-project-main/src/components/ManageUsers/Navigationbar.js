import React from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Col, Row, Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

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
                <Navbar.Collapse
                  className="justify-content-end"
                  bg="primary"
                  variant="dark"
                >
                  <NavDropdown title="xxxx(Admin Name)">
                    <NavDropdown.Item href="#logout">
                      Log out <FiLogOut />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#switchtootheraccount">
                      Switch to other account <FiUser />
                    </NavDropdown.Item>
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

//  import React, { useState } from "react";
//  import "./App.css";
// import "./style.css";
// import { Nav, Container, Navbar } from "react-bootstrap";

// export default function Navigationbar() {
// 	return (
// 		<Container fluid className="bg-primary">
// 			<Navbar expand="lg">
// 				<Navbar.Brand className="text-light" href="#home">
// 					Online Exam Portal
// 				</Navbar.Brand>
// 				<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 				<Navbar.Collapse id="basic-navbar-nav">
// 					<Nav className="nav-links mx-auto">
// 						<Nav.Link className="text-light" href="#users">
// 							Users
// 						</Nav.Link>
// 						<Nav.Link className="text-light" href="#manageExams">
// 							Exams
// 						</Nav.Link>
// 						<Nav.Link className="text-light" href="#reports">
// 							Reports
// 						</Nav.Link>
// 					</Nav>
// 					<Navbar.Collapse className="justify-content-end">
// 						<Navbar.Text className="text-light">xxxx(Admin Name)</Navbar.Text>
// 					</Navbar.Collapse>
// 				</Navbar.Collapse>
// 			</Navbar>
// 		</Container>
// 	);
// }
