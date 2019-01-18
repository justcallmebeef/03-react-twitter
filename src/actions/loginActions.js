import { SET_USER_INFO } from '../actions/constants';

export function setUser(user) {
  return {
    type: SET_USER_INFO,
    user: user
  }
}

export function logoutUser(){
  return {
    type: SET_USER_INFO,
    user: {}
  }
}
