import GridItem from "./GirdItem";

function LorryMap({ customerName, grid }) {
  return (
    <div
      className={` border-2 lg:h-2/3 lg:w-2/3 sm:h-full w-full h-2/4 mt-8 grid grid-cols-4 grid-rows-6 `}
    >
      {grid.map((item, index) => (
        <div key={index} className="border-2 ">
          <GridItem value={customerName} index={index} />
        </div>
      ))}
    </div>
  );
}

export default LorryMap;
