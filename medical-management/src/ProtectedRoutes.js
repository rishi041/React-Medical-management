import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const { Component } = props;

  const auth = { token: localStorage.getItem("login") };

  if (auth.token === "true") {
    return <Component />;
  }

  if (auth.token === "false") {
    return <Navigate to="/" />;
  }

  return <Navigate to="/" />;
};

export default ProtectedRoutes;
