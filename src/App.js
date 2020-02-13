import React, { Component } from "react";
import Template from "./views/Template";
import { RegistorForm } from "./views/RegistorForm";
import { InfoOfSite } from "../src/About/about";
import { Login } from "./views/loginform";
import NavMenu from "./nav manu/navbar";
import MangmentWork from "./Management Committee/Managemt";
// import Login from "./views/LoginRegistration/login";
// import SignUp from "./views/LoginRegistration/Signup";
// import "./bootstrap.css";
// import chartWithZoom from "./views/overview/Chart with Zoom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loaduser } from "./Redux/Actions/authActions";
import store from "./Redux/Store";
import BlogDetails from "./views/overview/blogDetail";
import { connect } from "react-redux";
import { Dashboard } from "./DashBoard/dashBoard";
import Piaic from "./views/templetmain";
// import "./";

// import "./css/animate-custom.css";

// import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loaduser());
    fetch("http://localhost:5000/getBlogs")
      .then(data => data.json())
      .then(data => {
        if (data.success) {
          this.setState({
            blogs: data.data
          });
          this.props.dispatch({ type: "ADD_BLOGS", payload: data.data });
        }
        // alert("done")
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Template} />
            <Route
              exact
              path="/giaic/"
              render={function(prps) {
                return <NavMenu history={prps.history} />;
              }}
            />
            <Route
              exact
              path="/giaic/apply"
              render={function(prps) {
                return <RegistorForm history={prps.history} />;
              }}
            />
            <Route
              exact
              path="/dashBoard"
              render={function(prps) {
                return <Dashboard history={prps.history} />;
              }}
            />
            <Route
              exact
              path="/giaic/about"
              render={function(prps) {
                return <InfoOfSite history={prps.history} />;
              }}
            />
            <Route
              exact
              path="/giaic/managementcommittee"
              render={function(prps) {
                return <MangmentWork history={prps.history} />;
              }}
            />
            <Route
              exact
              path="/login"
              render={function(prps) {
                return <Login history={prps.history} />;
              }}
            />
            <Route exact path="/:fid/:sid" component={BlogDetails} />
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/register" component={SignUp} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
