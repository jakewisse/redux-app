import React, { Component } from 'react';

class MessageRow extends Component {

  render() {
    const {
      username,
      text
    } = this.props;
    return (<tr>
      <td>{this.props.channel.name}</td>
      <td>{username}</td>
      <td>{text}</td>
    </tr>);
  }

}

MessageRow.displayName = 'MessageRow';

export default MessageRow;
