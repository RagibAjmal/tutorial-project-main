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
    <Container>
      <Stack direction="horizontal" gap={3}>
        <div className="bg-light border">
          <Button variant="outline-secondary">My Exams</Button>{' '}
        </div>
        <div className="bg-light border ms-auto">
          <Button variant="primary">View all</Button>{' '}
        </div>
      </Stack>
      <br />
    </Container>
  );
}
