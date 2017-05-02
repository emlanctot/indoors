import React from 'react';
import { Link } from 'react-router';

class BedCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div>
          <Link to={`/rooms/door`}>Left</Link>
          <Link to={`/rooms/door`}>Right</Link>
          <div className='room-tile'>
            <p>{this.props.name}</p>
            <img className="bed-img" src={assetHelper["bed.png"]}></img>
          </div>
        </div>


      )
    }
  }

export default BedCornerTile;
