import VechicleSection from "./VechicleSection";
import CustomerSection from "./CustomerSection";
import { useState } from "react";

function Content() {
  const [customerValue, setCustomerValue] = useState("blank");

  return (
    <div className="outline h-full grid grid-cols-2 grid-rows-1 outline-black outline-4  bg-blue-400">
      <CustomerSection
        customerName={customerValue}
        onClick={setCustomerValue}
      />
      <VechicleSection customerName={customerValue} />
    </div>
  );
}

export default Content;
