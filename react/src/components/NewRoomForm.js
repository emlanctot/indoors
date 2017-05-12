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

        <label>Mood?
          <select name={props.moods} value={props.moods} onChange={props.moodSelection}>
            <option value=""></option>
            <option value="Sad">Sad</option>
            <option value="Corporate">Corporate</option>
            <option value="Anxious">Anxious</option>
            <option value="Heroic">Heroic</option>
            <option value="Calm">Calm</option>
            <option value="Happy">Happy</option>
          </select>
        </label>

        <input type="submit" value="Submit" name="Submit" />
      </form>
    </div>
  )
}


export default NewRoomForm;
