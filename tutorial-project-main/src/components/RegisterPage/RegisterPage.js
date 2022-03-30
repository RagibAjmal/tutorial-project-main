import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect } from "react";

export default function RegisterPage() {
  const [radio, setRadio] = useState(1);
  useEffect(() => {
    document.title = "Register";
  }, []);
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Welcome
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  pattern=".{8,}"
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 8) {
                      e.target.setCustomValidity(
                        "Password must be atleast 8 digits"
                      );
                      console.log(e.target.value.length);
                    }
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </Form.Group>
              <br />
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
                    onClick={(e) => {
                      setRadio(e.target.value);
                    }}
                  />

                  <Form.Check
                    inline
                    name="gender"
                    type="radio"
                    label={`Female`}
                    id={`Female`}
                    onClick={(e) => setRadio(!e.target.value)}
                  />
                </div>
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Mobile Number"
                  pattern="[6-9]{1}[0-9]{9}"
                  required
                  onChange={(e) => {
                    if (e.target.value.length != 10) {
                      e.target.setCustomValidity(
                        "Please enter your 10 digit mobile number"
                      );
                      console.log(e.target.value.length);
                    }
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
              <br />

              <Button variant="success btn-block" type="submit">
                Register
              </Button>
              <br />
              <Form.Label className="signup">
                Already have an account?&nbsp;<a href="/">Signin</a>
              </Form.Label>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
