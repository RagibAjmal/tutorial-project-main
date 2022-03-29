import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Col,
  Row,
  Card,
  Container,
  Table,
  Button,
} from "react-bootstrap";
import { NavLink, Outlet, Link } from "react-router-dom";
import axios from "axios";
import "./AdminDashboardP.css";
const AdminDashboardP = () => {
  const [recentScreen, setrecentScreen] = useState([10]);
  const [openScreen, setOpenScreen] = useState(2);
  const [screenCondition, setScreenCondition] = useState(true);

  const [recent, setrecent] = useState([3]);
  const [open, setOpen] = useState(2);
  const [condition, setCondition] = useState(true);

  const step = async () => {
    const current = await axios.get("http://localhost:3003/ausers");
    setrecent(current.data);
    // setrecentScreen(screens.data);
    console.log(current);
    //  return current;
  };

  const stepScreen = async () => {
    const screens = await axios.get("http://localhost:3003/screens");
    setrecentScreen(screens.data);
    //console.log(current);
    //  return current;
  };

  useEffect(() => {
    step();
    stepScreen();
  }, []);

  const loadMore = () => {
    if (condition) {
      setOpen(recent.length);
      setCondition(false);
    } else {
      setOpen(2);
      setCondition(true);
    }
  };

  const loadMoreScreen = () => {
    if (screenCondition) {
      setOpenScreen(recentScreen.length);
      setScreenCondition(false);
    } else {
      setOpenScreen(2);
      setScreenCondition(true);
    }
  };
  return (
    <div>
      <Container>

        
<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        {/* <Row style={{marginTop:"40px"}}>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Total Users</Card.Title>
                                    <Card.Text>
                                        <p>06</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Total Screens</Card.Title>
                                    <Card.Text>
                                        <p>02</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Movies</Card.Title>
                                    <Card.Text>
                                        <p>XXXX</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={2}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Total Orders</Card.Title>
                                    <Card.Text>
                                        <p>XXXX</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card> 
                        </Col>
                    </Row>*/}

        <Row style={{ marginTop: "40px" }}>
          <Col sm={4}>
            <h5>Recent Users</h5>
          </Col>
          <Col md={{ span: 2, offset: 6 }} sm={{ span: 3, offset: 5 }}>
            <Button
              onClick={loadMore}
              style={{ width: "100%" }}
              variant="outline-success"
            >
              {condition ? "View All" : "collapse"}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table bordered>
              <thead style={{ backgroundColor: "#1266F1", color: "white" }}>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "rgb(212, 237, 245)" }}>
                {recent.slice(0, open).map((json) => (
                  <tr>
                    <td>{json.id}</td>
                    <td>{json.name}</td>
                    <td>{json.email}</td>
                    <td>{json.gender}</td>
                    <td>{json.created}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Col sm={4}>
            <h5>Screens</h5>
          </Col>
          <Col md={{ span: 2, offset: 6 }} sm={{ span: 3, offset: 5 }}>
            <Button
              onClick={loadMoreScreen}
              style={{ width: "100%" }}
              variant="outline-success"
            >
              {screenCondition ? "View All" : "collapse"}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table bordered>
              <thead style={{ backgroundColor: "#1266F1", color: "white" }}>
                <tr>
                  <th>Id</th>
                  <th>Screen Name</th>
                  <th>Total Seats</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "rgb(212, 237, 245)" }}>
                {/* {recent.slice(0,open).map((json) => <tr><td>{json.id}</td><td>{json.username}</td><td>{json.email}</td><td>{json.gender}</td><td>{json.created}</td></tr>)}   */}
                {recentScreen.slice(0, openScreen).map((dat) => (
                  <tr>
                    <td>{dat.id}</td>
                    <td>{dat.screenname}</td>
                    <td>{dat.totalseats}</td>
                    <td>{dat.created}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboardP;
