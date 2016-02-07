import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { MessageSearcher, MessageResults } from '../components';

class MessageView extends Component {

  render() {
    return (
      <div>
        <h3>Search Messages</h3>
        <MessageSearcher />
        <MessageResults messages={this.props.messages} />
      </div>
    );
  }

}

MessageView.displayName = 'MessageView';
MessageView.propTypes = {
};

const mapStateToProps = (state) => ({
  messages: state.messagesView.messages
});

export default connect(mapStateToProps)(MessageView);
