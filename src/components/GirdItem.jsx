import { useState } from "react";

function GridItem({ value }) {
  const [name, setName] = useState("");

  function checkNumber() {
    setName(value);
  }
  return (
    <div
      className="flex justify-center  items-center lg:text-lg  text-sm text-center w-full bg-transparent hover:bg-slate-400 cursor-pointer p-4 h-full"
      onClick={() => checkNumber()}
    >
      {name}
    </div>
  );
}

export default GridItem;
