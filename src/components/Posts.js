import React, { Component } from "react";
import { DELETE_POST } from "../actions/postActions";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button>Edit</button>
        <button
          onClick={() =>
            this.props.dispatch({ type: DELETE_POST, id: this.props.post.id })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}
export default connect()(Post);
