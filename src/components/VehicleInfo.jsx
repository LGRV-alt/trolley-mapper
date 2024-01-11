import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function VehicleInfo() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="border-2 border-white bg-slate-500 min-w-60">
      <form className="grid grid-cols-1 grid-rows-3 mt-4 ml-4">
        <div className="w-full flex flex-col">
          <label className="flex justify-between w-full">Drivers Name:</label>
          <input
            className="mb-2 w-2/3 rounded border-black border-2 placeholder p-1"
            type="text"
            name="driversName"
            placeholder="John Doe"
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="flex justify-between">Vehicle Reg:</label>
          <input
            className=" mb-2 w-2/3 rounded  border-black border-2 p-1"
            type="text"
            name="vehicleReg"
            placeholder="SN20 YOA"
          />
        </div>
        <div className="w-full">
          <label className="flex gap-3 mb-4">
            Date:
            <DatePicker className="" onChange={onChange} value={value} />
          </label>
        </div>
      </form>
    </div>
  );
}

export default VehicleInfo;
