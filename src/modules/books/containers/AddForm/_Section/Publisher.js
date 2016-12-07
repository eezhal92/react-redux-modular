import React from 'react';
import { Field } from 'redux-form';

const Publisher = () => (
  <section>
    <h3>Publisher</h3>
    <Field name="something" component="input" type="text" />
  </section>
);

export default Publisher;
