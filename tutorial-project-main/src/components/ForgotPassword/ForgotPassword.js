import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator';

export default function ForgotPassword() {
  const [emailId, setemailId] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("none");
  const navigate = useNavigate();
  const diffToast = () => {
    
    toast.success(
      "Your email has been successfully sent. Please reset your password.",
      { position: "top-center" }
    );
    setTimeout(() => {
      navigate("../", { replace: true });
    }, 5500);
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
              onSubmit={(event) => {
                event.preventDefault();
                if(verifyEmail===false){
                diffToast();
                setemailId("");}
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Please enter your email Address</Form.Label>

                <Form.Control
                  value={emailId}
                  onChange={(e) => {
                    if (validator.isEmail(e.target.value) === false){ 
                    setVerifyEmail(true);}
                    else {
                      setVerifyEmail(false)
                    }
                    setemailId(e.target.value)}}
                  
                  type="text"
                  placeholder="Enter email"
                  
                />
                {verifyEmail === true ? (
                <div
                  className="text-danger"
                  style={{ textSize: "10px", textAlign: "center" }}
                >
                  <br />
                  Please Enter a Valid Email
                </div>
              ) : (
                <></>
              )}
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
