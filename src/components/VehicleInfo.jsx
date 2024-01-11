import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function VehicleInfo({ vehicleForm, setVehicleForm }) {
  return (
    <div className=" bg-slate-700 min-w-60 text-white">
      <form className="grid grid-cols-1 grid-rows-3 mt-4 ml-4">
        <div className="w-full flex flex-col">
          <label className="flex justify-between w-full mb-1">
            Drivers Name
          </label>
          <input
            className="mb-2 w-2/3 rounded border-black border-2 placeholder p-1 bg-transparent hover:border-blue-800"
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
            className=" w-2/3 rounded  border-black border-2 p-1 bg-transparent hover:border-blue-800"
            type="text"
            name="vehicleReg"
            placeholder="SN20 YOA"
            value={vehicleForm.vehicleReg}
            onChange={(e) =>
              setVehicleForm({ ...vehicleForm, vehicleReg: e.target.value })
            }
          />
        </div>
        <div className="w-full">
          <input
            type="date"
            className="bg-transparent flex justify-center items-center "
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
