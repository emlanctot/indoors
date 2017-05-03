import React from 'react';

class ClutterCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div className='clutter-tile'>
          <button onClick={this.props.handleBedCornerClick}>LEFT</button>
          <button onClick={this.props.handlePlantCornerClick}>RIGHT</button>
          <p>{this.props.name}</p>
        </div>


      )
    }
  }

export default ClutterCornerTile;
