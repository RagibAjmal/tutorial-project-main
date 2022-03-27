import React, { useState } from 'react';
import './App.css';
import {
  
  Button,
  Row,
  Container,
  Col


  
} from 'react-bootstrap';
import { Stack } from 'react-bootstrap'

export default function Button1() {
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
