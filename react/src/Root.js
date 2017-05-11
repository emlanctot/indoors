import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import NavContainer from './containers/NavContainer';
import RoomContainer from './containers/RoomContainer';
import BedCornerTile from './components/BedCornerTile';
import DoorCornerTile from './components/DoorCornerTile';
import NeighborsContainer from './containers/NeighborsContainer';
import ProfileContainer from './containers/ProfileContainer';
import RoomShowContainer from './containers/RoomShowContainer';
import RoomFormContainer from './containers/RoomFormContainer';

const Root = () => {
  return(
      <Router history={browserHistory}>

        <Route path="/" component={NavContainer}>
        <IndexRoute component={RoomShowContainer} />
          <Route path='rooms/:id' component={RoomShowContainer} />
          <Route path='users/:id/rooms/new' component={RoomFormContainer} />
          <Route path='rooms' component={NeighborsContainer} />
          <Route path='profiles' component={ProfileContainer} />
        </Route>

      </Router>
    )
  }

export default Root;
