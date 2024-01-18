import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function VehicleInfo({ vehicleForm, setVehicleForm }) {
  return (
    <div className="  rounded-3xl ml-2 mr-2 lg:min-w-60  bg-light-customer-input dark:bg-dark-customer-input">
      <form className="grid grid-cols-1 grid-rows-3 mt-4 ml-4">
        <div className="w-full flex flex-col">
          <label className="flex justify-between w-full mb-1">
            Drivers Name
          </label>
          <input
            className="mb-2 lg:w-2/3 w-11/12 rounded  border-2 border-black dark:border-white placeholder p-1 bg-transparent hover:border-blue-800"
            type="text"
            name="driversName"
            placeholder="John Doe"
            value={vehicleForm.driver}
            onChange={(e) =>
              setVehicleForm({ ...vehicleForm, driver: e.target.value })
            }
          />
        </div>
        <div className="w-full flex flex-col mb-1">
          <label className="flex justify-between mb-2 ">Vehicle Reg</label>
          <input
            className=" lg:w-2/3 w-11/12 rounded border-2 border-black dark:border-white p-1 bg-transparent hover:border-blue-800"
            type="text"
            name="vehicleReg"
            placeholder="SN20 YOA"
            value={vehicleForm.vehicleReg}
            onChange={(e) =>
              setVehicleForm({ ...vehicleForm, vehicleReg: e.target.value })
            }
          />
        </div>
        <div className="w-full mt-2">
          <label className="flex justify-between mb-2 ">Date</label>
          <input
            type="date"
            className=" bg-transparent flex justify-center items-center "
            onChange={(e) =>
              setVehicleForm({ ...vehicleForm, date: e.target.value })
            }
            value={vehicleForm.date}
          />
        </div>
      </form>
    </div>
  );
}

export default VehicleInfo;
