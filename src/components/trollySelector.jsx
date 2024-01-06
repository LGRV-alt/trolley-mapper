function TrollySelector({ lorry, setGridItems }) {
  function generateGrid(number) {
    let arr = [];
    for (let i = 0; i < number; i++) {
      arr.push("");
    }
    setGridItems(arr);
  }
  return (
    <div className="outline flex justify-evenly items-center outline-white w-1/2 h-7 mt-4">
      {lorry.map((item, index) => (
        <button onClick={() => generateGrid(item)} key={index}>
          {item}T
        </button>
      ))}
    </div>
  );
}

export default TrollySelector;
