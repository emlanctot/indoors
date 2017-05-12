import React from 'react';

class DoorCornerTile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        escape: this.props.escape,
        moods: this.props.moods,
        painting: null
      }
    }

    componentDidMount() {
      this.getPainting();
    }

    getPainting() {
      if (this.state.moods === 'Heroic') {
        this.setState({
          painting: <img className="painting-img" src={assetHelper["painting1.png"]}></img>
        });
      } else if (this.state.moods === 'Happy'){
        this.setState({
          painting: <img className="painting-img" src={assetHelper["painting2.png"]}></img>
        });
      } else if (this.state.moods === 'Corporate'){
        this.setState({
          painting: <img className="painting-img" src={assetHelper["painting3.png"]}></img>
        });
      } else if (this.state.moods === 'Anxious'){
        this.setState({
          painting: <img className="painting-img" src={assetHelper["painting4.png"]}></img>
        });
      } else if (this.state.moods === 'Sad'){
        this.setState({
          painting: <img className="painting-img" src={assetHelper["painting5.png"]}></img>
        });
      } else {
        this.setState({
          painting: <img className="painting-img" src={assetHelper["painting6.png"]}></img>
        });
      }
    };
    render() {

      return(
        <div className='door-tile' id= 'walls'>
          <button className= 'left' onClick={this.props.handlePlantCornerClick}>&larr;</button>
          <button className= 'right' onClick={this.props.handleBedCornerClick}>&rarr;</button>
          {this.props.cobweb2}
          {this.props.cobweb1}
          <img onClick={this.props.handleUnlockedDoor} className="door-img click" src={assetHelper["door.png"]}></img>
          <img onClick={this.props.handleClean} className="broom-img click" src={assetHelper["broom.png"]}></img>
          {this.state.painting}
        </div>


      )
    }
  }

export default DoorCornerTile;
