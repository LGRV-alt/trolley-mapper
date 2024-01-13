// TODO - add a number value on the customers which changes the order that they appear

function Customer({ customerList, setCustomerList, onClick }) {
  function handleDel(index) {
    const newList = customerList.filter(
      (item) => customerList.indexOf(item) !== index
    );
    setCustomerList(newList);
  }

  return (
    <div>
      {customerList.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick([item.name])}
          className=" lg:w-1/2 w-full h-6 lg:h-11 lg:grid lg:grid-rows-1 lg:grid-cols-2 flex gap-2"
        >
          <div className="flex flex-row gap-1">
            <button
              className="w-2/12 text-red-600 hover:bg-red-600 hover:text-white hover:rounded-full "
              onClick={() => handleDel(index)}
            >
              X
            </button>
            <h3 className="flex lg:text-lg  items-center sm:text-base  hover:text-blue-500 hover:cursor-pointer">
              {item.name}
            </h3>
          </div>

          <div className="flex flex-row gap-2">
            {item.trollies ? (
              <p className="text-red-500 flex justify-center items-center ">
                {" "}
                {item.trollies}T
              </p>
            ) : null}
            <p className="text-yellow-500 flex items-center">{item.extras}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Customer;
