import React from 'react';
import { Link } from 'react-router';
import RoomContainer from './RoomContainer';
import RoomTile from '../components/RoomTile';
import RoomFormContainer from './RoomFormContainer'


class RoomShowContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        current_user: '',
        rooms: [],
        id: '',
        name: '',
        plant_health: '',
        cleanliness: '',
        creator: '',
        escape: '',
        moods: '',
        formToggle: false,
        keyInRoom: 'key-img click',
        keyInInventory: 'hidden',
        keyInRoomClose: 'keyclose-img click'
      };
      this.handleUnlockedDoor = this.handleUnlockedDoor.bind(this);
      this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
      this.handleEscape = this.handleEscape.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }


  sendUsersPlay(userPayload) {

    let roomId = this.state.id;
    let creator = this.state.current_user.id;
    fetch(`/api/v1/users/${creator}/rooms/${roomId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userPayload)
    })
    .then((response) => {
      this.getKeyStatus();
    })
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


  handleEscape() {
    this.setState({ escape: true })
    let userPayload = {
      room_id: this.state.id,
      escape: true
    };
    this.sendUsersPlay(userPayload);
    this.getKeyStatus();
  }

  handleUnlockedDoor() {
    let roomId = this.state.id;
    let creator = this.state.current_user.id;
    if (this.state.escape === false) {
      window.alert("This door is locked, you need a key to open this door.");
    } else {
      if (window.confirm('This door is unlocked, are you sure you want to leave?')){
        alert("You have left your room!");
        return fetch(`/api/v1/users/${creator}/rooms/${roomId}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .catch(error => console.error(`Error in fetch: ${error.message}`));
      }
    }
  }


  handleFormButtonClick() {
    if (this.state.formToggle == false) {
      this.setState({
        formToggle: true,
      })
    } else {
      this.setState({
        formToggle: false,
      })
    }
  }


  getUserData() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(responseData => {
      if (responseData.room.length === 0){
        this.setState({
          current_user: responseData.current_user
        });
      } else {
        this.setState({
          current_user: responseData.current_user,
          rooms: responseData.room,
          id: responseData.room[0].id,
          name: responseData.room[0].name,
          plant_health: responseData.room[0].plant_health,
          cleanliness: responseData.room[0].cleanliness,
          creator: responseData.room[0].user_id,
          escape: responseData.room[0].escape,
          moods: responseData.room[0].moods
        })
      }
    });
  }

  render() {

    let className;
    if (this.state.formToggle) {
      className = 'selected';
    } else {
      className = 'hidden';
    }

    let userRoom;
    if (this.state.rooms.length === 0) {
      userRoom = () => {
        return(
          <div className= 'welcome-text'>
            <h2>Indoors</h2>
            <p>
              A web-based escape the room game that creates a methodical meditative space that reflects the user’s physical world, virtually.
            </p>
            <RoomFormContainer
              className= {className}
              handleFormButtonClick= {this.handleFormButtonClick}
            />
          </div>
        )
      }
    } else {
      userRoom = () => {
        return(
          <RoomTile
          rooms= {this.state.rooms}
          key= {this.state.id}
          id= {this.state.id}
          name= {this.state.name}
          plant_health= {this.state.plant_health}
          cleanliness= {this.state.cleanliness}
          creator= {this.state.user_id}
          escape= {this.state.escape}
          moods= {this.state.moods}
          current_user= {this.state.current_user}
          handleUnlockedDoor= {this.handleUnlockedDoor}
          handleEscape= {this.handleEscape}
          keyInRoom= {this.state.keyInRoom}
          keyInInventory= {this.state.keyInInventory}
          keyInRoomClose= {this.state.keyInRoomClose}
          />
        )
      }
    }

    return(
      <div>
        {userRoom()}

      </div>

    )
  }
}
export default RoomShowContainer;
