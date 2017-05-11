import React from 'react';

class PlantCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {
      return(
        <div className='plant-tile'>
          <button className= 'left' onClick={this.props.handleClutterCornerClick}>&larr;</button>
          <button className= 'right' onClick={this.props.handleDoorCornerClick}>&rarr;</button>
          <img onClick={this.props.handleWater} className="plant-img click" src={assetHelper["plant.png"]}></img>
          <img className="window-img" src={assetHelper["window.png"]}></img>
          {this.props.leaves}
        </div>


      )
    }
  }

export default PlantCornerTile;
