import 'babel-polyfill'; // For isomorphic-fetch
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import { Hub, Home, MessageView, AboutUs } from './components';

$(document).ready(() => {
  const rootNode = document.getElementById('root');
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Hub}>
          <IndexRoute component={Home} />
          <Route path="channels" component={MessageView} />
          <Route path="about" component={AboutUs} />
        </Route>
      </Router>
    </Provider>, rootNode);
});
