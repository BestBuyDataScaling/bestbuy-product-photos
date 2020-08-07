import React from "react";
import Directory from "./components/Directory";
import ProductInfo from "./components/ProductInfo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="main component container">
        <Directory />
        <div id="main display">
          <ProductInfo />
        </div>
      </div>
    );
  }
}

export default App;
