import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function VehicleInfo() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="border-2 border-white bg-white">
      <form className="flex flex-col justify mt-4 ml-4">
        <label className="flex justify-between w-full">
          Drivers Name:
          <input
            className="mb-4 mr-6"
            type="text"
            name="driversName"
            placeholder="John Doe"
          />
        </label>
        <label className="flex justify-between">
          Vehicle Reg:
          <input
            className=" mb-4 mr-6"
            type="text"
            name="vehicleReg"
            placeholder="SN20 YOA"
          />
        </label>

        <label className="flex justify-between mr-6">
          Date:
          <DatePicker className="" onChange={onChange} value={value} />
        </label>
      </form>
      <button className=" w-full bg-black text-white mt-4">create</button>
    </div>
  );
}

export default VehicleInfo;
