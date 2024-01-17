import { useState } from "react";
import NewCustomerForm from "./NewCustomerForm";
import VehicleInfo from "./VehicleInfo";
import Customer from "./Customer";

function CustomerSection({
  onClick,
  printMode,
  togglePrintMode,
  vehicleForm,
  setVehicleForm,
}) {
  const [customerList, setCustomerList] = useState([]);
  const [showCustomerList, setShowCustomerList] = useState(false);

  return (
    <div className="lg:ml-4">
      <div className="flex justify-center items-center gap-1">
        <button
          className="dark:bg-dark-button-main border-2 dark:border-none w-[70%] rounded-xl mt-2 mb-2 p-2 hover:bg-button-main-hover"
          onClick={() => setShowCustomerList(!showCustomerList)}
        >
          Add Customer
        </button>
        <button
          className="dark:bg-orange-700 border-2 dark:border-none w-[20%] p-2 rounded-xl  mt-2 mb-2 hover:bg-orange-400"
          onClick={() => {
            togglePrintMode();
            setShowCustomerList(false);
          }}
        >
          {printMode ? "Finish" : "Edit"}
        </button>
      </div>

      {showCustomerList ? (
        <div className=" lg:w-full w-full grid grid-cols-2 grid-rows-1">
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

      <div className="dark:bg-dark-customer-input dark:border-none border-2 rounded-3xl p-3 m-2 lg:ml-0 lg:mr-0">
        <div className="w-full flex justify-around dark:text-transparent ">
          <p>Driver-{vehicleForm.driver}</p>
          <p>Vehicle-{vehicleForm.vehicleReg.toUpperCase()}</p>
          <p>Date- {vehicleForm.date}</p>
        </div>
        <h3
          className="lg:ml-2 ml-5 w-[70%] text-left text-transparent dark: text-white  lg:w-[90%] lg:text-end hover:text-blue-500 hover:cursor-pointer"
          onClick={() => onClick("Blank Trolley")}
        >
          Blank Trolley
        </h3>

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
