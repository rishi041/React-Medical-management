import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/medicine";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState([]);
 

  const navigate = useNavigate();

  // RetrieveLoginData start
  const retrieveLogin = async () => {
    const response = await api.get("/login");
    return response.data;
  };

  useEffect(() => {
    const getAllLogin = async () => {
      const allLogin = await retrieveLogin();
      if (allLogin) setLogin(allLogin);
    };
    getAllLogin();
  }, []);
  // RetrieveloginData end

  const submitForm = (e) => {
    e.preventDefault();
    {
      login &&
        login.map((record) => {
          if (record.email === email && record.password === password) {
            navigate("/home");
            localStorage.setItem("login", "true");
          } else {
            alert("Invalid Data");
            localStorage.setItem("login", "false");
          }
        });
    }
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="border border-secondary rounded p-5">
        <h1 className="mb-3">Medical Management Login</h1>
        <form action="" onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="text-center ">
            <button
              type="submit"
              className="btn btn-dark rounded-pill px-4 mx-2"
              style={{ fontSize: "20px" }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
