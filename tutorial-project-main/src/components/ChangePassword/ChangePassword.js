import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function ChangePassword() {

  const [password, setPassword] = useState("");
  const diffToast = (event) => {
    event.preventDefault();
    toast.success("Your password has been successfully changed.", {
      position: "top-center",
    });
  };

  useEffect(() => {
    document.title = "Change Password";
  }, []);
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Change Password
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
                setPassword("");
              }}
            >
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter your current Password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Current Password"
                  onChange={(e) => {
                    if (e.target.value.length < 8) {
                      e.target.setCustomValidity(
                        "Password must be atleast 8 digits"
                      );
                      console.log(e.target.value.length);
                    }
                    setPassword(e.target.value);
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter your new Password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  onChange={(e) => {
                    if (e.target.value.length < 8) {
                      e.target.setCustomValidity(
                        "Password must be atleast 8 digits"
                      );
                      console.log(e.target.value.length);
                    }
                    setPassword(e.target.value);
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Retype your new Password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Retype Password"
                  onChange={(e) => {
                    if (e.target.value.length < 8) {
                      e.target.setCustomValidity(
                        "Password must be atleast 8 digits"
                      );
                      console.log(e.target.value.length);
                    }
                    setPassword(e.target.value);
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </Form.Group>
              <br />
              <Button variant="success btn-block" type="submit">
                Submit
              </Button>
              <ToastContainer />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
