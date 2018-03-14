import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    console.log('hello');
    this.props.fetchPosts();
  }
  render() {
    return <div>Posts Index</div>;
  }
}

//you could pass the action creator this way instead of the mapDispatchToProps,
export default connect(null, { fetchPosts })(PostsIndex);
