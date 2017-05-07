import React from 'react';

class BedCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
          <div className='bed-tile'>
            <button className= 'left' onClick={this.props.handleDoorCornerClick}>&larr;</button>
            <button className= 'right' onClick={this.props.handleClutterCornerClick}>&rarr;</button>
            <img className="bed-img" src={assetHelper["bed.png"]}></img>
          </div>


      )
    }
  }

export default BedCornerTile;
