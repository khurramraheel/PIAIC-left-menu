import React, { Component } from "react";
import "./mange.css";
import Grid from "@material-ui/core/Grid";
import Card from "./cardsOfManger";
class MangmentWork extends Component {
  render() {
    return (
      <div style={{ background: "white", height: "113vh" }}>
        <div>
          <h1 className="Text">Management Committee</h1>
        </div>

        <Grid container justify="center">
          <Grid  className="mngerIfo">
            <Card />
            <Card />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default MangmentWork;
