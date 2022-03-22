import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Menubar.css";
import $ from "jquery";

const Menubar = () => {
  function animation() {
    const tabsNewAnim = $("#navbarSupportedContent");
    const activeItemNewAnim = tabsNewAnim.find(".active");
    const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    const itemPosNewAnimTop = activeItemNewAnim.position();
    const itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      const activeWidthNewAnimHeight = $(this).innerHeight();
      const activeWidthNewAnimWidth = $(this).innerWidth();
      const itemPosNewAnimTop = $(this).position();
      const itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <div className="navbar-main">
      <Nav className="navbar  navbar-expand-lg navbar-mainbg container">
        <Link to="/" className="navbar-brand navbar-logo">
          <img className="img-fluid" style={{ height: "32px" }} src="https://i.ibb.co/9hrthm4/logo.png" alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-danger"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item active">
              <NavLink to="/home" className="nav-link">
                <i className="fas fa-tachometer-alt">Home</i>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="/about" className="nav-link">
                <i className="far fa-address-book">About</i>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="/exploreServices" className="nav-link">
                <i className="far fa-clone">Services</i>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="/appointmentForm" className="nav-link">
                <i className="far fa-chart-bar">Appointment</i>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="/contact" className="nav-link">
                <i className="far fa-copy">Contact Us</i>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="/register" className="nav-link">
                <i className="far fa-user fw-bold">Sign up</i>
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    </div>
  );
};

export default Menubar;
