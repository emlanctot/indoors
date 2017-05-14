import React from 'react';
import { Link, browserHistory } from 'react-router';
import NewRoomForm from '../components/NewRoomForm';


class RoomFormContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        moodSelected: '',
        current_user: '',
        rooms: [],
        room_id: null
      };

  }


  render() {

    let errorDiv;
    let errorItems;
    if (Object.keys(this.props.errors).length > 0) {
      errorItems = Object.values(this.props.errors).map(error => {
        return(<li key={error}>{error}</li>)
      });
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <div>
        <button type="button" onClick={this.props.handleFormButtonClick} className= 'make-room'>MAKE A ROOM</button>
        <div className= {this.props.className} id="room-form">
        {errorDiv}
          <NewRoomForm
            name = {this.props.name}
            moods = {this.props.moodSelected}
            nameChange = {this.props.handleNameChange}
            moodSelection = {this.props.handleMoodSelection}
            handleSubmit = {this.props.handleSubmit}
          />

        </div>
      </div>

    )
  }
}
export default RoomFormContainer;
