import React from 'react';

class KeyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

      return(
        <div className='key-tile' id= 'walls'>
          <button className= 'left' onClick={this.props.handleClutterCornerClick}>&larr;</button>
          <button className= 'right' onClick={this.props.handleClutterCornerClick}>&rarr;</button>
          <img className={this.props.keyInRoomClose} onClick={this.props.escapeClickResponse} src={assetHelper["keyclose.png"]}></img>
        </div>

      )
    }
  }

export default KeyComponent;
