import GridItem from "./GirdItem";

function TrailerMap({ customerName, grid }) {
  return (
    <div
      className={`  h-2/3 w-2/3 mt-8 flex flex-col content-center items-center `}
    >
      <div className="border-4 border-b-4 border-white w-full h-20"> </div>
      <div className="border-4 border-b-0 border-t-0 border-white w-1/4 h-20">
        {" "}
      </div>
      <div className="border-4 border-t-4  w-2/3 h-full grid grid-cols-3 grid-rows-3">
        {grid.map((item, index) => (
          <div key="2" className="outline outline-white">
            <GridItem value={customerName} index={index} />
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default TrailerMap;
