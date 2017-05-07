import React from 'react';

class DoorCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div className='door-tile'>
          <button className= 'left' onClick={this.props.handlePlantCornerClick}>&larr;</button>
          <button className= 'right' onClick={this.props.handleBedCornerClick}>&rarr;</button>
          <img className="door-img" src={assetHelper["door.png"]}></img>
          <img onClick={this.props.handleClean} className="broom-img" src={assetHelper["broom.png"]}></img>
        </div>


      )
    }
  }

export default DoorCornerTile;
