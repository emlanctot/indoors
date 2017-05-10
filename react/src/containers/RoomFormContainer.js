import React from 'react';
import { Link } from 'react-router';
import NewRoomForm from '../components/NewRoomForm';


class RoomFormContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        current_user: '',
        rooms: [],
        room_id: null
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getUserData();

  }

  sendInput(roomPayload) {
    console.log(roomPayload)
    fetch(`/api/v1/users/${this.state.current_user.id}/rooms.json`, {
      credentials: 'same-origin',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roomPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ rooms: [...this.state.rooms, responseData] });
    });
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
      user_id: this.state.current_user.id
    };
    this.sendInput(roomPayload);
    this.handleClearForm();
  }




  render() {

    return(
      <div>
      <NewRoomForm
        name = {this.state.name}
        nameChange = {this.handleNameChange}
        handleSubmit = {this.handleSubmit}
      />

      </div>

    )
  }
}
export default RoomFormContainer;
