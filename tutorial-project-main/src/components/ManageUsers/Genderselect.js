import React from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function Genderselect() {
  const radio= useState(1);
  return (
    <>
      <Container>
        <Row className="">
          <Col className="">
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Gender</Form.Label>
                <div key={`default-radio}`} className="mb-3">
                  <Form.Check
                    inline
                    name="gender"
                    type="radio"
                    id={`Male`}
                    label={`Male`}
                    checked={radio}
                  />

                  <Form.Check
                    inline
                    name="gender"
                    type="radio"
                    label={`Female`}
                    id={`Female`}
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
