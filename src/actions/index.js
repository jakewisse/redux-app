import { SlackService } from '../services';

export const MESSAGE_SEARCH_CHANGE = 'MESSAGE_SEARCH_CHANGE';
export const REQUEST_MESSAGES_FOR_SEARCH = 'REQUEST_MESSAGES_FOR_SEARCH';
export const RECEIVE_MESSAGES_FOR_SEARCH = 'RECEIVE_MESSAGES_FOR_SEARCH';
export const FAILED_MESSAGES_FOR_SEARCH = 'FAILED_MESSAGES_FOR_SEARCH';
export const SEARCH_MESSAGES = 'SEARCH_MESSAGES';

export const messageSearchChange = (value) => ({
  type: MESSAGE_SEARCH_CHANGE,
  payload: {
    value
  }
});

export const receiveChannelsForSearch = (payload) => ({
  type: RECEIVE_MESSAGES_FOR_SEARCH,
  payload
});

export const failedMessagesForSearch = (res) => ({
  type: FAILED_MESSAGES_FOR_SEARCH,
  payload: {
    res
  }
});

/**
 * This action creator is purely for _requesting_ the data, not the user requesting it.
 * @return {Action}
 */
export const requestMessagesForSearch = () => (dispatch, getState) => {
  // First dispatch the simple action that the request has begun
  dispatch({
    type: REQUEST_MESSAGES_FOR_SEARCH
  });

  const state = getState();
  const query = state.messagesView.query;
  // Do ajax call via service and dispatch result[s] when they return.
  SlackService.searchMessages(query).then(res => res.json())
  .then(res => {
    const { matches, paging } = res.messages;
    dispatch(receiveChannelsForSearch({
      matches,
      paging
    }));
  })
  .catch(res => {
    console.warn('Error in request for messages.');
    console.warn(res);
    dispatch(failedMessagesForSearch(res));
  });
};

/**
 * This action creator represents a user action: the user submitting the current search.
 */
export const searchMessages = () => (dispatch) => {
  dispatch(requestMessagesForSearch());
};
