import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import NavContainer from './containers/NavContainer';
import RoomContainer from './containers/RoomContainer';
import BedCornerTile from './components/BedCornerTile';
import DoorCornerTile from './components/DoorCornerTile';
import AllCorners from './components/AllCorners';

const Root = () => {
  return(
      <Router history={browserHistory}>

        <Route path="/" component={NavContainer}>

          <IndexRoute component={AllCorners} />
          <Route path='/rooms' component={RoomContainer} />

        </Route>

      </Router>
    )
  }

export default Root;
