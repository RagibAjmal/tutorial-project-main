import React, { useEffect } from 'react';
import './style.css';
import Navigationbar from './Navigationbar';
import ModalForm from './ModalForm';
import Table1 from './Table1';
import Footer from './Footer';

export default function ManageUsers() {
  useEffect(() => {
    document.title = "Manage Users";
  }, []);
  return (
   
     <div>
        <Navigationbar />
        <ModalForm />
        <Table1 />
        <Footer />
      </div>
    
  );
}
