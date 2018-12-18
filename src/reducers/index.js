import { combineReducers } from 'redux';
import messages from './messageReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  messages,
  user
});

export default rootReducer;
