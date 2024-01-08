function VehicleInfo() {
  return (
    <div className="border-2 border-white ">
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
        <label className="flex justify-between">
          Date:
          <input
            className="mr-6"
            type="text"
            name="extras"
            placeholder="10 Comp"
          />
        </label>
      </form>
      <button className=" w-full bg-black text-white mt-4">create</button>
    </div>
  );
}

export default VehicleInfo;
