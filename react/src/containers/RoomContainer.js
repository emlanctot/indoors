import React from 'react';
import AllRooms from '../components/AllRooms'

class RoomContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    render() {

      return(
        <div className='room-container'>
        <AllRooms
          rooms= {this.props.rooms}
        />
        </div>

      )
    }
  }

export default RoomContainer;
