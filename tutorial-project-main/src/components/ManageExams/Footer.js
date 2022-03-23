import React from 'react';
import './App.css';
import './style.css';
import { Stack } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
export default function Footer() {
  return (
    <div>
      <Container>
        <Stack direction="horizontal" gap={3}>
          <div className="bg-light border ms-auto">
            <Button variant="outline-secondary">Prev</Button>{' '}
          </div>
          <div className="bg-light" style={{ height: '30px', width: '85px' }}>
            Page x of x
          </div>
          <div className="bg-light border">
            <Button variant="outline-secondary">Next</Button>{' '}
          </div>
        </Stack>
      </Container>
    </div>
  );
}
