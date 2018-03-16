import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    //{...field.input is just a fancyand concise way to say onchange={field.input.onchange}, onHover={field.input.onHover}
    return (
      <div className={className}>
        <label htmlFor="">{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is atleast 3 characters long!';
    //the name property on the <Field /> component connects the errors.
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }
  if (!values.content) {
    errors.content = 'Enter some content!';
  }

  // if errors is empty, then the form is fine to submit
  //if errors has any props, redux form assumes form is invalid
  return errors;
};

//reduxForm is very similar to the connect function
export default reduxForm({
  validate: validate,
  form: 'PostsNewForm' //the name of the form
})(PostsNew);
