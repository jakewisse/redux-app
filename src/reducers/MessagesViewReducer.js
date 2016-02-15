import {
  MESSAGE_SEARCH_CHANGE,
  REQUEST_MESSAGES_FOR_SEARCH,
  RECEIVE_MESSAGES_FOR_SEARCH,
  FAILED_MESSAGES_FOR_SEARCH
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
    case REQUEST_MESSAGES_FOR_SEARCH:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_MESSAGES_FOR_SEARCH:
      return {
        ...state,
        messages: action.payload.matches,
        isFetching: false
      };
    case FAILED_MESSAGES_FOR_SEARCH:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

export default reducer;
