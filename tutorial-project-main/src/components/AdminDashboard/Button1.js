import React, { useState } from 'react';

import {
  
  Button,
  
  Container,


  
} from 'react-bootstrap';
import { Stack } from 'react-bootstrap'

export default function Button1() {
  return (
    
    <Container>
      <Stack direction="horizontal" gap={3}>
       <div className="bg-light border">Recent Users</div>
       <div className="bg-light border ms-auto"></div>
       <div><Button className="ButtonStyle" variant="primary">View all</Button>{' '}</div>
      </Stack>
    </Container>
  );
}
