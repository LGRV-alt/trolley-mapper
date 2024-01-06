import GridItem from "./GirdItem";

function LorryMap({ customerName, grid }) {
  return (
    <div
      className={` outline outline-white h-3/4 w-3/4 mt-8 grid grid-cols-4 grid-rows-6 `}
    >
      {grid.map((item, index) => (
        <div key="2" className="outline outline-white">
          <GridItem value={customerName} index={index} />
        </div>
      ))}
    </div>
  );
}

export default LorryMap;
