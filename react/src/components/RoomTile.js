import React from 'react';
import AllCorners from '../components/AllCorners'


class RoomTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plant_health: this.props.plant_health,
      cleanliness: this.props.cleanliness,
      escape: this.props.escape,
      current_user: '',
      plantStatus: '',
      cleanStatus: '',
      keyInRoom: 'key-img click',
      keyInInventory: 'hidden',
      keyInRoomClose: 'keyclose-img click'
    }
       this.handleWater = this.handleWater.bind(this);
       this.handleClean = this.handleClean.bind(this);
       this.handleEscape = this.handleEscape.bind(this);
       this.handleUnlockedDoor = this.handleUnlockedDoor.bind(this);

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
      let userPayload = {
        room_id: this.props.id,
        plant_health: this.state.plant_health
      };
      this.sendUsersPlay(userPayload);
      this.getPlantStatuses();
    }


    sendUsersPlay(userPayload) {
      let roomId = this.props.id;
      let creator = this.props.creator;
      fetch(`/api/v1/users/${creator}/rooms/${roomId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userPayload)
      })
      .then((response) => {
        this.getKeyStatus();
      })
    }

    handleUnlockedDoor() {
      let roomId = this.props.id;
      let creator = this.props.creator;
      return fetch(`/api/v1/users/${creator}/rooms/${roomId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      })
    }

    handleEscape() {
      this.setState({ escape: true })
      let userPayload = {
        room_id: this.props.id,
        escape: true
      };
      this.sendUsersPlay(userPayload);
      this.getKeyStatus();
    }

    getKeyStatus() {
      if (this.state.escape === true) {
        this.setState({
          keyInRoom: 'hidden',
          keyInRoomClose: 'hidden',
          keyInInventory: 'inventory-selected'
        })
      }
    }

    handleClean() {
      let value = this.state.cleanliness += 1;
      this.setState({ cleanliness: value });
      let userPayload = {
        room_id: this.props.id,
        cleanliness: this.state.cleanliness
      };
      this.sendUsersPlay(userPayload);
      this.getCleanStatuses();
    }

    componentDidMount() {
      this.getPlantStatuses();
      this.getUserData();
      this.getCleanStatuses();
      this.getKeyStatus();
    }

    getPlantStatuses() {
      if (this.state.plant_health > 8) {
        this.setState({ plantStatus: 'the ficus is flourishing.' });
      } else if (this.state.plant_health == 8){
        this.setState({ plantStatus: 'the ficus is healthy.' });
      } else if (this.state.plant_health == 7){
        this.setState({ plantStatus: 'the ficus is doing great.' });
      } else if (this.state.plant_health == 6){
        this.setState({ plantStatus: 'the ficus is doing well.' });
      } else if (this.state.plant_health == 5){
        this.setState({ plantStatus: 'the ficus is doing ok.' });
      } else if (this.state.plant_health == 4){
        this.setState({ plantStatus: 'the ficus is doing ok but growing concerned.' });
      } else if (this.state.plant_health == 3){
        this.setState({ plantStatus: 'the ficus desparately needs to be watered.' });
      } else if (this.state.plant_health == 2){
        this.setState({ plantStatus: 'someone has abandoned the ficus.' });
      } else {
        this.setState({ plantStatus: 'the ficus is near death.' });
      };
    };

    getCleanStatuses() {
      if (this.state.cleanliness > 8) {
        this.setState({ cleanStatus: 'the room is spotless.' });
      } else if (this.state.cleanliness == 8){
        this.setState({ cleanStatus: 'the room is very clean.' });
      } else if (this.state.cleanliness == 7){
        this.setState({ cleanStatus: 'the room is slightly disorganized.' });
      } else if (this.state.cleanliness == 6){
        this.setState({ cleanStatus: 'the room is cluttered.' });
      } else if (this.state.cleanliness == 5){
        this.setState({ cleanStatus: 'the room needs to be cleaned.' });
      } else if (this.state.cleanliness == 4){
        this.setState({ cleanStatus: 'there are cobwebs.' });
      } else if (this.state.cleanliness == 3){
        this.setState({ cleanStatus: 'the room desparately needs to be cleaned.' });
      } else if (this.state.cleanliness == 2){
        this.setState({ cleanStatus: 'you can hear mice in the walls.' });
      } else {
        this.setState({ cleanStatus: 'the room is uninhabitable' });
      };
    };


    render() {
      let cleanClickResponse;
      let waterClickResponse;
      let escapeClickResponse;
      let unlockedDoorResponse;
      if (this.state.current_user.id === this.props.creator){
        waterClickResponse = this.handleWater
        cleanClickResponse = this.handleClean
        escapeClickResponse = this.handleEscape
        unlockedDoorResponse = this.handleUnlockedDoor
      } else {
        waterClickResponse = null;
        cleanClickResponse = null;
        escapeClickResponse = null;
        unlockedDoorResponse = null;
      }

      return(
        <div className= 'row'>
            <div className="">
            <div className="room-wrapper">

                <AllCorners
                  id= {this.props.id}
                  key= {this.props.id}
                  creator= {this.props.creator}
                  plant_health= {this.state.plant_health}
                  waterClickResponse= {waterClickResponse}
                  cleanClickResponse= {cleanClickResponse}
                  escapeClickResponse= {escapeClickResponse}
                  keyInRoom= {this.state.keyInRoom}
                  keyInRoomClose= {this.state.keyInRoomClose}
                  handleUnlockedDoor= {unlockedDoorResponse}
                  current_user= {this.state.current_user}
                  escape= {this.state.escape}
                />
                <div className='room-stats'>
                <h4 className= 'room-name'>{this.props.name}</h4>
                  <ul>
                    <li className= 'status-items'>{this.state.plantStatus}</li>
                    <li className= 'status-items'>{this.state.cleanStatus}</li>
                    <li className= 'inventory-title'>Inventory</li>
                  </ul>
                  <div className= 'inventory'>
                    <img className={this.state.keyInInventory} src={assetHelper["keyclose.png"]}></img>
                  </div>
                </div>
            </div>
          </div>
        </div>



      )
    }
  }

export default RoomTile;
