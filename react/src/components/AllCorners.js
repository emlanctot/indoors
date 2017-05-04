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
      plant_health: this.props.plant_health,
      current_user: ''
    }
    this.handleBedCornerClick = this.handleBedCornerClick.bind(this);
    this.handlePlantCornerClick = this.handlePlantCornerClick.bind(this);
    this.handleClutterCornerClick = this.handleClutterCornerClick.bind(this);
    this.handleDoorCornerClick = this.handleDoorCornerClick.bind(this);
    this.handleWater = this.handleWater.bind(this);
  }

  handleWater() {
    let value = this.state.plant_health += 1;
    this.setState({ plant_health: value });
    let waterPayload = {
      room_id: this.props.id,
      plant_health: this.state.plant_health
    };
    this.sendWater(waterPayload);
  }

  sendWater(waterPayload) {
    let roomId = this.props.id;
    let creator = this.props.creator;
    console.log(waterPayload)
    fetch(`/api/v1/users/${creator}/rooms/${roomId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(waterPayload)
    });
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

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        current_user: responseData.current_user
      });
    });
  }


  render() {
    let clickResponse;
    if (this.state.current_user.id === this.props.creator){
      clickResponse = this.handleWater
    } else {
      clickResponse = null
    }


    let showComponent;
    if (this.state.plantCornerToggle) {
      showComponent = () => {
        return(
          <PlantCornerTile
            handleDoorCornerClick = {this.handleDoorCornerClick}
            handleClutterCornerClick = {this.handleClutterCornerClick}
            handleWater = {clickResponse}
            plantHealth = {this.state.plant_health}
            creator= {this.state.current_user}
          />
        )
      }
    } else if (this.state.bedCornerToggle){
      showComponent = () => {
        return(
        <BedCornerTile
          handleClutterCornerClick = {this.handleClutterCornerClick}
          handleDoorCornerClick = {this.handleDoorCornerClick}
          creator= {this.state.current_user}
        />
        )
      }
    } else if (this.state.clutterCornerToggle) {
      showComponent = () => {
        return(
          <ClutterCornerTile
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
            handleBedCornerClick = {this.handleBedCornerClick}
            handlePlantCornerClick = {this.handlePlantCornerClick}
            creator= {this.state.current_user}
          />
        )
      }
    }

    return(
      <div>
        <h4 className= 'room-name'>{this.props.name}</h4>
        {showComponent()}
      </div>

    )
  }
}

export default AllCorners;
