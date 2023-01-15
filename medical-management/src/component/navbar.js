import React, { useState, useEffect } from "react";
import apiLogin from "../api/medicine";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState([]);

  const navigate = useNavigate();

  const loadUsers = () => {
    apiLogin.get("/login").then((res) => {
      setLogin(res.data);
    });
  };

  // get Data start
  useEffect(() => {
    loadUsers();
  }, []);
  // get Data end

  function btnclick(e) {
    e.preventDefault();
    localStorage.setItem("login", "false");
    navigate("/");
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="d-flex justify-content">
          <a className="navbar-brand px-2" href="#0">
            Medical Management
          </a>
        </div>

        <div className="d-flex justify-content-end">
          {login.map((record) => {
            return (
              <a
                className="text-decoration-none my-auto px-2"
                href="#0"
                key={record.id}
              >
                {record.name}
              </a>
            );
          })}
          <button
            type="button"
            onClick={btnclick}
            className="btn text-danger px-2"
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
