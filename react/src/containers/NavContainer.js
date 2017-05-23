import React from 'react';
import { Link } from 'react-router';
import NewRoomForm from '../components/NewRoomForm';
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

    return(
      <div>

        <div className="menu">
          <ul className="nav-bar">
          <li className="active"><Link to='/'><img className='nav-key' src={assetHelper["keyclose.png"]}></img></Link></li>
            <li className="active"><Link to='/rooms'>NEIGHBORS</Link></li>
            <li className="active"><Link to='/'>ROOM</Link></li>
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
