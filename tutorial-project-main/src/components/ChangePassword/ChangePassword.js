import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigationbar from '../ManageUsers/Navigationbar';

export default function ChangePassword() {

  const [oldPassword, setOldPassword] = useState("");  
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [verifyOldPassword, setVerifyOldPassword] = useState(false);
  const [verifyNewPassword1, setVerifyNewPassword1] = useState("");
  const [verifyNewPassword2, setVerifyNewPassword2] = useState("");
  const [same, setSame] = useState("none");
  const navigate = useNavigate();
  const diffToast = () => {
    toast.success("Your password has been successfully changed.", {
      position: "top-center",
    });
    setTimeout(() => {
      navigate("../adminDashboard", { replace: true });
    }, 5500);
  };
  const submit=(e)=>{
    e.preventDefault();
    if (oldPassword.length<8){
      setVerifyOldPassword(true)
    }
    else if ( newPassword1.length<8 ){
      setVerifyNewPassword1(true)
    }
    else if (newPassword2.length<8){
      setVerifyNewPassword2(true)
    }
    else if (same) {
      diffToast();
    }
  }

  useEffect(() => {
    document.title = "Change Password";
    if (same !== "none") {
      if (newPassword1 === newPassword2) {
        setSame(true);
      } else {
        setSame(false);
      }
    }
  }, [same,newPassword1, newPassword2]);
  return (
    <>
    <Navigationbar></Navigationbar>
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
              onSubmit={(e) => submit(e)}
            >
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter your current Password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Current Password"
                  onChange={(e) => {
                    if (e.target.value.length >= 8) {
                      setVerifyOldPassword(false)                                            
                    }
                    setOldPassword(e.target.value)
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}
                  
                />
                 {verifyOldPassword ? (
                <div
                  className="text-danger"
                  style={{ textSize: "10px", textAlign: "center" }}
                >
                  <br />
                  Please Enter a valid Password
                </div>
              ) : (
                <></>
              )}
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter your new Password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  onChange={(e) => {
                    if (e.target.value.length >= 8) {
                      setVerifyNewPassword1(false)                                            
                    }
                    setNewPassword1(e.target.value)
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}
                  
                />
                {verifyNewPassword1 ? (
                <div
                  className="text-danger"
                  style={{ textSize: "10px", textAlign: "center" }}
                >
                  <br />
                  Please Enter a valid Password
                </div>
              ) : (
                <></>
              )}
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Retype your new Password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Retype Password"
                  onChange={(e) => {
                    if (e.target.value.length >= 8) {
                      setVerifyNewPassword2(false)                                            
                    }
                    setNewPassword2(e.target.value);
                    if (same === "none") {
                      setSame("");
                    }
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}

                />
                {verifyNewPassword2 ? (
                <div
                  className="text-danger"
                  style={{ textSize: "10px", textAlign: "center" }}
                >
                  <br />
                  Please Enter a valid Password
                </div>
              ) : (
                <></>
              )}
              </Form.Group>
              <br />
              {same === false ? (
                <div
                  className="text-danger"
                  style={{ textSize: "10px", textAlign: "center" }}
                >
                  New Password doesn't Match <br></br>
                </div>
              ) : (
                <></>
              )}
              <br></br>
              <Button variant="success btn-block" type="submit">
                Submit
              </Button>
              <ToastContainer />
            </Form>
            <div style={{textSize: "10px", textAlign: "center",padding:"10px"}}>
            <a  href="/adminDashboard">Go Back</a></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
