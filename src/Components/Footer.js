import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Footer.css';

function Footer() {
  
  return (
    <footer className="bg-dark text-white text-center p-3" style={{ width: '100%', height: '200px', marginTop: '80px' }}>
      <div className="row" style={{ padding:"25px"  }}>
        <div className="col-2">
          <Link to="/Terms" style={{ textDecoration: 'none', fontSize: '18px' , color:'#ffff' }}>Terms and conditions</Link> {/* Link to the Terms and conditions page */}
        </div>
        <div className="col-8">
          <Link to="/game-addiction" style={{ textDecoration: 'none', fontSize: '18px',color:'#ffff'}}>Game Addiction</Link> {/* Link to the Game Addiction page */}
        </div>
        <div className="col-2">
          <Link to="/privacy-policy" style={{ textDecoration: 'none', fontSize: '18px',color:'#ffff'}}>Privacy Policy</Link> {/* Link to the Privacy Policy page */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
