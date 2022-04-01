import React from 'react';
import './App.css';
import Button1 from './Button1';
import Button2 from './Button2';
import Card1 from './Card1';
import NavBar from './Navbar';
import './style.css';
import Table from './Table';
import Table2 from './Table2';
export default function AdminDashboard() {
  return (
    <div>
      
      <NavBar />
      <Card1 />
      <Button1 />
      <Table />
      <br />
      <Button2 />
      <Table2 />
    </div>
  );
}
