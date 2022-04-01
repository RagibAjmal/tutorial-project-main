import React from "react";
import "./style.css";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useEffect } from "react";

export default function SearchExam() {
  useEffect(() => {
    document.title = "Search Exams";
  }, []);
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
                  <Navbar.Brand href="#login"> xxxx(Student name)</Navbar.Brand>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <br />
            <br />
            {/*code for search bar*/}
            <div className="App">
              <input type="text" placeholder="Search Exams" />
            </div>
            <br />
            <br />
            {/*code for Exam*/}
            <Container>
              <Row>
                <Col style={{ height: "10rem" }}>
                  <Card style={{ width: "18rem" }} responsive>
                    <Card.Body>
                      <Card.Text>Exam Title</Card.Text>
                      <Card.Text>Exam Description</Card.Text>
                      <Card.Text>Duration</Card.Text>
                    </Card.Body>
                    <div className="bg-light border ms-auto">
                      <Button variant="info">Attend Exam</Button>{" "}
                    </div>
                  </Card>
                </Col>
                <Col style={{ height: "10rem" }}>
                  <Card style={{ width: "18rem" }} responsive>
                    <Card.Body>
                      <Card.Text>Exam Title</Card.Text>
                      <Card.Text>Exam Description</Card.Text>
                      <Card.Text>Duration</Card.Text>
                    </Card.Body>
                    <div className="bg-light border ms-auto">
                      <Button variant="info">Attend Exam</Button>{" "}
                    </div>
                  </Card>
                </Col>
                <Col style={{ height: "10rem" }}>
                  <Card style={{ width: "18rem" }} responsive>
                    <Card.Body>
                      <Card.Text>Exam Title</Card.Text>
                      <Card.Text>Exam Description</Card.Text>
                      <Card.Text>Duration</Card.Text>
                    </Card.Body>
                    <div className="bg-light border ms-auto">
                      <Button variant="info">Attend Exam</Button>{" "}
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>

            <br />
            <br />
            <Container>
              <Row>
                <Col style={{ height: "10rem" }}>
                  <Card style={{ width: "18rem" }} responsive>
                    <Card.Body>
                      <Card.Text>Exam Title</Card.Text>
                      <Card.Text>Exam Description</Card.Text>
                      <Card.Text>Duration</Card.Text>
                    </Card.Body>
                    <div className="bg-light border ms-auto">
                      <Button variant="info">Attend Exam</Button>{" "}
                    </div>
                  </Card>
                </Col>
                <Col style={{ height: "10rem" }}>
                  <Card style={{ width: "18rem" }} responsive>
                    <Card.Body>
                      <Card.Text>Exam Title</Card.Text>
                      <Card.Text>Exam Description</Card.Text>
                      <Card.Text>Duration</Card.Text>
                    </Card.Body>
                    <div className="bg-light border ms-auto">
                      <Button variant="info">Attend Exam</Button>{" "}
                    </div>
                  </Card>
                </Col>
                <Col style={{ height: "10rem" }}>
                  <Card style={{ width: "18rem" }} responsive>
                    <Card.Body>
                      <Card.Text>Exam Title</Card.Text>
                      <Card.Text>Exam Description</Card.Text>
                      <Card.Text>Duration</Card.Text>
                    </Card.Body>
                    <div className="bg-light border ms-auto">
                      <Button variant="info">Attend Exam</Button>{" "}
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}
