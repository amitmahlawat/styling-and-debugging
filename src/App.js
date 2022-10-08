
import React,{useState} from "react";
import AddUser from "./AddUser";

import UsersList from "./UsersList";

function App() {
const[usersList,SetUsersList]=useState([]);
  const SaveDataHandler=(username,userage)=>{
    SetUsersList((prevlist)=>{
      return [...prevlist, {name : username, age : userage,id:Math.random().toString()}]
    })
    // console.log(usersList)
    
    

  }
 

  return (
    <div>
      
    <AddUser onSaveData={SaveDataHandler} />
    <UsersList users={usersList}/>
    
    
    
    </div>
  );
}

export default App;
