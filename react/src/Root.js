import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import NavContainer from './containers/NavContainer';
import RoomContainer from './containers/RoomContainer';
import BedCornerTile from './components/BedCornerTile';
import DoorCornerTile from './components/DoorCornerTile';
import NeighborsContainer from './containers/NeighborsContainer';

const Root = () => {
  return(
      <Router history={browserHistory}>

        <Route path="/" component={NavContainer}>
          <Route path='rooms' component={NeighborsContainer} />
        </Route>

      </Router>
    )
  }

export default Root;
