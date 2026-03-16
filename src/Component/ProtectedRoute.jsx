import React, { useContext } from "react";
import { TokenContext } from "../Store/TokenContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(TokenContext);

  console.log(children);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
