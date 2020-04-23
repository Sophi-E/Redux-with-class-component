import React, { Component } from "react";

import { connect } from "react-redux";
import Post from "./Posts";

class AllPosts extends Component {
  render() {
    return (
      <div>
        <h1>All Posts</h1>
        {this.props.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(AllPosts);
