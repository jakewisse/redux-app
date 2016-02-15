import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { messageSearchChange, searchMessages } from '../actions';
import { Spinner } from '../components';

class MessageSearcher extends Component {

  handleChange = (e) => {
    const { value } = e.target;
    this.props.dispatch(messageSearchChange(value));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.query) {
      this.props.dispatch(searchMessages())
    }
  };

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="MessageSearcher_query">Search:&nbsp;</label>
          <input id="MessageSearcher_query" className="form-control" type="text" value={this.props.query}
            onChange={this.handleChange}
            placeholder="Search messages..."
          />&nbsp;
        </div>

        <button className="btn btn-default" type="submit" onClick={this.handleSubmit}>Search</button>

        { this.props.isFetching ? <div className="form-group"><Spinner /></div> : null }

      </form>
    );
  }

}

MessageSearcher.displayName = 'MessageSearcher';
MessageSearcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  query: PropTypes.string
};

export default MessageSearcher;
