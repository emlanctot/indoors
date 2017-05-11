import React from 'react';
import { Link } from 'react-router';

const NewRoomForm = (props) => {
  return(
    <div className="splash-logged">
      <div>
      </div>
      <form onSubmit={props.handleSubmit} className= {props.className}>
        <label>Where is the room?</label>
        <input name="name" type="text" onChange={props.nameChange} value={props.name}/>

        <input type="submit" value="Submitn" name="Submit" id="frm1_submit" />
      </form>
    </div>
  )
}

export default NewRoomForm;
