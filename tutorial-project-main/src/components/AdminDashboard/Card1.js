import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsPencil, BsPencilSquare } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import "./App.css";

export default function Card1() {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <Container>
        <Row>
          <Col className="styling1" style={{ height: "7rem" }}>
            <Card
              className="text-center card1 bg-success"
              style={{ width: "12rem" }}
              responsive
            >
              <Card.Body>
                <Card.Title>Total Students</Card.Title>
                <Card.Title>
                  <GrGroup />
                </Card.Title>
                <Card.Text>
                  <h3>4</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="styling1" style={{ height: "7rem" }}>
            <Card
              className="text-center card1"
              style={{ width: "12rem", background: "aqua" }}
              responsive
            >
              <Card.Body>
                <Card.Title>Total Exams</Card.Title>
                <Card.Title>
                  <BsPencilSquare />
                </Card.Title>
                <Card.Text>
                  <h3>4</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="styling1" style={{ height: "7rem" }}>
            <Card
              className="text-center card1"
              style={{ width: "12rem", background: "coral" }}
              responsive
            >
              <Card.Body>
                <Card.Title>Total Attemps</Card.Title>
                <Card.Title>
                  <BsPencil />
                </Card.Title>
                <Card.Text>
                  <h3>3</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </IconContext.Provider>
  );
}
