import React, { Component } from 'react';
import { Link } from 'react-router';

class ProfileContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    fetch(`/api/v1/profiles`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ user: responseData.user })
    });
  }

  render() {

    return(
      <div>
        <div className="row" id="user-profile-area">

            <div className="small-6 large-6 columns" id="info-area">
              <h3> {this.state.user.email}</h3>
            </div>

        </div>

      </div>

    )
  }
}

export default ProfileContainer
