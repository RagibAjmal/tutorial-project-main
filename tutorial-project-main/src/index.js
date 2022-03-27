import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import ManageUsers from "./components/ManageUsers/ManageUsers";
import ManageExams from "./components/ManageExams/ManageExams";
import SearchExam from "./components/SearchAttendExams/SearchExam.js";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="registerPage" element={<RegisterPage />} />
				<Route path="adminDashboard" element={<AdminDashboard />} />
				<Route path="studentDashboard" element={<StudentDashboard />} />
				<Route path="manageUsers" element={<ManageUsers />} />
				<Route path="manageExams" element={<ManageExams />} />
				<Route path="attendExam" element={<SearchExam />} />
				<Route path="forgotPassword" element={<ForgotPassword />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
