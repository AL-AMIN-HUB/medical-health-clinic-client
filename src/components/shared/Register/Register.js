import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { googleLogin } = useAuth();
  return (
    <div class="register">
      <div class="form-bg">
        <div class="container mx-auto">
          <div class="row">
            <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
              <div class="form-container">
                <h3 class="title">Create Account</h3>
                <ul class="social-links">
                  <li>
                    <button className="button_auth" onClick={googleLogin}>
                      <i class="fab fa-google"></i>
                    </button>
                  </li>
                  <li>
                    <button className="button_auth">
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </li>
                  <li>
                    <button className="button_auth">
                      <i class="fab fa-twitter"></i>
                    </button>
                  </li>
                </ul>
                <span class="description">or use you email for registration:</span>
                <form onSubmit={handleSubmit} class="form-horizontal">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" />
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" />
                  </div>
                  <div class="form-group">
                    <input type="checkbox" class="checkbox" />
                    <span class="check-label">
                      I agree to the <Link to="">Terms</Link> and <Link to="">Privacy Policy.</Link>
                    </span>
                  </div>
                  <button class="btn signup">Sign up</button>
                  <Link to="/login">
                    <button class="btn signin">Log in</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
