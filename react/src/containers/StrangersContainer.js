import React from 'react';
import StrangerTile from '../components/StrangerTile'

class StrangersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
    render() {
      let rooms = this.props.rooms.map((room) => {
        return (
            <StrangerTile
              key= {room.id}
              id= {room.id}
              name= {room.name}
              plant_health= {room.plant_health}
              cleanliness= {room.cleanliness}
              creator= {room.user_id}
              escape= {room.escape}
              moods= {room.moods}
            />
        )
      })

      return(
        <div>
          <div className='row'>
            {rooms}
          </div>
        </div>

      )
    }
  }

export default StrangersContainer;
