import React from 'react';
import { Route } from 'react-router';
import { makeGetComponent } from '../../utils';

const routes = (
  <Route path="/" getComponent={(location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./pages/AddPage').default);
    })
  }}/>
);

export default routes
