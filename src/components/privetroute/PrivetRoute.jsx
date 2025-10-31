import React, { use } from "react";
import { AuthContext } from "../../authContexts/authContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="text-green-500 text-5xl">loading...</span>;
  }
  if (!user) {
    return <Navigate state={location} to="/login"></Navigate>;
  }
  return children;
};

export default PrivetRoute;
