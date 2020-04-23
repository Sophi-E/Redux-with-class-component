import React, { Component } from "react";
import "./styles.css";
import PostForm from "../src/components/PostForm";
import AllPosts from "../src/components/AllPosts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <AllPosts />
      </div>
    );
  }
}
export default App;
