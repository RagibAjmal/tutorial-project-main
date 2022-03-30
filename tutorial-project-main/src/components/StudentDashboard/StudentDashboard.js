import React, { useEffect } from "react";
import "./style.css";

import NavBar from "./Navbar";
import Card1 from "./Card1";

import Button2 from "./Button2";

import Table2 from "./Table2";

export default function StudentDashboard() {
  useEffect(() => {
		document.title = "Student Dashboard";
	  }, []);
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
