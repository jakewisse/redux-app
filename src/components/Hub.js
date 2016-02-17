import React, { Component } from 'react';
import { Link } from 'react-router';

class Hub extends Component {

  render() {
    return (<div>
      <div>
        <Link to="/">Home</Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="message-search">Search Messages</Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="about">About us</Link>
      </div>
      {this.props.children}
    </div>);
  }

}

Hub.displayName = 'Hub';

export default Hub;
