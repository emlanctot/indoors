import React from 'react';
import { Link } from 'react-router';

class NavContainer extends React.Component {
  constructor(props){
    super(props);
      this.state ={}
  }
  render() {
    return(
      <div>
        <div className="menu">
          <ul className="menu align-right">
            <li>Profile</li>
            <li>Login/Signup</li>
            <li>Room</li>
          </ul>
        </div>
        {this.props.children}
      </div>

    )
  }
}
export default NavContainer;
