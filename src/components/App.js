import React from "react";
import { Router } from "@reach/router";
import About from "./About";
import Home from "./Home";

class App extends React.Component {
  changeRoute = () => {};
  render() {
    return (
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    );
  }
}

export default App;
