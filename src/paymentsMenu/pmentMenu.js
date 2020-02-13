import React from "react";
import "./pay.css";

export class PaymentMenu extends React.Component {
  render() {
    return (
      <div id="payments" style={{ background: "#01645f" }}>
        <a>Payments</a>

        <a>Payment History</a>

        <a>Payment Branches</a>
      </div>
    );
  }
}
