
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import{updateName,updateEmail} from "./action"

const App = () => {
const dispatch=useDispatch();
const {name,email}=useSelector(state=>state);
  const handleName=(e)=>{
     dispatch(updateName(e.target.value));
  }

  const handleEmail=(e)=>{
    dispatch(updateEmail(e.target.value));
  }


  return (
    <div>
        <h1>User Information</h1>
        <form>
          <label>Name:
            <input type="text" value={name} onChange={handleName}/>
          </label>
          <br></br>
          <label>Email:
            <input type="email" value={email} onChange={handleEmail}/>
          </label>
        </form>
        <h3>Current values in store:</h3>
        <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
        </div>
    </div>
  )
}

export default App
