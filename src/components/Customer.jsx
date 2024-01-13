// TODO - add a number value on the customers which changes the order that they appear

function Customer({ customerList, onClick }) {
  return (
    <div>
      {customerList.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick([item.name])}
          className=" lg:w-1/2 w-full h-12 lg:grid lg:grid-rows-1 lg:grid-cols-[40%_30%_20%] flex gap-2   hover:text-blue-500 hover:cursor-pointer"
        >
          <h3 className="flex lg:text-lg ml-2 items-center sm:text-base">
            {item.name}
          </h3>
          {item.trollies.length > 0 ? (
            <p className="text-red-500 flex justify-center items-center">
              {" "}
              {item.trollies}T
            </p>
          ) : null}
          <p className="text-red-500 flex  items-center">{item.extras}</p>
        </div>
      ))}
    </div>
  );
}

// {item.name} {item.trollies} {item.extras}

export default Customer;
