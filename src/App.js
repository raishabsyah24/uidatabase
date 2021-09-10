import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Login from "./Pages/Login";
import React, { Component } from "react";


export default class App extends Component {
  render() {
    if (localStorage.getItem("token") != null) {
      return (
        <Router>
          <div
            style={{
              backgroundColor: "#F5F5DC",
              minHeight: "100vh"
            }}
          >
            <Header />
            <Switch>
            <Route path="/Login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      );
      // function Logout() {
      //   localStorage.clear("token");
      //   window.location.href = "http://localhost:3000";
      // }
    } else {
      return (
        <Router>
          <div
            style={{
              backgroundColor: "#F5F5DC",
              minHeight: "100vh"
            }}
          >
            <Header />
            <Switch>
            <Route path="/Login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      );
    }
  }
}