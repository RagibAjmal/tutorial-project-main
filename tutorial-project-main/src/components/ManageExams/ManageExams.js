import React, { useEffect } from "react";
import "./style.css";
import Navigationbar from "./Navigationbar";
import ModalForm from "./ModalForm";
import Table from "./Table";
import Footer from "./Footer";

export default function ManageExams() {
  useEffect(() => {
    document.title = "Manage Exams";
  }, []);
  return (
    <div>
      <Navigationbar />
      <ModalForm />
      <Table />
      <Footer />
    </div>
  );
}
