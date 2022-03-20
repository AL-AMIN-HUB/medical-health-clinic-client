import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import ErrorRoute from "./components/pages/ErrorRoute/ErrorRoute";
import Footer from "./components/pages/Footer/Footer";
import Services from "./components/pages/Services/Services";
import Login from "./components/shared/Login/Login";
import Menubar from "./components/shared/Menubar/Menubar";
import Register from "./components/shared/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorRoute />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
