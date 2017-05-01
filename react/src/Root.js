import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import NavContainer from './containers/NavContainer';
import RoomContainer from './containers/RoomContainer';

const Root = () => {
  return(
      <Router history={browserHistory}>
        <Route path="/" component={NavContainer}>
          <IndexRoute component={RoomContainer} />
        </Route>
      </Router>
    )
  }

export default Root;
