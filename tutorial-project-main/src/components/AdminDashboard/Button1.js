import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

export default function Button1() {
  return (
    <Container className="my-3">
      <Row className="button1">
        <Col>
          <h5>Recent Users</h5>
          {/* <Button variant="outline-dark">Recent Users</Button> */}
        </Col>
        <Col className="justify-content-end">
          <Button size="sm" className="view-all-button" href="manageUsers">
            View All
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
