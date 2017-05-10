import React from 'react';
import { Link } from 'react-router';

class ProfileContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: {},
      room: {}
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    fetch(`/api/v1/profiles`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ user: responseData.user, room: responseData.room })
    });
  }


  render() {
    let roomName;
    if (this.state.room.length === 0) {
      roomName = 'You currently don\'t have a room.'
    } else {
      roomName = this.state.room.name
    }

    return(
      <div>
        <div className="row" id="user-profile-area">

            <div className="small-6 large-6 columns" id="info-area">
              <h3> {this.state.user.email}</h3>
              <h5>{roomName}</h5>
            </div>

        </div>

      </div>

    )
  }
}

export default ProfileContainer
