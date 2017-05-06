import React from 'react';
import AllCorners from '../components/AllCorners'


class RoomTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plant_health: this.props.plant_health,
      current_user: '',
      plantStatus: ''
    }
       this.handleWater = this.handleWater.bind(this);

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

    getRoomData() {
      let roomId = this.props.id;
      let creator = this.props.creator;
      fetch(`/api/v1/rooms/${roomId}`, {credentials: 'same-origin'})
        .then(response => response.json())
        .then(responseData => {
          if (responseData[0].plant_health > 8) {
            this.setState({ plantStatus: 'This ficus is flourishing.' });
          } else if (responseData[0].plant_health == 8){
            this.setState({ plantStatus: 'This ficus is doing great' });
          } else if (3 < responseData[0].plant_health && responseData[0].plant_health < 8){
            this.setState({ plantStatus: 'This ficus is doing ok but growing concerned.' });
          } else if (responseData[0].plant_health == 3){
            this.setState({ plantStatus: 'This ficus desparately needs to be watered.' });
          } else if (responseData[0].plant_health == 2){
            this.setState({ plantStatus: 'Someone has abandoned the ficus.' });
          } else if (responseData[0].plant_health == 1){
            this.setState({ plantStatus: 'This ficus is dying.' });
          } else {
            this.setState({ plantStatus: 'This ficus is near death.' });
          };
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

    componentDidMount() {
      this.getRoomData();
      this.getUserData();
    }

    getPlantStatuses() {
      if (this.state.plant_health > 8) {
        this.setState({ plantStatus: 'This ficus is flourishing.' });
      } else if (this.state.plant_health == 8){
        this.setState({ plantStatus: 'This ficus is doing great' });
      } else if (3 < this.state.plant_health && this.state.plant_health < 8){
        this.setState({ plantStatus: 'This ficus is doing ok but growing concerned.' });
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


    render() {

      let clickResponse;
      if (this.state.current_user.id === this.props.creator){
        clickResponse = this.handleWater
      } else {
        clickResponse = null
      }

      return(
        <div>
          <h4 className= 'room-name'>{this.props.name}</h4>
          <AllCorners
            id= {this.props.id}
            key= {this.props.id}
            creator= {this.props.creator}
            plant_health= {this.state.plant_health}
            clickResponse= {clickResponse}
            current_user= {this.state.current_user}
          />
          <div className='statuses'>
            <ul>
            <li>{this.state.plantStatus}</li>
            </ul>
          </div>
        </div>



      )
    }
  }

export default RoomTile;
