import React from 'react';
import { connect } from 'react-redux';

import PublisherSection from './_Section/Publisher';
import AuthorSection from './_Section/Author';

let AddForm = ({ handleSubmit }) => (
  <div>
    <AuthorSection />
  </div>
);

export default connect()(AddForm);
