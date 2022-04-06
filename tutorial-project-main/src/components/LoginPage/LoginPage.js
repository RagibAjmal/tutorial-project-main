import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthActions } from "../Store/Auth";
import "./LoginPage.css";
import validator from 'validator';

const LoginPage = () => {
  const Auth = useSelector((state) => state.Auth.Authenticated);
  // const Role = useSelector((state) => state.Auth.Role);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [verifyPassword, setVerifyPassword] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("none");
  const [verifyEmailPassword, setVerifyEmailPassword] = useState(false);


function handleSubmit(event) {
    event.preventDefault();
    if (verifyEmail==="none"){setVerifyEmail(true)}
    else if(!verifyEmail===true && password.length < 8){
      setVerifyPassword(true)
    }
    else if (verifyEmail===false){
    if (data) {
      for (let key in data) {
        if (data[key].emailId === email) {
          if (data[key].password === password) {
            dispatch(AuthActions.Login());
            console.log("das")
            if (data[key].role === "Admin") {
              dispatch(AuthActions.Admin());
              navigate("../adminDashboard", { replace: true });
            } else if (data[key].role === "Student") {
              dispatch(AuthActions.Student());
              navigate("../studentDashboard", { replace: true });
            }
          }
        }
      }
    }
    setVerifyEmailPassword(true);
  }
}
  useEffect(() => {
    document.title = "Login Page";
    fetch(`./data/data.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch(() => console.log("error"));
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
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address*</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    if (validator.isEmail(e.target.value) === false){ 
                    setVerifyEmail(true);}
                    else {
                      setVerifyEmail(false)
                    }
                    setEmail(e.target.value)}}
                  
                  type="text"
                  placeholder="Enter email"
                />
              </Form.Group>
              {verifyEmail === true ? (
                <div
                  className="text-danger"
                  style={{ textSize: "10px", textAlign: "center" }}
                >
                  <br />
                  Please Enter a valid Email 
                </div>
              ) : (
                <></>
              )}
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    if (e.target.value.length >= 8) {
                      setVerifyPassword(false)
                    }
                    setPassword(e.target.value);
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}
                  
                />
              </Form.Group>

              {verifyPassword ? (
                <div
                  className="text-danger"
                  style={{ textSize: "10px", textAlign: "center" }}
                >
                  <br />
                  Password must be atleast 8 digits
                </div>
              ) : (
                <></>
              )}
              {verifyEmailPassword? (
                <div
                  className="text-danger"
                  style={{ textSize: "10px", textAlign: "center" }}
                >
                  <br />
                  Invalid Username or Passsword 
                </div>
              ) : (
                <></>
              )}

              <br />

              <Form.Label className="forgotPassword">
                <a href="forgotPassword">Forgot password</a>
              </Form.Label>
              <br />
              <Button variant="success btn-block" type="submit">
                Login
              </Button>
              <br />

              <Form.Label className="signup">
                Don't have an account?&nbsp;<a href="/registerPage">Signup</a>
              </Form.Label>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
