import GridItem from "./GirdItem";

function TrailerMap({ customerName, grid }) {
  return (
    <div
      className={`  h-3/4 w-3/4 mt-8 flex flex-col content-center items-center `}
    >
      <div className="border border-white w-full h-20"> </div>
      <div className="border border-white w-1/4 h-20"> </div>
      <div className="border border-white  w-2/3 h-3/5 grid grid-cols-3 grid-rows-3">
        {grid.map((item, index) => (
          <div key="2" className="outline outline-white">
            <GridItem value={customerName} index={index} />
          </div>
        ))}{" "}
      </div>

      {/* {grid.map((item, index) => (
        <div key="2" className="outline outline-white">
          <GridItem value={customerName} index={index} />
        </div>
      ))} */}
    </div>
  );
}

export default TrailerMap;
