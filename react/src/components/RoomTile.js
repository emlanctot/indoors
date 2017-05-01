import React from 'react';

class RoomTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div className='room-tile'>
          <p>hi</p>
          <img src={assetHelper["bed.png"]}></img>
        </div>


      )
    }
  }

export default RoomTile;
