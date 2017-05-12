import React from 'react';
import AllCorners from '../components/AllCorners'


class StrangerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plant_health: this.props.plant_health,
      cleanliness: this.props.cleanliness,
      escape: this.props.escape,
      moods: this.props.moods,
      current_user: '',
      cleanStatus: '',
      keyInRoom: 'key-img click',
      keyInInventory: 'hidden',
      keyInRoomClose: 'keyclose-img click',
      leaves: null,
      cobweb1: null,
      cobweb2: null
    }
       this.handleWater = this.handleWater.bind(this);
       this.handleClean = this.handleClean.bind(this);
       this.handleEscape = this.handleEscape.bind(this);
       this.handleUnlockedDoor = this.handleUnlockedDoor.bind(this);

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

    handleWater() {
      let value = this.state.plant_health += 1;
      this.setState({ plant_health: value });
      let userPayload = {
        room_id: this.props.id,
        plant_health: this.state.plant_health
      };
      this.sendUsersPlay(userPayload);
      this.getPlantStatuses();
    }


    sendUsersPlay(userPayload) {
      let roomId = this.props.id;
      let creator = this.props.creator;
      fetch(`/api/v1/users/${creator}/rooms/${roomId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userPayload)
      })
      .then((response) => {
        this.getKeyStatus();
      })
    }

    handleUnlockedDoor() {
      let roomId = this.props.id;
      let creator = this.props.creator;
      return fetch(`/api/v1/users/${creator}/rooms/${roomId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      })
    }

    handleEscape() {
      this.setState({ escape: true })
      let userPayload = {
        room_id: this.props.id,
        escape: true
      };
      this.sendUsersPlay(userPayload);
      this.getKeyStatus();
    }

    getKeyStatus() {
      if (this.state.escape === true) {
        this.setState({
          keyInRoom: 'hidden',
          keyInRoomClose: 'hidden',
          keyInInventory: 'inventory-selected'
        })
      }
    }

    handleClean() {
      let value = this.state.cleanliness += 1;
      this.setState({ cleanliness: value });
      let userPayload = {
        room_id: this.props.id,
        cleanliness: this.state.cleanliness
      };
      this.sendUsersPlay(userPayload);
      this.getCleanStatuses();
    }

    componentDidMount() {
      this.getPlantStatuses();
      this.getUserData();
      this.getCleanStatuses();
      this.getKeyStatus();
    }

    getPlantStatuses() {
      if (this.state.plant_health > 8) {
        this.setState({
          leaves: null
        });
      } else if (this.state.plant_health == 8){
        this.setState({
          leaves: <img className="leaves-img" src={assetHelper["leaves1.png"]}></img>
         });
      } else if (this.state.plant_health == 7){
        this.setState({
          leaves: <img className="leaves-img" src={assetHelper["leaves2.png"]}></img>
        });
      } else if (this.state.plant_health == 6){
        this.setState({
          leaves: <img className="leaves-img" src={assetHelper["leaves3.png"]}></img>
        });
      } else if (this.state.plant_health == 5){
        this.setState({
          leaves: <img className="leaves-img" src={assetHelper["leaves4.png"]}></img>
        });
      } else if (this.state.plant_health == 4){
        this.setState({
          leaves: <img className="leaves-img" src={assetHelper["leaves5.png"]}></img>
         });
      } else if (this.state.plant_health == 3){
        this.setState({
          leaves: <img className="leaves-img" src={assetHelper["leaves6.png"]}></img>
         });
      } else if (this.state.plant_health == 2){
        this.setState({
          leaves: <img className="leaves-img" src={assetHelper["leaves7.png"]}></img>
         });
      } else {
        this.setState({
          leaves: <img className="leaves-img" src={assetHelper["leaves8.png"]}></img>
        });
      };
    };

    getCleanStatuses() {
      if (this.state.cleanliness > 8) {
        this.setState({
          cleanStatus: 'the room is spotless.',
          cobweb1: null,
          cobweb2: null
         });
      } else if (this.state.cleanliness == 8){
        this.setState({
          cleanStatus: 'the room is very clean.',
          cobweb1: null,
          cobweb2: null
        });
      } else if (this.state.cleanliness == 7){
        this.setState({
          cleanStatus: 'the room is slightly disorganized.',
          cobweb1: null,
          cobweb2: null
        });
      } else if (this.state.cleanliness == 6){
        this.setState({
          cleanStatus: 'the room is cluttered.',
          cobweb1: null,
          cobweb2: <img className="cobweb2-img" src={assetHelper["cobweb2.png"]}></img>
        });
      } else if (this.state.cleanliness == 5){
        this.setState({
          cleanStatus: 'the room needs to be cleaned.',
          cobweb1: <img className="cobweb1-img" src={assetHelper["cobweb1.png"]}></img>,
          cobweb2: null
        });
      } else if (this.state.cleanliness == 4){
        this.setState({
          cleanStatus: 'there are cobwebs.',
          cobweb1: <img className="cobweb1-img" src={assetHelper["cobweb1.png"]}></img>,
          cobweb2: <img className="cobweb2-img" src={assetHelper["cobweb2.png"]}></img>
        });
      } else if (this.state.cleanliness == 3){
        this.setState({
          cleanStatus: 'the room is filthy.',
          cobweb1: <img className="cobweb1-img" src={assetHelper["cobweb1.png"]}></img>,
          cobweb2: <img className="cobweb2-img" src={assetHelper["cobweb2.png"]}></img>
        });
      } else if (this.state.cleanliness == 2){
        this.setState({
          cleanStatus: 'you can hear mice in the walls.',
          cobweb1: <img className="cobweb1-img" src={assetHelper["cobweb1.png"]}></img>,
          cobweb2: <img className="cobweb2-img" src={assetHelper["cobweb2.png"]}></img>
         });
      } else {
        this.setState({
          cleanStatus: 'the room is uninhabitable',
          cobweb1: <img className="cobweb1-img" src={assetHelper["cobweb1.png"]}></img>,
          cobweb2: <img className="cobweb2-img" src={assetHelper["cobweb2.png"]}></img>
         });
      };
    };


    render() {
      let cleanClickResponse;
      let waterClickResponse;
      let escapeClickResponse;
      let unlockedDoorResponse;
      if (this.state.current_user.id === this.props.creator){
        waterClickResponse = this.handleWater
        cleanClickResponse = this.handleClean
        escapeClickResponse = this.handleEscape
        unlockedDoorResponse = this.handleUnlockedDoor
      } else {
        waterClickResponse = null;
        cleanClickResponse = null;
        escapeClickResponse = null;
        unlockedDoorResponse = null;
      }

      return(
          <div className="small-12 large-6 columns">
              <h4 className= 'strange-room-name'>{this.props.name}</h4>
              <div className='strange-room-wrapper'>
                <AllCorners
                  id= {this.props.id}
                  key= {this.props.id}
                  creator= {this.props.creator}
                  plant_health= {this.state.plant_health}
                  waterClickResponse= {waterClickResponse}
                  cleanClickResponse= {cleanClickResponse}
                  escapeClickResponse= {escapeClickResponse}
                  keyInRoom= {this.state.keyInRoom}
                  keyInRoomClose= {this.state.keyInRoomClose}
                  current_user= {this.state.current_user}
                  escape= {this.state.escape}
                  leaves= {this.state.leaves}
                  moods= {this.state.moods}
                  cobweb1= {this.state.cobweb1}
                  cobweb2= {this.state.cobweb2}
                />
              </div>

          </div>



      )
    }
  }

export default StrangerTile;
