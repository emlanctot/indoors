import React from 'react';

class ClutterCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {


      return(
        <div className='clutter-tile' id= 'walls'>
          <button className= 'left' onClick={this.props.handleBedCornerClick}>&larr;</button>
          <button className= 'right' onClick={this.props.handlePlantCornerClick}>&rarr;</button>
          <img className="cupboard-img" src={assetHelper["cupboard.png"]}></img>
          <img className="chair-img click" src={assetHelper["chair.png"]}></img>
          <img className="book-img click" src={assetHelper["book.png"]}></img>
          <img className={this.props.keyInRoom} onClick={this.props.handleKeyLookClick} src={assetHelper["key.png"]}></img>
        </div>


      )
    }
  }

export default ClutterCornerTile;
