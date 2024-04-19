import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="bg-dark text-white text-center p-3"
      style={{ width: "100%", height: "200px", marginTop: "80px" }}
    >
      <div className="row" style={{ padding: "25px" }}>
        <div className="col-2">
          <Link
            to="/terms"
            style={{ textDecoration: "none", fontSize: "18px", color: "#ffff" }}
          >
            <button className="btn btn-secondary">Terms and conditions</button>
          </Link>
        </div>
        <div className="col-8">
          <Link
            to="/game-addiction"
            style={{ textDecoration: "none", fontSize: "18px", color: "#ffff" }}
          >
            <button className="btn btn-secondary">Game Addiction</button>
          </Link>
        </div>
        <div className="col-2">
          <Link to="/privacy-policy">
            <button className="btn btn-secondary"> Privacy Policy</button>
          </Link>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
