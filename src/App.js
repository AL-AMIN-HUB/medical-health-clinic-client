import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Menubar from "./components/shared/Menubar/Menubar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
