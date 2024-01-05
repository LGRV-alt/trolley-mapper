import { useState } from "react";

function VechicleSection() {
  let lorryButtons = ["4", "8", "12", "16", "20", "24"];
  let trailerButtons = [3, 6, 7];

  const [lorry, setLorry] = useState(lorryButtons);
  const [gridItems, setGridItems] = useState();

  const [grid, setGrid] = useState({
    col: 3,
    row: 3,
    items: [],
    totalTrollies: 24,
  });

  function handleTrailer() {
    let totalTrollies = 7;
    let gridItems = [];
    for (let i = 0; i < totalTrollies; i++) {
      gridItems.push("");
    }
    setLorry(trailerButtons);
    setGrid({
      items: gridItems,
      col: 3,
      row: 3,
    });
    console.log(grid);
  }

  function handleLorry() {
    let totalTrollies = 24;
    let gridItems = [];
    for (let i = 0; i < totalTrollies; i++) {
      gridItems.push("");
    }
    setLorry(lorryButtons);
    setGrid({ col: 4, row: 6, items: gridItems });
    console.log(grid);
  }

  function generateGrid(number) {
    setGridItems(number);
    let arr = [];
    for (let i = 0; i < number; i++) {
      arr.push(i);
    }
    console.log(arr);
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
        {grid.items.map(() => (
          <div key="2" className="outline outline-white">
            {gridItems}
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
