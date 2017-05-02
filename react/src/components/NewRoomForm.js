import React from 'react';

const NewRoomForm = (props) => {
  return(
    <div className="column row">
      <div>
        <center> <button type="button" onClick={props.handleFormButtonClick} className= 'share-app'>MAKE A ROOM</button> </center>
      </div>
      <form onSubmit={props.handleSubmit} className={props.className}>
        <label>Where is the room?</label>
        <input name="name" type="text" onChange={props.nameChange} value={props.name}/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default NewRoomForm;
