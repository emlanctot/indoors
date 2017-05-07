import React from 'react';
import AllCorners from '../components/AllCorners'


class RoomTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plant_health: this.props.plant_health,
      cleanliness: this.props.cleanliness,
      current_user: '',
      plantStatus: '',
      cleanStatus: ''
    }
       this.handleWater = this.handleWater.bind(this);
       this.handleClean = this.handleClean.bind(this);

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

    handleWater() {
      let value = this.state.plant_health += 1;
      this.setState({ plant_health: value });
      let waterPayload = {
        room_id: this.props.id,
        plant_health: this.state.plant_health
      };
      this.sendWater(waterPayload);
      this.getPlantStatuses();
    }

    sendWater(waterPayload) {
      let roomId = this.props.id;
      let creator = this.props.creator;
      console.log(waterPayload)
      fetch(`/api/v1/users/${creator}/rooms/${roomId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(waterPayload)
      })
    }

    handleClean() {
      let value = this.state.cleanliness += 1;
      this.setState({ cleanliness: value });
      let cleanPayload = {
        room_id: this.props.id,
        cleanliness: this.state.cleanliness
      };
      this.sendClean(cleanPayload);
      this.getCleanStatuses();
    }


    sendClean(cleanPayload) {
      let roomId = this.props.id;
      let creator = this.props.creator;
      console.log(cleanPayload)
      fetch(`/api/v1/users/${creator}/rooms/${roomId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanPayload)
      })
    }

    componentDidMount() {
      this.getPlantStatuses();
      this.getUserData();
      this.getCleanStatuses();
    }

    getPlantStatuses() {
      if (this.state.plant_health > 8) {
        this.setState({ plantStatus: 'this ficus is flourishing.' });
      } else if (this.state.plant_health == 8){
        this.setState({ plantStatus: 'this ficus is healthy.' });
      } else if (this.state.plant_health == 7){
        this.setState({ plantStatus: 'this ficus is doing great.' });
      } else if (this.state.plant_health == 6){
        this.setState({ plantStatus: 'this ficus is doing well.' });
      } else if (this.state.plant_health == 5){
        this.setState({ plantStatus: 'this ficus is doing ok.' });
      } else if (this.state.plant_health == 4){
        this.setState({ plantStatus: 'this ficus is doing ok but growing concerned.' });
      } else if (this.state.plant_health == 3){
        this.setState({ plantStatus: 'This ficus desparately needs to be watered.' });
      } else if (this.state.plant_health == 2){
        this.setState({ plantStatus: 'Someone has abandoned the ficus.' });
      } else if (this.state.plant_health == 1){
        this.setState({ plantStatus: 'This ficus is dying.' });
      } else {
        this.setState({ plantStatus: 'This ficus is near death.' });
      };
    };

    getCleanStatuses() {
      if (this.state.cleanliness > 8) {
        this.setState({ cleanStatus: 'this room is spotless.' });
      } else if (this.state.cleanliness == 8){
        this.setState({ cleanStatus: 'this room is very clean.' });
      } else if (this.state.cleanliness == 7){
        this.setState({ cleanStatus: 'his room is slightly disorganized.' });
      } else if (this.state.cleanliness == 6){
        this.setState({ cleanStatus: 'this room is cluttered.' });
      } else if (this.state.cleanliness == 5){
        this.setState({ cleanStatus: 'this room needs to be cleaned.' });
      } else if (this.state.cleanliness == 4){
        this.setState({ cleanStatus: 'there are cobwebs.' });
      } else if (this.state.cleanliness == 3){
        this.setState({ cleanStatus: 'this room desparately needs to be cleaned.' });
      } else if (this.state.cleanliness == 2){
        this.setState({ cleanStatus: 'this room smells horribly.' });
      } else if (this.state.cleanliness == 1){
        this.setState({ cleanStatus: 'you can hear mice in the walls' });
      } else {
        this.setState({ cleanStatus: 'this room is uninhabitable' });
      };
    };


    render() {
      let cleanClickResponse;
      let waterClickResponse;
      if (this.state.current_user.id === this.props.creator){
        waterClickResponse = this.handleWater
        cleanClickResponse = this.handleClean
      } else {
        waterClickResponse = null
        cleanClickResponse = null
      }

      return(
        <div>
          <h4 className= 'room-name'>{this.props.name}</h4>
          <AllCorners
            id= {this.props.id}
            key= {this.props.id}
            creator= {this.props.creator}
            plant_health= {this.state.plant_health}
            waterClickResponse= {waterClickResponse}
            cleanClickResponse= {cleanClickResponse}
            current_user= {this.state.current_user}
          />
          <div className='statuses'>
            <ul>
            <li>{this.state.plantStatus}</li>
            <li>{this.state.cleanStatus}</li>
            </ul>
          </div>
        </div>



      )
    }
  }

export default RoomTile;
