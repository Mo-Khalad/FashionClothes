import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "../Store/TokenContext";

const PublicRoute = ({ children }) => {
  const { token } = useContext(TokenContext);

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;