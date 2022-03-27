import React, { useState } from 'react';
import { FaAddressBook } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { GrGroup } from "react-icons/gr";

import {
  Table,
  Col,
  Row,
  Button,
  Stack,
  Form,
  FormControl,Card,
  Nav,
  Container,
  Navbar,
} from 'react-bootstrap';

export default function Card1() {
  

  return (
    <IconContext.Provider value={{size: "1.5em"}}>
              <Container>
                <Row>
                  <Col style={{ height: '9rem' }}>
                    <Card style={{ width: '9rem' }} responsive>
                      <Card.Body>
                        <Card.Title><GrGroup /></Card.Title>
                        <Card.Title>Total Students</Card.Title>
                        <Card.Text>xxxx</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col style={{ height: '9rem' }}>
                    <Card style={{ width: '8rem' }} responsive>
                      <Card.Body>
                        <Card.Title>Total Exams</Card.Title>
                        <Card.Text>xxxx</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col style={{ height: '9rem' }}>
                    <Card style={{ width: '8rem' }} responsive>
                      <Card.Body>
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