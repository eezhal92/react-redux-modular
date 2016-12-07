import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import books from './modules/books/data';

export default combineReducers({
  books,
  routing: routerReducer,
  form: formReducer,
});
