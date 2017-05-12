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
          painting: <img className="painting-img" src={assetHelper["vermeer.png"]}></img>
        });
      } else if (this.state.moods === 'Happy'){
        this.setState({
          painting: <img className="painting-img" src={assetHelper["dali.png"]}></img>
        });
      } else if (this.state.moods === 'Corporate'){
        this.setState({
          painting: <img className="painting-img" src={assetHelper["damien.png"]}></img>
        });
      } else if (this.state.moods === 'Anxious'){
        this.setState({
          painting: <img className="painting-img" src={assetHelper["vangogh.png"]}></img>
        });
      } else if (this.state.moods === 'Sad'){
        this.setState({
          painting: <img className="painting-img" src={assetHelper["starry.png"]}></img>
        });
      } else {
        this.setState({
          painting: <img className="painting-img" src={assetHelper["hopper.png"]}></img>
        });
      }
    };
    render() {

      return(
        <div className='door-tile'>
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
