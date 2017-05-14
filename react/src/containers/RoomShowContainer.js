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
        moodSelected: '',
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
        keyInRoomClose: 'keyclose-img click',
        errors: {}
      };
      this.handleUnlockedDoor = this.handleUnlockedDoor.bind(this);
      this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
      this.handleEscape = this.handleEscape.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleMoodSelection = this.handleMoodSelection.bind(this);
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
        .then(responseData => {
          this.getUserData();
        })
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
          current_user: responseData.current_user,
          rooms: '',
          id: '',
          name: '',
          plant_health: '',
          cleanliness: '',
          creator: '',
          escape: '',
          moods: ''
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
    })
    .then(response => {
      this.getKeyStatus();
    })
  }


  sendInput(roomPayload) {
    console.log(roomPayload)
    fetch(`/api/v1/users/${this.state.current_user.id}/rooms.json`, {
      credentials: 'same-origin',
      method: "POST",
      redirect: 'follow',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roomPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        rooms: [...this.state.rooms, responseData.rooms],
        current_user: responseData.current_user
       });
    })
    .then(responseData => {
      this.getUserData();
    })
  }

  handleClearForm() {
    this.setState({
      name: '',
      mood: ''
    });
  }

  handleNameChange(event){
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.validateNameChange(this.state.name) &&
      this.validateMoodSelection(this.state.moodSelected)
    ) {
      let roomPayload = {
        name: this.state.name,
        moods: this.state.moodSelected,
        user_id: this.state.current_user.id
      };
      this.validateNameChange(this.state.name);
      this.validateMoodSelection(this.state.moodSelected);
      this.sendInput(roomPayload);
      this.handleClearForm();
    }
  }

  handleMoodSelection(event) {
    this.setState({ moodSelected: event.target.value })
  }

  validateMoodSelection(moodSelected) {
    if (moodSelected === '' || moodSelected === ' ') {
      let newError = { moodSelected: 'Mood should not be blank.' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.moodSelected;
      this.setState({ errors: errorState });
      return true;
    }
  }

  validateNameChange(name) {
    if (name === '' || name === ' ') {
      let newError = { name: 'Name should not be blank.' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.name;
      this.setState({ errors: errorState });
      return true;
    }
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
              A web-based escape the room game that creates a meditative space
              that reflects the user’s physical world, virtually. <br />
              Upon creating a room, the user will be free to explore, as long as
              they keep the room clean and water their ficus. Once they find the
              the key, they are free to leave.
            </p>
            <RoomFormContainer
              rooms= {this.state.rooms}
              className= {className}
              handleFormButtonClick= {this.handleFormButtonClick}
              errors= {this.state.errors}
              handleSubmit= {this.handleSubmit}
              handleMoodSelection= {this.handleMoodSelection}
              handleNameChange= {this.handleNameChange}
              name= {this.state.name}
              moodSelected= {this.state.moodSelected}
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
