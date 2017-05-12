import React from 'react';
import StrangersContainer from './StrangersContainer'
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
        <div>
        <h3 className='hood'>Neighborhood</h3>
          <StrangersContainer
            rooms= {this.state.rooms}
          />
          <div className='break'>
          </div>
        </div>

      )
    }
  }

export default NeighborsContainer;
