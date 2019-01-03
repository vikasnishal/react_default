import React from "react";
import { Link } from "@reach/router";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>React started again</div>
        <Link to="about">About Me</Link>
      </div>
    );
  }
}

export default Home;
