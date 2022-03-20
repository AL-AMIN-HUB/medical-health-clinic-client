import React from "react";
import AppointmentAdBanner from "../pages/AppointmentAdBanner/AppointmentAdBanner";
import ClinicTreatment from "../pages/ClinicTreatment/ClinicTreatment";
import CountUpp from "../pages/CountUp/CountUpp";
import DoctorBanner from "../pages/DoctorBanner/DoctorBanner";
import Gallery from "../pages/Gallery/Gallery";
import Header from "../pages/Header/Header";
import HeadOfClinic from "../pages/HeadOfClinic/HeadOfClinic";
import Review from "../pages/Review/Review";

const Home = () => {
  return (
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
  );
};

export default Home;
