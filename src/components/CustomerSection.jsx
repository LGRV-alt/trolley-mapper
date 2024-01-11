import { useState } from "react";
import NewCustomerForm from "./NewCustomerForm";
import VehicleInfo from "./VehicleInfo";

function CustomerSection({ onClick }) {
  const [customerList, setCustomerList] = useState([]);
  const [showCustomerList, setShowCustomerList] = useState(true);
  const [vehicleForm, setVehicleForm] = useState({
    driver: "",
    vehicleReg: "",
    date: "",
  });
  console.log("customerList:", customerList);
  return (
    <div className="ml-4">
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-700 w-1/2 rounded mt-2 mb-2"
          onClick={() => setShowCustomerList(!showCustomerList)}
        >
          Add Customer
        </button>
      </div>

      {showCustomerList ? (
        <div className=" w-full outline outline-2 grid grid-cols-2 grid-rows-1">
          <NewCustomerForm
            setCustomerList={setCustomerList}
            customerList={customerList}
          />
          <VehicleInfo
            vehicleForm={vehicleForm}
            setVehicleForm={setVehicleForm}
          />
        </div>
      ) : null}

      {/* TODO - Section to add a date reg etc */}
      {/* TODO - Change this to a component for each customer */}
      <div>
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
    </div>
  );
}

export default CustomerSection;
