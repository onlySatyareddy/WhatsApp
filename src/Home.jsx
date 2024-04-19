import React, { useState } from "react";
import "./Home.css";
import CustomNavbar from "./Components/Nav";
import Footer from "./Components/Footer";

function Home() {
  const [openWhatsApp, setOpenWhatsApp] = useState(() => {
    const url = "https://wa.me/6265348276";

    return () => {
      window.open(url, "_blank");
    };
  });
  return (
    <>
      <CustomNavbar />
      <div className="landing">
        <div className="wrapper">
          <div className="logo-container" style={{ padding: "90px" }}>
            <img className="img" src="/img/logo.png" alt="Company Logo" />
            <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
              <h3
                className="display-8"
                style={{
                  margin: "30px",
                  padding: "0px",
                  color: "#e9a301",
                  fontSize: "18px",
                  wordSpacing: "4px",
                }}
              >
                {" "}
                <b>YUVRAJ [10 साल का भरोसा] - GET YOUR TRUSTED FANTASY SPORT</b>
              </h3>
              <strong>
                <h2
                  className="tlt fix"
                  data-in-effect="fadeInLeft"
                  style={{
                    textAlign: "center",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    backgroundColor: "transparent",
                  }}
                >
                  <span
                    style={{ visibility: "hidden" }}
                    aria-label="Trusted  daily fantasy sport 10% Welcome Bonus"
                  >
                    <span
                      className="word1"
                      aria-hidden="true"
                      aria-label="Trusted"
                      style={{
                        display: "inline-block",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <span
                        className="char1"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        T
                      </span>
                      <span
                        className="char2"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        r
                      </span>
                      <span
                        className="char3"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        u
                      </span>
                      <span
                        className="char4"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        s
                      </span>
                      <span
                        className="char5"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        t
                      </span>
                      <span
                        className="char6"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char7"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        d
                      </span>
                    </span>{" "}
                    <span>&nbsp;</span>
                    <span
                      className="word2"
                      aria-hidden="true"
                      style={{
                        display: "inline-block",
                        transform: "translate3d(0px, 0px, 0px)",
                        wordSpacing: "0px",
                      }}
                    ></span>
                    <span
                      className="word3"
                      aria-hidden="true"
                      aria-label="daily"
                      style={{
                        display: "inline-block",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <span
                        className="char1"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        d
                      </span>
                      <span
                        className="char2"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        a
                      </span>
                      <span
                        className="char3"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        i
                      </span>
                      <span
                        className="char4"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        l
                      </span>
                      <span
                        className="char5"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        y
                      </span>
                    </span>{" "}
                    <span>&nbsp;</span>
                    <br></br>
                    <span
                      className="word4"
                      aria-hidden="true"
                      aria-label="fantasy"
                      style={{
                        display: "inline-block",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <span
                        className="char1"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        f
                      </span>
                      <span
                        className="char2"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        a
                      </span>
                      <span
                        className="char3"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        n
                      </span>
                      <span
                        className="char4"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        t
                      </span>
                      <span
                        className="char5"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        a
                      </span>
                      <span
                        className="char6"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        s
                      </span>
                      <span
                        className="char7"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        y
                      </span>
                    </span>{" "}
                    <span>&nbsp;</span>
                    <span
                      className="word5"
                      aria-hidden="true"
                      aria-label="sport"
                      style={{
                        display: "inline-block",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <span
                        className="char1"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        s
                      </span>
                      <span
                        className="char2"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        p
                      </span>
                      <span
                        className="char3"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        o
                      </span>
                      <span
                        className="char4"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        r
                      </span>
                      <span
                        className="char5"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        t
                      </span>
                    </span>{" "}
                    <span>&nbsp;</span>
                    <br></br>
                    <span
                      className="word6"
                      aria-hidden="true"
                      aria-label="10%"
                      style={{
                        display: "inline-block",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <span
                        className="char1"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        1
                      </span>
                      <span
                        className="char2"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        0
                      </span>
                      <span
                        className="char3"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        %
                      </span>
                    </span>{" "}
                    <span>&nbsp;</span>
                    <span
                      className="word7"
                      aria-hidden="true"
                      aria-label="Welcome"
                      style={{
                        display: "inline-block",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <span
                        className="char1"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        W
                      </span>
                      <span
                        className="char2"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char3"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        l
                      </span>
                      <span
                        className="char4"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        c
                      </span>
                      <span
                        className="char5"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        o
                      </span>
                      <span
                        className="char6"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        m
                      </span>
                      <span
                        className="char7"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        e
                      </span>
                    </span>{" "}
                    <span>&nbsp;</span>
                    <br></br>
                    <span
                      className="word8"
                      aria-hidden="true"
                      aria-label="Bonus"
                      style={{
                        display: "inline-block",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <span
                        className="char1"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        B
                      </span>
                      <span
                        className="char2"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        o
                      </span>
                      <span
                        className="char3"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        n
                      </span>
                      <span
                        className="char4"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        u
                      </span>
                      <span
                        className="char5"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          visibility: "visible",
                        }}
                      >
                        s
                      </span>
                    </span>{" "}
                    <span>&nbsp;</span>
                  </span>
                  <ul
                    className="texts"
                    style={{ display: "none", letterSpacing: "5px" }}
                  >
                    <li className="current">
                      Trusted daily fantasy sport{" "}
                      <span className="current">10% Welcome Bonus</span>
                    </li>
                  </ul>
                </h2>
              </strong>
              <div
                className="bottom-container"
                style={{ margin: "30px", padding: "1px" }}
              >
                <p
                  className="bottom-text"
                  style={{ margin: "20px", color: "white", fontSize: "18px" }}
                >
                  {" "}
                  <b>
                    India's no. 1 Daily online Fantasy Sport games promoter.
                    Create<br></br> your Account within 2 minutes! Join Most
                    Trusted, Secure & <br></br>Fastest Fantasy Sport of India.
                  </b>
                </p>
              </div>
            </div>
            <div className="background">
              <button className="whatsapp-button" onClick={openWhatsApp}>
                <b>WhatsApp Now For Create Id</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="content">
              <h4 className="A">
                <strong>
                  <b>
                    {" "}
                    WELCOME IN THE FAMILY OF
                    <span className="B">
                      {" "}
                      YUVRAJ "KHELO DIL AND DIMAG SE" - OLDEST FANTASY SPORTS
                      PROVIDER{" "}
                    </span>
                  </b>
                </strong>
              </h4>
              <button
                className="get-id-button"
                style={{
                  backgroundColor: "#E4A101",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
              >
                Get Your ID Now
              </button>

              <div
                className="paragraph"
                style={{ fontSize: "15px", color: "#6C6C6C" }}
              >
                <big>
                  {" "}
                  <p>
                    {" "}
                    Get in touch with Yuvraj for any Queries, Emergencies,
                    Feedback, or Complaints. We are here to help you 24*7 with
                    our services on WhatsApp.
                  </p>
                  <p>
                    Welcome to Yuvraj fantasy, we offer you a genuinely unique
                    fantasy sports experience. Besides, We have a global network
                    and provide the best industry experience with a single
                    click.
                  </p>
                  <p>
                    Yuvraj fantasy is a responsible fantasy sports promoter. We
                    deal in all kinds of fantasy sports games. We have helped
                    50000+ players to find the best fantasy sports online.
                  </p>
                  <p>
                    {" "}
                    Our Company Works In A Very Transparent Way. Get Your Demo
                    ID Now
                  </p>
                  <h2>
                    <b>WHY CHOOSE US</b>
                  </h2>
                </big>
                <div className="game">
                  <p>24*7 Support</p>
                  <hr />
                  <p>Instant Reply</p>
                  <hr />
                  <p>Most Trusted & Secure Platform</p>
                  <hr />
                  <p>10 Lac+ Active Users</p>
                  <hr />
                  <p>250+ Branches</p>
                  <hr />
                  <p>Working Since 2010</p>
                </div>
              </div>

              <div className="follow">
                <h4>
                  <big>
                    <b>Follow us:</b>
                  </big>
                </h4>
                <div className="social-icons">
                  <a href="#">
                    <i
                      className="fab fa-instagram"
                      style={{
                        backgroundColor: "#3b5998",
                        margin: " 4px",
                        padding: "5px",
                        color: "white",
                      }}
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      className="fab fa-telegram"
                      style={{
                        backgroundColor: "#55acee",
                        margin: "4px",
                        padding: "5px",
                        color: "white",
                      }}
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      className="fab fa-whatsapp"
                      style={{
                        backgroundColor: "#d71e18",
                        margin: "4px",
                        padding: "5px",
                        color: "white",
                      }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
