import React from "react";
import { IconContext } from "react-icons/lib";
import { GrGroup } from "react-icons/gr";
import { BsPencilSquare, BsPencil } from "react-icons/bs";
import "./App.css";
import { Col, Row, Card, Container } from "react-bootstrap";
import data from './userdata.json'; 
export default function Card1() {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <Container>
        <Row>
          <Col style={{ height: "7rem" }}>
            <Card
              className="text-center card1"
              style={{ width: "9rem" }}
              responsive
            >
              <Card.Body>
                <Card.Title>
                  <GrGroup />
                </Card.Title>
                <Card.Title>Total Students</Card.Title>
                <Card.Text><h3>{data.length}</h3></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ height: "7rem" }}>
            <Card
              className="text-center card1"
              style={{ width: "9rem" }}
              responsive
            >
              <Card.Body>
                <Card.Title>
                  <BsPencilSquare />
                </Card.Title>
                <Card.Title>Total Exams</Card.Title>
                <Card.Text>xxxx</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ height: "7rem" }}>
            <Card
              className="text-center card1"
              style={{ width: "9rem" }}
              responsive
            >
              <Card.Body>
                <Card.Title>
                  <BsPencil />
                </Card.Title>
                <Card.Title>Total Attemps</Card.Title>
                <Card.Text>xxxx</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </IconContext.Provider>
  );
}
