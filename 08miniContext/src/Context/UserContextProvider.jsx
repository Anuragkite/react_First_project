import React,{useState} from "react";

import Usercontext from "./UserContext";
// container which is giving the access to add or access data from box/container
const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    return (
        <Usercontext.Provider value = {{user,setUser}}>
            {children}
        </Usercontext.Provider>
    );
};


export default UserContextProvider;