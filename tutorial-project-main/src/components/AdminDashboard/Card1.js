import React, { useState } from 'react';
import './App.css';


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


<Container>
                <Row>
                  <Col style={{ height: '9rem' }}>
                    <Card style={{ width: '8rem' }} responsive>
                      <Card.Body>
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
  );
}