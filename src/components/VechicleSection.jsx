import { useState } from "react";
import GridItem from "./GirdItem";

function VechicleSection({ customerName }) {
  // These are the hardscoded values for the lorry or trailer trolly options
  let lorryButtons = [4, 8, 12, 16, 20, 24];
  let trailerButtons = [3, 6, 7];

  const [lorry, setLorry] = useState(lorryButtons);
  const [gridItems, setGridItems] = useState([]);
  const [grid, setGrid] = useState({
    col: 3,
    row: 3,
  });

  function handleTrailer() {
    setLorry(trailerButtons);
    setGrid({
      col: 3,
      row: 3,
    });
    setGridItems([]);
  }

  function handleLorry() {
    setLorry(lorryButtons);
    setGrid({ col: 4, row: 6 });
    setGridItems([]);
  }

  function generateGrid(number) {
    let arr = [];
    for (let i = 0; i < number; i++) {
      arr.push("");
    }
    setGridItems(arr);
  }

  return (
    <div className="outline outline-white p-2 flex content-center flex-col items-center">
      <div className="outline flex justify-evenly items-center outline-white w-1/2 h-7 mt-4">
        {lorry.map((item, index) => (
          <button onClick={() => generateGrid(item)} key={index}>
            {item}T
          </button>
        ))}
      </div>
      <div
        className={` outline outline-white h-3/4 w-3/4 mt-8 grid grid-cols-${grid.col} grid-rows-${grid.row} `}
      >
        {gridItems.map((item, index) => (
          <div key="2" className="outline outline-white">
            <GridItem value={customerName} index={index} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleLorry} className="mr-4">
          lorry
        </button>
        <button onClick={handleTrailer}>trailer</button>
      </div>
    </div>
  );
}

export default VechicleSection;
