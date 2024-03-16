import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Terms from './Components/Terms';
import GameAddiction from './Components/GameAddiction';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Main from './Components/Main';
import What from './Components/What'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Main />
        <What />
        <Footer />
        
        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/game-addiction" element={<GameAddiction />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
