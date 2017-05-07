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
      doorCornerToggle: true,
      plant_health: this.props.plant_health
    }
    this.handleBedCornerClick = this.handleBedCornerClick.bind(this);
    this.handlePlantCornerClick = this.handlePlantCornerClick.bind(this);
    this.handleClutterCornerClick = this.handleClutterCornerClick.bind(this);
    this.handleDoorCornerClick = this.handleDoorCornerClick.bind(this);
  }


  handleBedCornerClick() {
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
            creator= {this.state.current_user}
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
