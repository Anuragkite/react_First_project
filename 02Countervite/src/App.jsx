import { useState } from 'react'

import './App.css'

function App() {
const [ counter,setCounter] = useState(0);
  // let counter = 15;
  const AddValue = () =>{ 
  setCounter(counter+1)
  }
  const RemoveValue = () =>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>first react Application Anurag {counter}</h1>
      <h2>counter application in react</h2>

      <button>counter value</button>
      <button onClick={AddValue}>AddValue{counter}</button>
      <button onClick={RemoveValue}>removeValue</button>
      <p>footer:{counter}</p>


    </>
  )
}

export default App
