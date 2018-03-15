import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    //{...field.input is just a fancyand concise way to say onchange={field.input.onchange}, onHover={field.input.onHover}
    return (
      <div>
        <input type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderTitleField} />
      </form>
    );
  }
}

//reduxForm is very similar to the connect function
export default reduxForm({
  form: 'PostsNewForm' //the name of the form
})(PostsNew);
