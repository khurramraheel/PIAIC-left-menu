import React, { Component, Fragment } from "react";


// import NavMenu from "../nav manu/navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min";
// import "../bootstrap.css";
//  import FaIconPack from 'react-icons/lib/fa';
//  import bell from 'react-icons/lib/fa/bell-o';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from "react-redux";
import { logout, loaduser } from "../Redux/Actions/authActions";

import { Link } from "react-router-dom";


class Piaic extends Component {
  render() {
    return (
      <div
        className=""
        style={{
          boxSizing: "border-box",
          background: "rgb(217, 217, 217)",
          fontFamily: "montserrat"
        }}
      >
        {/* <div>
          <NavMenu />
        </div> */}
        {/* <nav
          className="navbar navbar-expand-sm fixed-top navbar-da"
          style={{ backgroundColor: "rgb(2, 100, 95)" }}
        >
          <div className="container my-margin">
            <h4>
              <Link to="/" className="text-light nav-link ">
                <img
                  style={{
                    left: "35px",
                    height: "120px",
                    position: "absolute"
                  }}
                  src="https://www.piaic.org/static/media/Logo.fb7de414.svg"
                />
              </Link>
            </h4>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  {" "}
                  <button
                    className="btn btn-sm text-white active"
                    onClick={() => {
                      this.props.history.push("giaic/howitworks");
                    }}
                  >
                    How It Works
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-sm active text-white"
                    onClick={() => {
                      this.props.history.push("giaic/apply");
                    }}
                  >
                    Apply
                  </button>
                </li>
                <li className="nav-item dropdown d-inline-block">
                  <button
                    className="btn btn-outline-dark text-white dropdown-toggle"
                    style={{
                      fontSize: "12px",
                      fontFamily: " montserrat,sans-serif"
                    }}
                    data-toggle="dropdown"
                  >
                    About
                  </button>
                  <div
                    className="dropdown-menu bg-dark text-white"
                    style={{
                      fontSize: "12px",
                      fontFamily: " montserrat,sans-serif"
                    }}
                  >
                    <a className="dropdown-item" href="giaic/about">
                      The President
                    </a>
                    <a className="dropdown-item" href="giaic/managementcommittee">
                      Management Committee
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <div className="container  pt-3 mt-5">
          {/* <div className="container"> */}
        </div>

        <div
          style={{
            position: "absolute",
            width: "19.1vw",
            left: "8%"
          }}
        >
          <img src="https://www.piaic.org/static/media/president-png.5b5f05c1.png" />
        </div>
        <div
          className="container"
          style={{ padding: "5%", position: "relative", width: "629px" }}
        >
          <div>
            <h1>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "90%",
                  color: "black"
                }}
              >
                Presidential Initiative
              </span>
            </h1>
            <span style={{ fontSize: "100%" }}>
              for Artificial Intelligence & Computing (PIAIC)
            </span>
            <p style={{ width: "49vw", fontWeight: "200" }}>
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
            </p>
          </div>
        </div>

        {/* <Hcards /> */}

        <div className="container">
          <div className="row" style={{ height: "20vh" }}></div>
        </div>

        <div className="container-fluid" style={{ background: "grey" }}>
          <div className="py-5 text-center text-white">
            <h4 style={{ fontFamily: "monteserrat,sans-serif" }}>
              Subscribe to EthereumPrice.org
            </h4>
            <h6 style={{ fontFamily: "monteserrat,sans-serif" }}>
              Receive email updates when new content is published
            </h6>
            <form
              className="mx-auto py-4 border-0 text-white"
              style={{ maxWidth: "445px" }}
            >
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="place"
                  className="form-control p-4 text-white border-0"
                  placeholder="Your Email"
                  style={{ background: "#23272B", color: "white" }}
                />
                <div className="input-group-append">
                  <button
                    className="input-grouptext btn btn-dark px-5 border-0"
                    style={{ backgrund: "", color: "white", fontWeight: "600" }}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Piaic;
