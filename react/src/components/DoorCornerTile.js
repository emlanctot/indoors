import React from 'react';
import { Link } from 'react-router';

class DoorCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div>
          <Link to={'/rooms/bed'}>Left</Link>
          <Link to={'/rooms/bed'}>Right</Link>
          <div className='room-tile'>
            <p>{this.props.name}</p>
            <img className="door-img" src={assetHelper["door.png"]}></img>
          </div>
        </div>


      )
    }
  }

export default DoorCornerTile;
