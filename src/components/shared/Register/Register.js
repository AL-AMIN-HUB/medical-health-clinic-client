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
    <div className="register">
      <div className="form-bg">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
              <div className="form-container">
                <h3 className="title">Create Account</h3>
                <ul className="social-links">
                  <li>
                    <button className="button_auth" onClick={googleLogin}>
                      <i className="fab fa-google"></i>
                    </button>
                  </li>
                  <li>
                    <button className="button_auth">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                  </li>
                  <li>
                    <button className="button_auth">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </li>
                </ul>
                <span className="description">or use you email for registration:</span>
                <form onSubmit={handleSubmit} className="form-horizontal">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <input type="checkbox" className="checkbox" />
                    <span className="check-label">
                      I agree to the <Link to="">Terms</Link> and <Link to="">Privacy Policy.</Link>
                    </span>
                  </div>
                  <button className="btn signup">Sign up</button>
                  <Link to="/login">
                    <button className="btn signin">Log in</button>
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
