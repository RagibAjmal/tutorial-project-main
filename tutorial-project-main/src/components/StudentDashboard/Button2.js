import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

export default function Button2() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Button variant="outline-dark">My Exams</Button>
        </Col>
        <Col className="justify-content-end">
          <Button size="sm" className="view-all-button">
            View All
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
