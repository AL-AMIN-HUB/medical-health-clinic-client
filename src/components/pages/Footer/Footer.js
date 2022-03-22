import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_bg">
      <div className="container">
        <footer className="text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>

                <img className="img-fluid mb-3 w-75" src="https://i.ibb.co/9hrthm4/logo.png" alt="" />

                <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>

                <div className="mt-4 link_social">
                  <i className="fab fa-facebook i "></i>

                  <i className="fab fa-dribbble i"></i>

                  <i className="fab fa-twitter i"></i>

                  <i className="fab fa-google i"></i>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="formControlLg">
                    Search
                  </label>
                  <input type="text" id="formControlLg" className="form-control form-control-lg" />
                </div>

                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="ms-2">New York, NY 10012, US</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="ms-2">info@example.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="ms-2">+ 01 234 567 88</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-print"></i>
                    </span>
                    <span className="ms-2">+ 01 234 567 89</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center color_custom_bg shadow rounded-3">
                  <tbody className="font-weight-normal text-white">
                    <tr className="border-0">
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr className="border-0">
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr className="border-0">
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                    <tr className="border-0">
                      <td>WED - THU:</td>
                      <td>10am - 8pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center p-3">© 2022 Copyright: Al Amin</div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
