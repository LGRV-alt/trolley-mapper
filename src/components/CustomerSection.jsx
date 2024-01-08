import { useState } from "react";
import NewCustomerForm from "./NewCustomerForm";
import VehicleInfo from "./VehicleInfo";

function CustomerSection({ onClick }) {
  const [customerList, setCustomerList] = useState([]);
  console.log("customerList:", customerList);
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-1">
        <NewCustomerForm
          setCustomerList={setCustomerList}
          customerList={customerList}
        />
        <VehicleInfo />
      </div>

      {/* TODO - Section to add a date reg etc */}
      {/* TODO - Change this to a component for each customer */}
      <h2>Customers</h2>
      <h3>{customerList.name}</h3>
      {customerList.map((item, index) => (
        <div key={index} onClick={() => onClick([item.name])}>
          <h3>
            {item.name} {item.trollies} {item.extras}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default CustomerSection;
