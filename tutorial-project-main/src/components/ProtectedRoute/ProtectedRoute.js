import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useSelector} from "react-redux";

export const ProtectedRoute = ({
  children
}) => {

  const Auth = useSelector((state) => state.Auth.Authenticated);
  return <div>{Auth ? children : <Navigate to="/loginPage" />}</div>;
};
