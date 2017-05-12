import React from 'react';
import { Link } from 'react-router';
import NewRoomForm from '../components/NewRoomForm';


class RoomFormContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        moodSelected: '',
        current_user: '',
        rooms: [],
        room_id: null
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleMoodSelection = this.handleMoodSelection.bind(this);
  }

  componentDidMount() {
    this.getUserData();

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
      this.setState({ rooms: [...this.state.rooms, responseData] });
    })

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

  handleClearForm() {
    this.setState({
      name: ''
    });
  }

  handleNameChange(event){
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
  event.preventDefault();
    let roomPayload = {
      name: this.state.name,
      moods: this.state.moodSelected,
      user_id: this.state.current_user.id
    };
    this.sendInput(roomPayload);
    this.handleClearForm();
  }

  handleMoodSelection(event) {
    this.setState({ moodSelected: event.target.value })
  }


  render() {

    return(
      <div>
      <NewRoomForm
        name = {this.state.name}
        moods = {this.state.moodSelected}
        nameChange = {this.handleNameChange}
        moodSelection = {this.handleMoodSelection}
        handleSubmit = {this.handleSubmit}
      />

      </div>

    )
  }
}
export default RoomFormContainer;
