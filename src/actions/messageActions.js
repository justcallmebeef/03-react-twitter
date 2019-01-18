import {
  POST_MESSAGE,
  GET_MESSAGES_SUCCESS
} from './constants';
import * as messageApi from '../api/messageApi';

// *** ACTIONS *** //

export function postMessage(user_id, text) {
  return (dispatch, getState) => {
    let state = getState();
    dispatch(messageApi.postMessage(user_id, text));
  };

  // return {
  //   type: POST_MESSAGE,
  //   message
  // };
}

export function getMessagesSuccess(messages) {
  return {
    type: GET_MESSAGES_SUCCESS,
    messages
  };
}

// *** THUNKS *** //

export function loadMessages() {
  return dispatch => messageApi.getMessages()
    .then((messages) => {
      dispatch(getMessagesSuccess(messages));
    });
}
