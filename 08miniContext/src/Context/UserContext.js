//this create a empty box which can only  be access with the help of userContextProvider as it gives the funtionlity to the surrounded components to add data to box via Usercontext provider's setData and childerns to access them with the help of data of setData useState functionality 

import React from "react";

const Usercontext = React.createContext();//creation of emptyBox


export default Usercontext;