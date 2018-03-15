import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    //{...field.input is just a fancyand concise way to say onchange={field.input.onchange}, onHover={field.input.onHover}
    return (
      <div className="form-group">
        <label htmlFor="">{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

//reduxForm is very similar to the connect function
export default reduxForm({
  form: 'PostsNewForm' //the name of the form
})(PostsNew);
