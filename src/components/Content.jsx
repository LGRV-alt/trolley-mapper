import VechicleSection from "./VechicleSection";
import CustomerSection from "./CustomerSection";
import { useState } from "react";

function Content() {
  const [customerValue, setCustomerValue] = useState("");

  return (
    <div
      id="content"
      className=" grid-cols-1 h-full grid  lg:grid-cols-2 lg:grid-rows-1 bg-[#161617]   "
    >
      <CustomerSection
        customerName={customerValue}
        onClick={setCustomerValue}
      />

      <VechicleSection customerName={customerValue} />
    </div>
  );
}

export default Content;
