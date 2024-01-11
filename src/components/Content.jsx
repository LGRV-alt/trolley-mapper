import VechicleSection from "./VechicleSection";
import CustomerSection from "./CustomerSection";
import { useState } from "react";

function Content() {
  const [customerValue, setCustomerValue] = useState("blank");

  return (
    <div className="h-full grid grid-cols-2 grid-rows-1 bg-[#161617]">
      <CustomerSection
        customerName={customerValue}
        onClick={setCustomerValue}
      />
      <VechicleSection customerName={customerValue} />
    </div>
  );
}

export default Content;
