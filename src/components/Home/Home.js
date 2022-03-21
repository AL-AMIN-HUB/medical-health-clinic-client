import React, { useState } from "react";
import "./Home.css";
import AppointmentAdBanner from "../pages/AppointmentAdBanner/AppointmentAdBanner";
import ClinicTreatment from "../pages/ClinicTreatment/ClinicTreatment";
import CountUpp from "../pages/CountUp/CountUpp";
import DoctorBanner from "../pages/DoctorBanner/DoctorBanner";
import Gallery from "../pages/Gallery/Gallery";
import Header from "../pages/Header/Header";
import HeadOfClinic from "../pages/HeadOfClinic/HeadOfClinic";
import Review from "../pages/Review/Review";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 5000) {
      setVisible(true);
    } else if (scrolled <= 5000) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <div>
        <Header />
        <HeadOfClinic />
        <CountUpp />
        <ClinicTreatment />
        <Gallery />
        <DoctorBanner />
        <Review />
        <AppointmentAdBanner />
      </div>
      <button style={{ border: "none" }} className={visible ? "gotoUp" : ""} onClick={scrollTop}>
        <i className="fas  fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Home;
