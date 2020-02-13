import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
   
        <div className="container my-margin">
          <h4>
            <Link to="/" className="text-light -link ">
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

          <div className="collapse bar-collapse" id="barSupportedContent">
            <ul className="bar- mx-auto">
              <li className="-item">
                {" "}
                <button
                  className="btn btn-sm text-white active"
                  onClick={() => {
                    this.props.history.push("/giaic/howitworks");
                  }}
                >
                  How It Works
                </button>
              </li>
              <li className="-item">
                {" "}
                <button
                  className="btn btn-sm text-white active"
                  onClick={() => {
                    this.props.history.push("/giaic/apply");
                  }}
                >
                  Apply
                </button>
              </li>
              <li className="-item dropdown d-inline-block">
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
                  <a className="dropdown-item" href="/giaic/about">
                    The President
                  </a>
                  <a
                    className="dropdown-item"
                    href="/giaic/managementcommittee"
                  >
                    Management Committee
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
   
    );
  }
}
export default withRouter(Menu);
