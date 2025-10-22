import React, { useContext } from "react";
import Usercontext from "../Context/UserContext";

function Profile(){
    const {user} = useContext(Usercontext);
  
  if(!user) return <h1>Not logged in </h1>
  return (
    <div>

        <h1>Profile : {user.username}</h1>
    </div>)
}


export default Profile