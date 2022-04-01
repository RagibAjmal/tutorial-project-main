import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsGraphUp, BsPencil } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { RiBarChartFill } from "react-icons/ri";
import "./App.css";

export default function Card1() {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <Container>
        <Row>
          <Col style={{ height: "9rem" }}>
            <Card
              className="text-center card1"
              style={{ width: "8rem" }}
              responsive
            >
              <Card.Body>
                <Card.Title>
                  <BsPencil />
                </Card.Title>
                <Card.Title>Total Attempts</Card.Title>
                <Card.Text>10</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ height: "9rem" }}>
            <Card
              className="text-center card1"
              style={{ width: "8rem" }}
              responsive
            >
              <Card.Body>
                <Card.Title>
                  <BsGraphUp />
                </Card.Title>
                <Card.Title>Highest Score</Card.Title>
                <Card.Text>92</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ height: "9rem" }}>
            <Card
              className="text-center card1"
              style={{ width: "8rem" }}
              responsive
            >
              <Card.Body>
                <Card.Title>
                  <RiBarChartFill />
                </Card.Title>
                <Card.Title>Average Score</Card.Title>
                <Card.Text>75</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </IconContext.Provider>
  );
}
