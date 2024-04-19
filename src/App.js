import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./Components/Footer";
import Terms from "./Components/Terms";
import GameAddiction from "./Components/GameAddiction";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import CustomNavbar from "./Components/Nav";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/game-addiction" element={<GameAddiction />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
