import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; //this is provided by the react router. the params property gets all the wildcard values found in the url(:id) for example
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    //since component will render before componentDidMount nothing will show and will throw an console.error
    //we need a check to see if the data is there! this will happen often.
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  // To make absolutley clear: this.props === ownProps
  //by convention mapStateToProps has a second argument called by convetion ownProps
  return { post: posts[ownProps.match.params.id] };
  // return { posts }; this will return all the posts, not what we want here.
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
