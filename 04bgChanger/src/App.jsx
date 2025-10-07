import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  function changeColor(colorvar) {
    setColor(colorvar);
  }
  return (
    <div
      className="w-FULL h-screen duration-200 "
      style={{ background: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3  shadow-lg  bg-white px-3  py-3 rounded-3xl">
          <button
            onClick={() => changeColor("linear-gradient(to left, purple, red)")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black  bg-red-400  p-2 ">
            Red
          </button>
          <button    onClick={() => changeColor("linear-gradient(to right,  #3b82f6, #8b5cf6)")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black  bg-blue-400  p-2 ">
            blue
          </button>
          <button
            onClick={() => changeColor("linear-gradient(to right,#22c55e, #3b82f6)")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black  bg-green-400 p-2 ">
            green
          </button>
          <button
            onClick={() => changeColor("linear-gradient(to right, purple,yellow)")}
            
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black  bg-purple-400 p-2 ">
            purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
