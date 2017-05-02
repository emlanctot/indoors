import React from 'react';

class ClutterCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div>
          <Link to={`/rooms/4`}>Left</Link>
          <Link to={`/rooms/2`}>Right</Link>
          <div className='room-tile'>
            <p>{this.props.name}</p>
            <img className="bed-img" src={assetHelper["bed.png"]}></img>
          </div>
        </div>


      )
    }
  }

export default ClutterCornerTile;
