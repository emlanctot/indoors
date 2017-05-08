import React from 'react';
import BedCornerTile from './BedCornerTile';
import DoorCornerTile from './DoorCornerTile';
import ClutterCornerTile from './ClutterCornerTile';
import PlantCornerTile from './PlantCornerTile';
import KeyComponent from './KeyComponent';

class AllCorners extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bedCornerToggle: false,
      plantCornerToggle: false,
      clutterCornerToggle: false,
      doorCornerToggle: true,
      keyLookToggle: false,
      plant_health: this.props.plant_health,
      escape: this.props.escape,
      keyInRoom: this.props.keyInRoom,
      keyInRoomClose: this.props.keyInRoomClose
    }
    this.handleBedCornerClick = this.handleBedCornerClick.bind(this);
    this.handlePlantCornerClick = this.handlePlantCornerClick.bind(this);
    this.handleClutterCornerClick = this.handleClutterCornerClick.bind(this);
    this.handleDoorCornerClick = this.handleDoorCornerClick.bind(this);
    this.handleKeyLookClick = this.handleKeyLookClick.bind(this);
  }

  handleKeyLookClick() {
    if (this.state.keyLookToggle === false) {
      this.setState({
        keyLookToggle: true,
        bedCornerToggle: false,
        clutterCornerToggle: false,
        plantCornerToggle: false,
        doorCornerToggle: false
       })
    } else {
      this.setState({ keyLookToggle: false })
    }
  }


  handleBedCornerClick() {
    if (this.state.bedCornerToggle === false) {
      this.setState({
        bedCornerToggle: true,
        clutterCornerToggle: false,
        plantCornerToggle: false,
        doorCornerToggle: false,
        keyLookToggle: false
       })
    } else {
      this.setState({ bedCornerToggle: false })
    }
  }

  handlePlantCornerClick() {
    if (this.state.plantCornerToggle === false) {
      this.setState({
        plantCornerToggle: true,
        clutterCornerToggle: false,
        bedCornerToggle: false,
        doorCornerToggle: false,
        keyLookToggle: false
      })
    } else {
      this.setState({ plantCornerToggle: false })
    }
  }

  handleClutterCornerClick() {
    if (this.state.clutterCornerToggle === false) {
      this.setState({
        clutterCornerToggle: true,
        bedCornerToggle: false,
        plantCornerToggle: false,
        doorCornerToggle: false,
        keyLookToggle: false
       })
    } else {
      this.setState({ clutterCornerToggle: false })
    }
  }

  handleDoorCornerClick() {
    if (this.state.doorCornerToggle === false) {
      this.setState({
        doorCornerToggle: true,
        clutterCornerToggle: false,
        bedCornerToggle: false,
        plantCornerToggle: false,
        keyLookToggle: false
      })
    } else {
      this.setState({ doorCornerToggle: false })
    }
  }



  render() {


    let showComponent;
    if (this.state.plantCornerToggle) {
      showComponent = () => {
        return(
          <PlantCornerTile
            key= {this.props.id}
            id= {this.props.id}
            handleDoorCornerClick = {this.handleDoorCornerClick}
            handleClutterCornerClick = {this.handleClutterCornerClick}
            handleWater = {this.props.waterClickResponse}
            plantHealth = {this.state.plant_health}
            creator= {this.props.current_user}
          />
        )
      }
    } else if (this.state.bedCornerToggle){
      showComponent = () => {
        return(
        <BedCornerTile
          key= {this.props.id}
          id= {this.props.id}
          handleClutterCornerClick = {this.handleClutterCornerClick}
          handleDoorCornerClick = {this.handleDoorCornerClick}
          creator= {this.props.current_user}
        />
        )
      }
    } else if (this.state.clutterCornerToggle) {
      showComponent = () => {
        return(
          <ClutterCornerTile
            key= {this.props.id}
            id= {this.props.id}
            handleBedCornerClick = {this.handleBedCornerClick}
            handlePlantCornerClick = {this.handlePlantCornerClick}
            handleKeyLookClick = {this.handleKeyLookClick}
            creator= {this.state.current_user}
            keyInRoom= {this.props.keyInRoom}
          />
        )
      }
    } else if (this.state.keyLookToggle) {
      showComponent = () => {
        return(
          <KeyComponent
            key= {this.props.id}
            id= {this.props.id}
            handleClutterCornerClick = {this.handleClutterCornerClick}
            creator= {this.props.current_user}
            escapeClickResponse= {this.props.escapeClickResponse}
            keyInRoomClose= {this.props.keyInRoomClose}
          />
        )
      }
    } else {
      showComponent = () => {
        return(
          <DoorCornerTile
            key= {this.props.id}
            id= {this.props.id}
            handleBedCornerClick = {this.handleBedCornerClick}
            handlePlantCornerClick = {this.handlePlantCornerClick}
            handleClean = {this.props.cleanClickResponse}
            creator= {this.props.current_user}
            escape= {this.state.escape}
            handleUnlockedDoor= {this.props.handleUnlockedDoor}
          />
        )
      }
    }


    return(
      <div className='room-itself'>
        {showComponent()}

      </div>

    )
  }
}

export default AllCorners;
