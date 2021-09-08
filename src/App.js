// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
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
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      );
      function Logout() {
        localStorage.clear("token");
        window.location.href = "http://localhost:3000";
      }
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