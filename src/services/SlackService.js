import fetch from 'isomorphic-fetch';
import qs from 'qs';

const apiToken = ''; // Insert your API token here

/**
 * @param  {string} query
 * @return {Promise}
 */
export const searchMessages = (query) => {
  if (!apiToken) {
    const msg =
      'This app depends on a Slack API token. Go [get one] [1] and then check out' +
      '`src/services/SlackService.js`.' +
      '\n\n' +
      '[1]: https://api.slack.com/tokens';
    return Promise.reject(msg);
  }

  const queryObj = {
    query,
    token: apiToken
  };
  return fetch(`https://slack.com/api/search.messages?${qs.stringify(queryObj)}`);
};
