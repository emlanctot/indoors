import React from 'react'
import RoomTile from './RoomTile'

class AllRooms extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }
  render() {
    let rooms = this.props.rooms.map((room) => {
      return (
        <RoomTile
          key = {room.id}
          id = {room.id}
          name = {room.name}
        />
      )
    })
    return(
      <div>
        {rooms}
      </div>

    )
  }
}

export default AllRooms;
