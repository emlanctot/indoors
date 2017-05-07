import React from 'react';

class DoorCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div className='door-tile'>
          <button onClick={this.props.handlePlantCornerClick}>LEFT</button>
          <button onClick={this.props.handleBedCornerClick}>RIGHT</button>
          <img className="door-img" src={assetHelper["door.png"]}></img>
          <img onClick={this.props.handleClean} className="broom-img" src={assetHelper["broom.png"]}></img>
        </div>


      )
    }
  }

export default DoorCornerTile;
