import React from 'react';
import { connect } from 'react-redux';

import AddForm from '../containers/AddForm/AddForm';

export default class AddPage extends React.Component {
  render() {
    return (
      <div>
        <AddForm onSubmit={data => console.log(data)}/>
      </div>
    );
  }
}

