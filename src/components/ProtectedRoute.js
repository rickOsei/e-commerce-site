import React from "react";
import useAuth from "./useAuth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
