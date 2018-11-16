import { POST_MESSAGE, GET_MESSAGES_SUCCESS } from '../actions/constants';

export default function messagesReducer(state = [], action) {
  switch (action.type) {
    case POST_MESSAGE:
      return [
        ...state,
        Object.assign({}, action.message)
      ];
    case GET_MESSAGES_SUCCESS:
      return action.messages.data;
    default:
      return state;
  }
}
