import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = !!localStorage.getItem("token"); //Check if token is in local storage

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
