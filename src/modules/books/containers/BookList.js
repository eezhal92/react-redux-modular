import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectList } from '../data/selectors';

export class BookList extends Component {
  render() {
    return (
      <div>
        Book List
      </div>
    );
  }
}

/* mapStateToProps */
const MSTP = state => ({
  // state
});

/* mapDispatchToProps */
const MDTP = ({
  // dispatch
});

export default connect(
  MSTP,
  MDTP
)(BookList);
