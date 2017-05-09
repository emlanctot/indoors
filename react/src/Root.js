import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import NavContainer from './containers/NavContainer';
import RoomContainer from './containers/RoomContainer';
import BedCornerTile from './components/BedCornerTile';
import DoorCornerTile from './components/DoorCornerTile';
import NeighborsContainer from './containers/NeighborsContainer';
import ProfileContainer from './containers/ProfileContainer';

const Root = () => {
  return(
      <Router history={browserHistory}>

        <Route path="/" component={NavContainer}>
          <Route path='rooms' component={NeighborsContainer} />
          <Route path='profiles' component={ProfileContainer} />
        </Route>

      </Router>
    )
  }

export default Root;
