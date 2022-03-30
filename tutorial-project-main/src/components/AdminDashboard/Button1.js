import React from "react";
import "./App.css";
import { Button, Row, Container, Col } from "react-bootstrap";

export default function Button1() {
  return (
    <Container className="my-3">
      <Row className="button1">
        <Col>
          <Button variant="outline-dark">Recent Users</Button>
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
