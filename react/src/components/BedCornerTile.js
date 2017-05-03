import React from 'react';

class BedCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
          <div className='bed-tile'>
            <button onClick={this.props.handleDoorCornerClick}>LEFT</button>
            <button onClick={this.props.handleClutterCornerClick}>RIGHT</button>
            <p>{this.props.name}</p>
            <img className="bed-img" src={assetHelper["bed.png"]}></img>
          </div>


      )
    }
  }

export default BedCornerTile;
