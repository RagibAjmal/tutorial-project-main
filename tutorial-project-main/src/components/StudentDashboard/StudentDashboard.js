import React from "react";
import Button2 from "./Button2";
import Card1 from "./Card1";
import NavBar from "./Navbar";
import "./style.css";
import Table2 from "./Table2";

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
