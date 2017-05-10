import React from 'react';
import { Link } from 'react-router';
import NewRoomForm from '../components/NewRoomForm';
import RoomContainer from './RoomContainer';
import NeighborsContainer from './NeighborsContainer';


class NavContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        current_user: '',
        formToggle: false,
        rooms: [],
        room_id: null
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
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

  handleClearForm() {
    this.setState({
      name: ''
    });
  }

  handleNameChange(event){
    this.setState({ name: event.target.value });
  }


  componentDidMount() {
    this.getUserData();
    this.getData();
    // this.getRoomsData();
  }


  getData() {
    fetch(`/api/v1/rooms/${this.props.params.id}`, {credentials: 'same-origin'})
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
        this.setState({
          rooms: responseData,
          room_id: responseData[0].id
         });
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
        <NewRoomForm
          className = {className}
          handleFormButtonClick = {this.handleFormButtonClick}
          name = {this.state.name}
          nameChange = {this.handleNameChange}
          handleSubmit = {this.handleSubmit}
        />
        <div className="menu">
          <ul className="nav-bar">
            <li className="active"><Link to='/rooms'>NEIGHBORS</Link></li>
            <li className="active"><Link to={`/rooms/${this.state.room_id}`}>ROOM</Link></li>
            <li className="active"><Link to='/profiles'>PROFILE</Link></li>
            <li onClick={this.handleFormButtonClick} className="active"><Link to='#'>CREATE</Link></li>
          </ul>
        </div>
        <hr className= 'nav-line'/>
        <div>

          {this.props.children}
        </div>
      </div>

    )
  }
}
export default NavContainer;
