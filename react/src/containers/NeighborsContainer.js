import React from 'react';
import RoomContainer from './RoomContainer'
import { Link } from 'react-router';

class NeighborsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }
  componentDidMount() {
    this.getData();
  }


  getData() {
    fetch(`/api/v1/rooms`, {credentials: 'same-origin'})
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
        this.setState({ rooms: responseData });
      });
  }

    render() {

      return(
        <div className='room-container'>
          <RoomContainer
            rooms= {this.state.rooms}
          />
        </div>

      )
    }
  }

export default NeighborsContainer;
