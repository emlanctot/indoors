import React from 'react';

class DoorCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      escape: this.props.escape
    }

    }

    render() {

      return(
        <div className='door-tile'>
          <button className= 'left' onClick={this.props.handlePlantCornerClick}>&larr;</button>
          <button className= 'right' onClick={this.props.handleBedCornerClick}>&rarr;</button>
          <img onClick={this.props.handleUnlockedDoor} className="door-img click" src={assetHelper["door.png"]}></img>
          <img onClick={this.props.handleClean} className="broom-img click" src={assetHelper["broom.png"]}></img>
          {this.props.cobweb1}
        </div>


      )
    }
  }

export default DoorCornerTile;
