import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";
import { use } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const passwordref = useRef();
 
 
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    // window.alert("password copied successfully!!")
    passwordref.current?.select();
  }  

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+";

  

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, length, charAllowed]);


  // use effect hook :-> as soon as the something change reflect that change and rerenders the code using react
  useEffect(()=>{
    generatePassword()
  },[length, charAllowed, numberAllowed])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white  bg-amber-500 mt-50   ">
        <h1 className="bg-red-500 text-white my-3 text-1.5xl rounded-2xl">
          RANDOM PASSWORD GENERATOR
        </h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password "
            readOnly
            ref={passwordref}
          />
          <button
          onClick={copyToClipboard}
            className="outline-none bg-blue-700
            text—white px—3 py-0.6 shrink-0"
          >
            copy
          </button>
        </div>
        <div className=" flex text—sm gap-x—2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              name=""
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
            />

            <label htmlFor="length"> length:{length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number ">numbers</label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor="characters">characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
