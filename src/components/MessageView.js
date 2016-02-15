import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { MessageSearcher, MessageResults } from '../components';

class MessageView extends Component {

  render() {
    return (
      <div>
        <h3>Search Messages</h3>
        <MessageSearcher dispatch={this.props.dispatch}
          isFetching={this.props.isFetching}
          query={this.props.query}
        />
        <MessageResults messages={this.props.messages} />
      </div>
    );
  }

}

MessageView.displayName = 'MessageView';
MessageView.propTypes = {
  dispatch: PropTypes.func,
  messages: PropTypes.array,
  query: PropTypes.string,
  isFetching: PropTypes.bool
};

const mapStateToProps = (state) => ({ ...state.messagesView });

export default connect(mapStateToProps)(MessageView);
