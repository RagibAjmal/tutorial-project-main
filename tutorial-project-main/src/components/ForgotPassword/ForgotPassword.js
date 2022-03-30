import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function ForgotPassword() {
  const [emailId, setemailId] = useState();
  const diffToast = (event) => {
    event.preventDefault();
    toast.success(
      "Your email has been successfully sent. Please reset your password.",
      { position: "top-center" }
    );
  };

  useEffect(() => {
    document.title = "Forgot Password";
  }, []);
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Forgot Password
        </h1>
        <Row className="mt-1">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form
              onSubmit={(e) => {
                diffToast(e);
                setemailId("");
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Please enter your email Address</Form.Label>

                <Form.Control
                  value={emailId}
                  onChange={(e) => setemailId(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <br />

              <Button variant="success btn-block" type="submit">
                Continue
              </Button>
              <ToastContainer />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
