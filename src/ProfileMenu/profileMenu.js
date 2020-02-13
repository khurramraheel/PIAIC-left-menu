import React from "react";
import "./profileMenu.css";

export class Profile extends React.Component {
  render() {
    return (
      <div id="profileMenu" style={{ background: "#01645f" }}>
        <a>Info </a>

        <a>Logout</a>

        <a>Change Password</a>

        <a>Get Card</a>
      </div>
    );
  }
}
