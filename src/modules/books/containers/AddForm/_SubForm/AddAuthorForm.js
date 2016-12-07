import React from 'react';

/**
 *
 * NOTE
 *
 * Since redux-form is not allowed to be inside another redux form
 * So, we're using old-school approach for sub-form
 *
 */

let AddAuthorForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div>
      <input name="name" id="authorName" placeholder="name" />
      <button type="submit">Add</button>
    </div>
  </form>
);

export default AddAuthorForm;
