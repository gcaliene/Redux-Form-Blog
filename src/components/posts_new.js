import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return <form>New Post</form>;
  }
}

export default reduxForm({
  form: 'PostsNewForm' //the name of the form
})(PostsNew);
