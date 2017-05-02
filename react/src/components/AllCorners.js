import React from 'react'
import BedCornerTile from './BedCornerTile'
import DoorCornerTile from './DoorCornerTile'

class AllCorners extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }
  render() {
    // let rooms = this.props.rooms.map((room) => {
    //   return (
    //       <BedCornerTile
    //         key = {room.id}
    //         id = {room.id}
    //         name = {room.name}
    //       />,
    //       <DoorCornerTile
    //         key = {room.id}
    //         id = {room.id}
    //         name = {room.name}
    //       />
    //   )
    // })
    return(
      <div>
        <BedCornerTile
          key = {this.props.id}
          id = {this.props.id}
          name = {this.props.name}
        />
      </div>

    )
  }
}

export default AllCorners;
