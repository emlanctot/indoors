import React from 'react'
import BedCornerTile from './BedCornerTile'
import DoorCornerTile from './DoorCornerTile'
import ClutterCornerTile from './ClutterCornerTile'
import PlantCornerTile from './PlantCornerTile'

class AllCorners extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bedCornerToggle: false,
      plantCornerToggle: false,
      clutterCornerToggle: false,
      doorCornerToggle: true
    }
    this.handleBedCornerClick = this.handleBedCornerClick.bind(this);
    this.handlePlantCornerClick = this.handlePlantCornerClick.bind(this);
    this.handleClutterCornerClick = this.handleClutterCornerClick.bind(this);
    this.handleDoorCornerClick = this.handleDoorCornerClick.bind(this);
  }

  handleBedCornerClick() {
        // debugger;
    if (this.state.bedCornerToggle === false) {
      this.setState({
        bedCornerToggle: true,
        clutterCornerToggle: false,
        plantCornerToggle: false,
        doorCornerToggle: false
       })
    } else {
      this.setState({ bedCornerToggle: false })
    }
  }

  handlePlantCornerClick() {
    // debugger;
    if (this.state.plantCornerToggle === false) {
      this.setState({
        plantCornerToggle: true,
        clutterCornerToggle: false,
        bedCornerToggle: false,
        doorCornerToggle: false
      })
    } else {
      this.setState({ plantCornerToggle: false })
    }
  }

  handleClutterCornerClick() {
    // debugger;
    if (this.state.clutterCornerToggle === false) {
      this.setState({
        clutterCornerToggle: true,
        bedCornerToggle: false,
        plantCornerToggle: false,
        doorCornerToggle: false
       })
    } else {
      this.setState({ clutterCornerToggle: false })
    }
  }

  handleDoorCornerClick() {
        // debugger;
    if (this.state.doorCornerToggle === false) {
      this.setState({
        doorCornerToggle: true,
        clutterCornerToggle: false,
        bedCornerToggle: false,
        plantCornerToggle: false,
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
            name = {this.props.name}
            handleDoorCornerClick = {this.handleDoorCornerClick}
            handleClutterCornerClick = {this.handleClutterCornerClick}
          />
        )
      }
    } else if (this.state.bedCornerToggle){
      showComponent = () => {
        return(
        <BedCornerTile
          name = {this.props.name}
          handleClutterCornerClick = {this.handleClutterCornerClick}
          handleDoorCornerClick = {this.handleDoorCornerClick}
        />
        )
      }
    } else if (this.state.clutterCornerToggle) {
      showComponent = () => {
        return(
          <ClutterCornerTile
            name = {this.props.name}
            handleBedCornerClick = {this.handleBedCornerClick}
            handlePlantCornerClick = {this.handlePlantCornerClick}
          />
        )
      }
    } else {
      showComponent = () => {
        return(
          <DoorCornerTile
            name = {this.props.name}
            handleBedCornerClick = {this.handleBedCornerClick}
            handlePlantCornerClick = {this.handlePlantCornerClick}
          />
        )
      }
    }
    return(
      <div>
        {showComponent()}
      </div>

    )
  }
}

export default AllCorners;
