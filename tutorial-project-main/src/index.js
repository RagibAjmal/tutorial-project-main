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
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./components/Store/Store";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import SearchExam from "./components/SearchAttendExams/SearchExam";

import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="registerPage" element={<RegisterPage />} />
          <Route
            path="adminDashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="studentDashboard"
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="manageUsers"
            element={
              <ProtectedRoute>
                <ManageUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="manageExams"
            element={
              <ProtectedRoute>
                <ManageExams />
              </ProtectedRoute>
            }
          />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route
            path="changePassword"
            element={
              <ProtectedRoute>
                <ChangePassword />
              </ProtectedRoute>
            }
          />
          ??
          <Route
            path="searchExam"
            element={
              <ProtectedRoute>
                <SearchExam />
              </ProtectedRoute>
            }
          />
          ??
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
