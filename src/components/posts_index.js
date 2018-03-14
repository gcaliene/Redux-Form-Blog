import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    // console.log('hello');
    this.props.fetchPosts();
  }

  renderPosts() {
    //can't use the same map you would use for arrays, u have to use the one from lodash
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          {post.title} hi
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

//you could pass the action creator this way instead of the mapDispatchToProps,
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
