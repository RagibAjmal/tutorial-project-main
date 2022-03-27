import React, { useState } from 'react';



import {
  Table,
  Col,
  Row,
  Button,
  Form,
  FormControl,
  Nav,
  Container,
  Navbar,
} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack'


export default function Button2() {
  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <div className="bg-light border">
          <Button variant="outline-secondary">Recent Exams</Button>{' '}
        </div>
        <div className="bg-light border ms-auto">
          <Button variant="primary">View all</Button>{' '}
        </div>
      </Stack>
      <br />
    </Container>
  );
}
