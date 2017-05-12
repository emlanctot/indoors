import React from 'react';
import { Link } from 'react-router';
import NewRoomForm from '../components/NewRoomForm';


class RoomFormContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        moodSelected: '',
        current_user: '',
        rooms: [],
        room_id: null,
        errors: {}
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleMoodSelection = this.handleMoodSelection.bind(this);
  }

  componentDidMount() {
    this.getUserData();

  }

  sendInput(roomPayload) {
    console.log(roomPayload)
    fetch(`/api/v1/users/${this.state.current_user.id}/rooms.json`, {
      credentials: 'same-origin',
      method: "POST",
      redirect: 'follow',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roomPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ rooms: [...this.state.rooms, responseData] });
    })
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

  handleClearForm() {
    this.setState({
      name: ''
    });
  }

  handleNameChange(event){
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.validateNameChange(this.state.name) &&
      this.validateMoodSelection(this.state.moodSelected)
    ) {
      let roomPayload = {
        name: this.state.name,
        moods: this.state.moodSelected,
        user_id: this.state.current_user.id
      };
      this.validateNameChange(this.state.name);
      this.validateMoodSelection(this.state.moodSelected);
      this.sendInput(roomPayload);
      this.handleClearForm();
    }
  }

  handleMoodSelection(event) {
    this.setState({ moodSelected: event.target.value })
  }

  validateMoodSelection(moodSelected) {
    if (moodSelected === '' || moodSelected === ' ') {
      let newError = { moodSelected: 'Mood should not be blank.' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.moodSelected;
      this.setState({ errors: errorState });
      return true;
    }
  }

  validateNameChange(name) {
    if (name === '' || name === ' ') {
      let newError = { name: 'Name should not be blank.' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.name;
      this.setState({ errors: errorState });
      return true;
    }
  }


  render() {

    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
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
            name = {this.state.name}
            moods = {this.state.moodSelected}
            nameChange = {this.handleNameChange}
            moodSelection = {this.handleMoodSelection}
            handleSubmit = {this.handleSubmit}
          />

        </div>
      </div>

    )
  }
}
export default RoomFormContainer;
