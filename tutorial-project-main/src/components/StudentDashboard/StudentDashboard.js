import React, { useState } from 'react';
import './style.css';


import NavBar from './Navbar';
import Card1 from './Card1';

import Button2 from './Button2';

import Table2 from './Table2';
import {
  
  Col,
  Row,
  Button,
  Stack,
  Form,
  FormControl,
  Nav,
  Container,
  
} from 'react-bootstrap';
export default function StudentDashboard() {
  return (
    <div>
      <br />
      <NavBar />
      <Card1 />
      
      
      <br />
      <Button2 />
      <Table2 />
    </div>
  );
}
