import React, { useState } from 'react';

import {
  
  Button,
  
  Container,
  
} from 'react-bootstrap';
import {Stack} from 'react-bootstrap'

export default function Button1() {
  return (
    
    <Container>
     <Stack direction="horizontal" gap={3}>
  <div className="bg-light border">First item</div>
  <div className="bg-light border ms-auto">Second item</div>
  <div className="bg-light border ms-auto"><Button variant="primary">View all</Button>{' '}</div>
  
</Stack>
    </Container>
  );
}
