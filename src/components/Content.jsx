import VechicleSection from "./VechicleSection";
import CustomerSection from "./CustomerSection";
import { useState } from "react";

function Content({ printMode, togglePrintMode }) {
  const [customerValue, setCustomerValue] = useState("");

  return (
    <div
      id="content"
      className=" grid-cols-1 h-full grid  lg:grid-cols-2 lg:grid-rows-1 "
    >
      <CustomerSection
        customerName={customerValue}
        onClick={setCustomerValue}
        printMode={printMode}
        togglePrintMode={togglePrintMode}
      />

      <VechicleSection customerName={customerValue} printMode={printMode} />
    </div>
  );
}

export default Content;
