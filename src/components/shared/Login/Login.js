import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div class="wrapper">
        <div class="logo">
          {" "}
          <img src="https://i.ibb.co/Rgy9ysn/download-80x80.png" alt="" />{" "}
        </div>
        <div class="text-center mt-4 name"> Sign In Account </div>
        <form onSubmit={handleSubmit} class="p-3 mt-3">
          <div class="form-field d-flex align-items-center">
            {" "}
            <span class="far fa-user"></span> <input type="email" name="email" id="userName" placeholder="Email" />{" "}
          </div>
          <div class="form-field d-flex align-items-center">
            {" "}
            <span class="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password" />{" "}
          </div>{" "}
          <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
          {" "}
          <Link to="/register">Forget password?</Link> or <Link to="/register">Sign up</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
