import { useState } from "react";

function GridItem({ value, index }) {
  const [name, setName] = useState("");

  function checkNumber() {
    setName(value);
    console.log(index);
  }
  return (
    <div
      className="flex justify-center items-center lg:text-lg text-center w-full bg-transparent hover:bg-slate-700 cursor-pointer h-full"
      onClick={() => checkNumber()}
    >
      {name}
    </div>
  );
}

export default GridItem;
