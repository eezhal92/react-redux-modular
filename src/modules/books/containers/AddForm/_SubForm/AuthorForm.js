import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

let AddAuthorForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Field name="authors" component="input" type="hidden" />
  </form>
);

AddAuthorForm = reduxForm({
  /* use _ for prefix separtor */
  form: 'addBook_AddAuthor',
})(AddAuthorForm);

export default connect(
  () => ({
    initialValues: {
      authors: []
    }
  })
)(AddAuthorForm);
