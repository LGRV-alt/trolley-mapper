import { useState } from "react";

function GridItem({ value, index }) {
  const [name, setName] = useState("");

  function checkNumber() {
    setName(value);
    console.log(index);
  }
  return (
    <div
      className="flex justify-center items-center text-lg w-full bg-blue-200 hover:bg-white cursor-pointer h-full"
      onClick={() => checkNumber()}
    >
      {name}
    </div>
  );
}

export default GridItem;
