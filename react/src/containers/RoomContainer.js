import React from 'react';
import RoomTile from '../components/RoomTile'

class RoomContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
    render() {
      let rooms = this.props.rooms.map((room) => {
        return (
            <RoomTile
              key= {room.id}
              id= {room.id}
              name= {room.name}
              plant_health= {room.plant_health}
              cleanliness= {room.cleanliness}
              creator= {room.user_id}
              escape= {room.escape}
            />
        )
      })
      return(
        <div className='room-container'>
          {rooms}
        </div>

      )
    }
  }

export default RoomContainer;
