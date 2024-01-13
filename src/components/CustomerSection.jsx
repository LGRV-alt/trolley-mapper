import { useState } from "react";
import NewCustomerForm from "./NewCustomerForm";
import VehicleInfo from "./VehicleInfo";
import Customer from "./Customer";

function CustomerSection({ onClick }) {
  const [customerList, setCustomerList] = useState([]);
  const [showCustomerList, setShowCustomerList] = useState(false);
  const [vehicleForm, setVehicleForm] = useState({
    driver: "",
    vehicleReg: "",
    date: "",
  });
  console.log("customerList:", customerList);
  return (
    <div className="lg:ml-4">
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-700 w-1/2 rounded mt-2 mb-2 hover:bg-blue-400"
          onClick={() => setShowCustomerList(!showCustomerList)}
        >
          Add Customer
        </button>
      </div>

      {showCustomerList ? (
        <div className=" lg:w-full w-screen lg:outline outline-2 grid grid-cols-2 grid-rows-1">
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
      <h3
        className="ml-2 mt-2 hover:text-blue-500 hover:cursor-pointer"
        onClick={() => onClick("Blank Trolley")}
      >
        Blank Trolley
      </h3>
      <div>
        <Customer
          customerList={customerList}
          setCustomerList={setCustomerList}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default CustomerSection;
