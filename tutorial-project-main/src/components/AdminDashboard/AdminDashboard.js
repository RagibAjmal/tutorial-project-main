import React from "react";
import "./style.css";
import "./App.css";
import NavBar from "./Navbar";
import Card1 from "./Card1";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Table from "./Table";
import Table2 from "./Table2";
import { useEffect } from "react";
export default function AdminDashboard() {
  useEffect(() => {
    document.title = "Admin Dashboard";
  }, []);
  return (
    <div>
      <NavBar />
      <Card1 />
      <Button1 />
      <br />
      <Table />
      <br />
      <Button2 />
      <Table2 />
    </div>
  );
}
