import { useState } from "react";
import "./App.css";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";

function App() {
  const [person, setPerson] = useState("");

  function handleInput(e) {
    setPerson(e.target.value);
  }

  return (
    <>
      <div className=" grid h-full min-h-screen bg-red-500 grid-cols-2 gap-4">
        <Sidebar person={person} onChange={handleInput} />
        <h1 className="  border-white-700 border-4 text-white-400 bg-green-500 h-16 w-30 flex items-center justify-center">
          {person}
        </h1>
      </div>
    </>
  );
}

export default App;
