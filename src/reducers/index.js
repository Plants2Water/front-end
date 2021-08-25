import { combineReducers } from 'redux';

import { plantReducer } from './plantReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  plantReducer,
  userReducer
});

export default rootReducer;