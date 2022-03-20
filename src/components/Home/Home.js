import React from "react";
import ClinicTreatment from "../pages/ClinicTreatment/ClinicTreatment";
import CountUpp from "../pages/CountUp/CountUpp";
import DoctorBanner from "../pages/DoctorBanner/DoctorBanner";
import Gallery from "../pages/Gallery/Gallery";
import Header from "../pages/Header/Header";
import HeadOfClinic from "../pages/HeadOfClinic/HeadOfClinic";

const Home = () => {
  return (
    <div>
      <Header />
      <HeadOfClinic />
      <CountUpp />
      <ClinicTreatment />
      <Gallery />
      <DoctorBanner />
    </div>
  );
};

export default Home;
