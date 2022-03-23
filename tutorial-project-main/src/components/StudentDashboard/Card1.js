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
                        <Card.Title>Total Attempts</Card.Title>
                        <Card.Text>xxxx</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col style={{ height: '9rem' }}>
                    <Card style={{ width: '8rem' }} responsive>
                      <Card.Body>
                        <Card.Title>Highest Score</Card.Title>
                        <Card.Text>xxxx</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col style={{ height: '9rem' }}>
                    <Card style={{ width: '8rem' }} responsive>
                      <Card.Body>
                        <Card.Title>Average Score</Card.Title>
                        <Card.Text>xxxx</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
  );
}