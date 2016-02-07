import { SlackService } from '../services';

export const MESSAGE_SEARCH_CHANGE = 'MESSAGE_SEARCH_CHANGE';
export const messageSearchChange = (value) => ({
  type: MESSAGE_SEARCH_CHANGE,
  payload: {
    value
  }
});

export const RECEIVE_MESSAGES_FOR_SEARCH = 'RECEIVE_MESSAGES_FOR_SEARCH';
export const receiveChannelsForSearch = (payload) => ({
  type: RECEIVE_MESSAGES_FOR_SEARCH,
  payload
});

/**
 * This action creator is purely for _requesting_ the data, not the user requesting it.
 * @return {[type]} [description]
 */
export const requestChannelsForSearch = () => (dispatch, getState) => {
  const state = getState();
  const query = state.messagesView.query;
  // Do ajax call via service and dispatch result[s] when they return.
  SlackService.searchMessages(query).then(res => res.json(), res => {
    console.warn('Error in request for messages.');
    console.warn(res);
  }).then(res => {
    const { matches, paging } = res.messages;
    dispatch(receiveChannelsForSearch({
      matches,
      paging
    }));
  });
};

/**
 * This action creator represents a user action: the user submitting the current search.
 * @return {[type]} [description]
 */
export const SEARCH_MESSAGES = 'SEARCH_MESSAGES';
export const searchMessages = () => (dispatch) => {
  dispatch(requestChannelsForSearch());
};
