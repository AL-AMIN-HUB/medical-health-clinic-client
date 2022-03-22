import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/pages/About/About";
import AppointmentForm from "./components/pages/AppointmentForm/AppointmentForm";
import Contact from "./components/pages/Contact/Contact";
import ErrorRoute from "./components/pages/ErrorRoute/ErrorRoute";
import ExploreServices from "./components/pages/Explore/ExploreServices";
import Footer from "./components/pages/Footer/Footer";
import ServiceDetails from "./components/pages/ServiceDetails/ServiceDetails";
import Services from "./components/pages/Services/Services";
import Login from "./components/shared/Login/Login";
import Menubar from "./components/shared/Menubar/Menubar";
import Register from "./components/shared/Register/Register";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/exploreServices" element={<ExploreServices />} />
            <Route path="/appointmentForm" element={<AppointmentForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/serviceDetails/:serviceId" element={<ServiceDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorRoute />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
