import React from 'react';

class ClutterCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    }

    render() {

      return(
        <div className='clutter-tile'>
          <button className= 'left' onClick={this.props.handleBedCornerClick}>&larr;</button>
          <button className= 'right' onClick={this.props.handlePlantCornerClick}>&rarr;</button>
        </div>


      )
    }
  }

export default ClutterCornerTile;
