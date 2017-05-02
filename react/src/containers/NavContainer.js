import React from 'react';
import { Link } from 'react-router';
import NewRoomForm from '../components/NewRoomForm';
import RoomContainer from './RoomContainer';

class NavContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        formToggle: false,
        rooms: []
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
  }

  sendInput(roomPayload) {
    console.log(roomPayload)
    fetch(`/api/v1/rooms.json`, {
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

  handleClearForm() {
    this.setState({
      name: ''
    });
  }

  handleNameChange(event){
    this.setState({ name: event.target.value });
  }


  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch(`/api/v1/rooms`, {credentials: 'same-origin'})
      .then(response => response.json())
      .then(responseData => {
        this.setState({ rooms: responseData });
      });
  }

  handleSubmit(event) {
  event.preventDefault();
    let roomPayload = {
      name: this.state.name,
      user_id: this.state.user_id
    };
    this.sendInput(roomPayload);
    this.handleClearForm();
  }

  handleFormButtonClick() {
    if (this.state.formToggle === false) {
      this.setState({ formToggle: true })
    } else {
      this.setState({ formToggle: false })
    }
  }



  render() {

    let className;
    if (this.state.formToggle) {
      className = 'selected'
    } else {
      className = 'hidden'
    };


    return(
      <div>
        <div className="menu">
          <ul className="menu align-right">
            <li>Profile</li>
            <li>Login/Signup/Logout</li>
            <li>Room</li>
            <NewRoomForm
            className = {className}
            handleFormButtonClick = {this.handleFormButtonClick}
            name = {this.state.name}
            nameChange = {this.handleNameChange}
            handleSubmit = {this.handleSubmit}
            />
          </ul>
        </div>
        <div>
          <RoomContainer
            rooms= {this.state.rooms}
          />
        </div>

      </div>

    )
  }
}
export default NavContainer;
