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
    <div className=" p-2 flex content-center flex-col items-center">
      <div>
        <button onClick={handleLorry} className="mr-4">
          lorry
        </button>
        <button onClick={handleTrailer}>trailer</button>
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
