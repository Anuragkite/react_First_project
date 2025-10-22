import React from "react";

import Usercontext from "./UserContext";

const UserContextProvider = ({childern}) => {
    const [user,setUser] = userstate(null);
    return (
        <Usercontext.Provider value = {{user,setUser}}>
            {childern}
        </Usercontext.Provider>
    )
}


export default UserContextProvider