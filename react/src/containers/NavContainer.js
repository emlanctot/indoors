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

  }


  componentDidMount() {
    this.getUserData();
    this.getData();
  }


  getData() {
    fetch(`/api/v1/rooms/${this.props.params.id}`, {credentials: 'same-origin'})
      .then(response => response.json())
      .then(responseData => {
        if (responseData[0].id !== null){
          this.setState({
            rooms: responseData,
            room_id: responseData[0].id
           });
         }
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


  render() {

    let roomLink;
    if (this.state.rooms.length < 1) {
      roomLink = `/users/${this.state.current_user.id}/rooms/new`
    } else {
      roomLink= `/rooms/${this.state.room_id}`
    }


    return(
      <div>

        <div className="menu">
          <ul className="nav-bar">
            <li className="active"><Link to='/rooms'>NEIGHBORS</Link></li>
            <li className="active"><Link to={roomLink}>ROOM</Link></li>
            <li className="active"><Link to='/profiles'>PROFILE</Link></li>
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
