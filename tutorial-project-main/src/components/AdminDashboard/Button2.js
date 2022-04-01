import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Button2() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <h5>Recent Exams</h5>
          {/* <Button variant="outline-dark">Recent Exams</Button> */}
        </Col>
        <Col className="justify-content-end">
          <Button size="sm" className="view-all-button" href="manageExams">
            View All
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
