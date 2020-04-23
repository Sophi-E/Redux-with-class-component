import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <AllPost />
      </div>
    );
  }
}
export default App;
