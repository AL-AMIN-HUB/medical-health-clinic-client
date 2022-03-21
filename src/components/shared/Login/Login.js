import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="wrapper">
        <div className="logo">
          {" "}
          <img src="https://i.ibb.co/Rgy9ysn/download-80x80.png" alt="" />{" "}
        </div>
        <div className="text-center mt-4 name"> Sign In Account </div>
        <form onSubmit={handleSubmit} className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            {" "}
            <span className="far fa-user"></span> <input type="email" name="email" id="userName" placeholder="Email" />{" "}
          </div>
          <div className="form-field d-flex align-items-center">
            {" "}
            <span className="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password" />{" "}
          </div>{" "}
          <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
          {" "}
          <Link to="/register">Forget password?</Link> or <Link to="/register">Sign up</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
