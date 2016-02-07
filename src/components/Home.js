import React, { Component } from 'react';

/**
 * A home view that sits inside of the omnipresent Hub.
 */
class Home extends Component {

  render() {
    return (<div>
      <h3>Welcome to the Demo</h3>
      <p>This is the home page</p>
    </div>);
  }

}

Home.displayName = 'Home';

export default Home;
