import React from 'react';

class KeyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

      return(
        <div className='key-tile'>
          <button className= 'left' onClick={this.props.handleClutterCornerClick}>&larr;</button>
          <button className= 'right' onClick={this.props.handleClutterCornerClick}>&rarr;</button>
          <img className="keyclose-img" src={assetHelper["keyclose.png"]}></img>
        </div>


      )
    }
  }

export default KeyComponent;
