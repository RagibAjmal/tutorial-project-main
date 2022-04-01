import React from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Nav, Container, Navbar, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AuthActions } from "../Store/Auth";

export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Online Exam Portal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="manageUsers">User</Nav.Link>
            <Nav.Link href="manageExams">Exams</Nav.Link>
            <Nav.Link href="#pricing">Reports</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="primary">Admin Name</Dropdown.Toggle>

              <Dropdown.Menu variant="primary">
                <Dropdown.Item onClick={() => dispatch(AuthActions.Logout())}>
                  Log out <FiLogOut />
                </Dropdown.Item>
                <Dropdown.Item href="/changePassword">
                  Change Password <FiUser />
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
