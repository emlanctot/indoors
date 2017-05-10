import React from 'react';
import { Link } from 'react-router';
import RoomContainer from './RoomContainer';


class RoomShowContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        current_user: '',
        rooms: []
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
      if (responseData.length > 0){
        this.setState({
          rooms: responseData,
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
    //
    // let userRoom;
    // if (this.state.rooms.length === 0) {
    //   userRoom = () => {
    //     return(
    //       <RoomFormContainer
    //         key= {this.props.id}
    //         id= {this.props.id}
    //         current_user= {this.state.current_user}
    //         rooms= {this.state.rooms}
    //       />
    //     )
    //   }
    // } else {
    //   userRoom = () => {
    //     return(
    //     )
    //   }
    // }


    return(
      <div>

      <RoomContainer
      rooms= {this.state.rooms}
      current_user= {this.state.current_user}
      />

      </div>

    )
  }
}
export default RoomShowContainer;
