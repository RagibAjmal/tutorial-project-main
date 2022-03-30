import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../Store/Auth";

const LoginPage = () => {
  const Auth = useSelector((state) => state.Auth.Authenticated);
  const Role = useSelector((state) => state.Auth.Role);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch(`./data/data.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })

      .catch(() => console.log("error"));

    if (data) {
      for (let key in data) {
        if (data[key].emailId === email) {
          if (data[key].password === password) {
            dispatch(AuthActions.Login());
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
    setVerify(true);
  }

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
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  // onInvalid={(e) =>
                  //   e.target.setCustomValidity(
                  //     "Please Enter Valid E-mail Address"
                  //   )
                  // }
                  // onInput={(e) => e.target.setCustomValidity("")}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
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

              {verify ? (
                <div
                  className="text-danger"
                  style={{ "text-size": "10px", "text-align": "center" }}
                >
                  <br />
                  Invalid Username or Password
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
