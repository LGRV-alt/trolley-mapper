import { useState } from "react";

function VechicleSection() {
  let lorryButtons = ["4", "8", "12", "16", "20", "24"];
  let trailerButtons = ["3", "6", "7"];
  const [lorry, setLorry] = useState(true);

  return (
    <div className="outline outline-white p-2 flex content-center flex-col items-center">
      <div className="outline flex justify-evenly items-center outline-white w-1/2 h-7 mt-4">
        {lorry
          ? lorryButtons.map((item) => <li key={item}>{item}T</li>)
          : trailerButtons.map((item) => <li key={item}>{item}T</li>)}
      </div>
      <div className="outline outline-white h-3/4 w-3/4 mt-8 "></div>
      <div>
        <button onClick={() => setLorry(true)} className="mr-4">
          lorry
        </button>
        <button onClick={() => setLorry(false)}>trailer</button>
      </div>
    </div>
  );
}

export default VechicleSection;
