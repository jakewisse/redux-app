import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { messageSearchChange, searchMessages } from '../actions';

class MessageSearcher extends Component {

  handleChange = (e) => {
    const { value } = e.target;
    this.props.dispatch(messageSearchChange(value));
  };

  handleSubmit = (e) => {
    this.props.dispatch(searchMessages())
  };

  render() {
    return (
      <div>
        <label>
          Search:
          <input type="text" value={this.props.channelSearch}
            onChange={this.handleChange}
            placeholder="Search for a channel..."
          />
        </label>
        <button type="button" onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }

}

MessageSearcher.displayName = 'MessageSearcher';
MessageSearcher.propTypes = {
  channelSearch: PropTypes.string
};

export default connect()(MessageSearcher);
