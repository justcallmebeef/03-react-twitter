import {
  POST_MESSAGE,
  GET_MESSAGES_SUCCESS
} from './constants';
import * as messageApi from '../api/messageApi';

// *** ACTIONS *** //

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
    })
    .catch((error) => {
      console.log(error); // eslint-disable no-console
    });
}
