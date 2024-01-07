import { useState } from "react";
import NewCustomerButton from "./NewCustomerButton";

function CustomerSection({ onClick }) {
  const [customerList, setCustomerList] = useState([]);
  console.log("customerList:", customerList);
  return (
    <div>
      <NewCustomerButton
        setCustomerList={setCustomerList}
        customerList={customerList}
      />
      {/* TODO - Change this to a component for each customer */}
      <h2>Customers</h2>
      <h3>{customerList.name}</h3>
      {customerList.map((item, index) => (
        <div key={index} onClick={() => onClick([item.name])}>
          <h3>{item.name}</h3>
          <h3>{item.trollies + "T"}</h3>
          <h3>{item.extras}</h3>
        </div>
      ))}
    </div>
  );
}

export default CustomerSection;
