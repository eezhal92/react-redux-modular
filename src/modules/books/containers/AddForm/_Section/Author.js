import React from 'react';
import { connect } from 'react-redux';
import { Field, change, getFormValues, submit } from 'redux-form';

import AuthorForm from '../_SubForm/AuthorForm';
import AddAuthorForm from '../_SubForm/AddAuthorForm';

class Author extends React.Component {
  onAddAuthorSubmit(e) {
    e.preventDefault();
    const { values } = this.props;

    let authors;
    if (values === undefined || !Array.isArray(values.authors)) {
      authors = [];
    } else {
      authors = values.authors;
    }

    authors = [...authors, e.target.name.value];

    this.props.dispatch(change('addBook_AddAuthor', 'authors', authors));
  }

  submitForms () {
    this.props.dispatch(submit('addBook_AddAuthor'));
  }

  render() {
    return (
      <section class="author-section">
        <h3 class="section__title">Author</h3>
        <AuthorForm onSubmit={(data) => console.log('author form', data)} />
        <AddAuthorForm onSubmit={(e) => this.onAddAuthorSubmit(e)}/>
        <button onClick={() => this.submitForms()}>Save</button>
      </section>
    );
  }
}

const MSTP = state => {
  return {
    foo: 'foo',
    values: getFormValues('addBook_AddAuthor')(state),
  }
}

export default connect(MSTP)(Author);
