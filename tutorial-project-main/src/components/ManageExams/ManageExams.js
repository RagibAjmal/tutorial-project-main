import React, { useState } from 'react';
import './style.css';
import Navigationbar from './Navigationbar';
import ModalForm from './ModalForm';
import Table from './Table';
import Footer from './Footer';
import {
  
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
export default function ManageExams() {
  return (
   
     <div>
        <Navigationbar />
        <ModalForm />
        <Table />
        <Footer />
      </div>
    
  );
}
