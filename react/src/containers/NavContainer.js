import React from 'react';
import { Link } from 'react-router';
import NewRoomForm from '../components/NewRoomForm';
import RoomContainer from './RoomContainer';

class NavContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        current_user: '',
        formToggle: false,
        rooms: []
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
  }

  sendInput(roomPayload) {
    console.log(roomPayload)
    fetch('/api/v1/rooms.json', {
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
    this.getData();
    this.getUserData();
  }

  getData() {
    fetch(`/api/v1/rooms`, {credentials: 'same-origin'})
      .then(response => response.json())
      .then(responseData => {
        this.setState({ rooms: responseData });
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


  handleSubmit(event) {
  event.preventDefault();
    let roomPayload = {
      name: this.state.name,
      user_id: this.state.current_user.id
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
        <div className="menu" id="nav-bar">
          <ul className="menu align-right ">
            <li>NEIGHBORS</li>
            <li>ROOM</li>
            <li>PROFILE</li>
            <li onClick={this.handleFormButtonClick}>CREATE</li>
            <li>
              <NewRoomForm
                className = {className}
                handleFormButtonClick = {this.handleFormButtonClick}
                name = {this.state.name}
                nameChange = {this.handleNameChange}
                handleSubmit = {this.handleSubmit}
              />
            </li>
          </ul>
        </div>
        <div>
          <RoomContainer
            rooms= {this.state.rooms}
            current_user= {this.state.current_user}
          />
        </div>

      </div>

    )
  }
}
export default NavContainer;
