import React, { useState } from 'react';
import './App.css';


import {
  Table,
  Col,
  Row,
  Button,
  Stack,
  Form,
  FormControl,
  Nav,
  Container,
  Navbar,
} from 'react-bootstrap';

export default function Button2() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Button variant="outline-dark">Recent Orders</Button>
        </Col>
        <Col className="justify-content-end">
        
          
            <Button size="sm" className="view-all-button">
              View All
            </Button>
          
        </Col>
      </Row>
    </Container>
  );
}
