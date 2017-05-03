import React from 'react';

class PlantCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div className='plant-tile'>
          <button onClick={this.props.handleClutterCornerClick}>LEFT</button>
          <button onClick={this.props.handleDoorCornerClick}>RIGHT</button>
          <p>{this.props.name}</p>
          <img className="plant-img" src={assetHelper["plant.png"]}></img>
          <img className="window-img" src={assetHelper["window.png"]}></img>

        </div>


      )
    }
  }

export default PlantCornerTile;
