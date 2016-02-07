import React, { Component, PropTypes } from 'react';
import { MessageRow } from '../components';

class MessageResults extends Component {

  render() {
    return (<table className="table table-striped">
      <thead>
        <tr>
          <th>Channel name</th>
          <th>Username</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
      {this.props.messages.map((m) => <MessageRow {...m} />)}
      </tbody>
    </table>);
  }

}

MessageResults.displayName = 'MessageResults';
MessageResults.propTypes = {
  messages: PropTypes.array
};

export default MessageResults;

