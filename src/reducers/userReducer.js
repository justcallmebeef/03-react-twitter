import { SET_USER_INFO } from '../actions/constants';

const initialState = {

};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...action.user,
      };
    default:
      return state;
  }
}
