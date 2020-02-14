import React from "react";
import "./dashBoard.css";
import { PaymentMenu } from "../paymentsMenu/pmentMenu";
import { Profile } from "../ProfileMenu/profileMenu";

export class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashBoard">
        <div className="topNav-Menu">
          <div>
            <a href="/">
              <img
                class="d-inline-block mt-1"
                src="https://portal.piaic.org/static/media/LogoPIAIC.fb7de414.svg"
                height="50px"
              />
            </a>
          </div>
        </div>

        <div className="main">
          <ul>
            <li className="list-Items">
              {" "}
              <a>
                <img src="https://portal.piaic.org/static/media/home.33dba9fc.svg" />
                <span class="ml-2 align-middle">Dashboard</span>
              </a>
            </li>
            <li className="list-Items" id="profile">
              <Profile />
              <a>
                <img src="https://portal.piaic.org/static/media/avatar.340b0bcd.svg" />
                <span class="ml-2 align-middle">Profile</span>
              </a>
            </li>
            <li className="list-Items" id="payment">
              <PaymentMenu />{" "}
              <a>
                <img src="https://portal.piaic.org/static/media/payment-method.0a58a70f.svg" />
                <span class="ml-2 align-middle">Payment</span>
              </a>
            </li>
            <li className="list-Items">
              {" "}
              <a>
                <img src="https://portal.piaic.org/static/media/libraryIcon.258f9f66.svg" />
                <span class="ml-2 align-middle">Onlion Lecture</span>
              </a>
            </li>
            <li className="list-Items">
              {" "}
              <a>
                <img src="https://portal.piaic.org/static/media/bookIcon.b153bda1.svg" />
                <span class="ml-2 align-middle">Text Books</span>
              </a>
            </li>
            <li className="list-Items">
              {" "}
              <a>
                <img src="https://portal.piaic.org/static/media/examIcon.3df84458.svg" />
                <span class="ml-2 align-middle">Exam</span>
              </a>
            </li>
            <li className="list-Items">
              {" "}
              <a>
                <img src="https://portal.piaic.org/static/media/announcements.68ac8d54.svg" />
                <span class="ml-2 align-middle">Announcements</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
