import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const Auth = useSelector((state) => state.Auth.Authenticated);
  console.log(Auth);
  return <>{Auth ? children : <Navigate to="/" />}</>;
};
