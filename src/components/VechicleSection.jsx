import { useState } from "react";
import LorryMap from "./Lorry";
import TrollySelector from "./trollySelector";
import TrailerMap from "./Trailer";

function VechicleSection({ customerName }) {
  // These are the hardscoded values for the lorry or trailer trolly options
  let lorryButtons = [4, 8, 12, 16, 20, 24];
  let trailerButtons = [3, 6, 7];

  const [vehicle, setVehicle] = useState("lorry");
  const [lorry, setLorry] = useState(lorryButtons);
  const [gridItems, setGridItems] = useState([]);

  function handleTrailer() {
    setVehicle("trailer");
    setLorry(trailerButtons);
    setGridItems([]);
  }

  function handleLorry() {
    setVehicle("lorry");
    setLorry(lorryButtons);
    setGridItems([]);
  }

  return (
    <div className=" p-2 flex content-center flex-col items-center h-screen">
      <div className="mb-2">
        <button
          onClick={handleLorry}
          className="mr-4 text-lg bg-blue-600 w-14 hover:bg-blue-300"
        >
          Lorry
        </button>
        <button
          onClick={handleTrailer}
          className="text-lg bg-blue-600 w-14 hover:bg-blue-300"
        >
          Trailer
        </button>
      </div>
      <TrollySelector lorry={lorry} setGridItems={setGridItems} />
      {vehicle === "lorry" ? (
        <LorryMap customerName={customerName} grid={gridItems} />
      ) : (
        <TrailerMap customerName={customerName} grid={gridItems} />
      )}
    </div>
  );
}

export default VechicleSection;
