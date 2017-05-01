import React from 'react';
import RoomTile from '../components/RoomTile'

class RoomContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div className='room-container'>
        <h3>hi</h3>
        <RoomTile
        />
        </div>

      )
    }
  }

export default RoomContainer;
