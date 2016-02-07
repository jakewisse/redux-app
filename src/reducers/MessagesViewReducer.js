import {
  MESSAGE_SEARCH_CHANGE,
  RECEIVE_MESSAGES_FOR_SEARCH
} from '../actions';

/**
 * {
 *   query: <string>, // Represents the current query (<input> value)
 *   messages: [<object>], // The channel object that are displayed in the view.
 *   isFetching: <bool> // If the app is requesting channels data
 * }
 */

const defaultState = {
  query: '',
  messages: [],
  isFetching: false
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case MESSAGE_SEARCH_CHANGE:
      return {
        ...state,
        query: action.payload.value
      };
    case RECEIVE_MESSAGES_FOR_SEARCH:
      return {
        ...state,
        messages: action.payload.matches
      };
    default:
      return state;
  }
}

export default reducer;
