import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./component/login";
import Home from "./component/home";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoutes Component={Home} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
