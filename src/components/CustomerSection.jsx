import { useState } from "react";
import NewCustomerButton from "./NewCustomerButton";

function CustomerSection({ customerName, onClick }) {
  const [customerList, setCustomerList] = useState([]);
  console.log("customerList:", customerList);
  return (
    <div>
      <NewCustomerButton
        setCustomerList={setCustomerList}
        customerList={customerList}
      />
      <h3>Customers</h3>
      <h3 onClick={() => onClick("lewis")}>Lewis</h3>
      <h3 onClick={() => onClick("Jen")}>Jen</h3>
      <h3>{customerList.name}</h3>
      {customerList.map((item, index) => (
        <h3 key={index} onClick={() => onClick([item.name])}>
          {item.name}
        </h3>
      ))}
    </div>
  );
}

export default CustomerSection;
