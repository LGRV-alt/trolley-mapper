import { useState } from "react";

function NewCustomerButton({ setCustomerList, customerList }) {
  const [customer, setCustomer] = useState({});
  const [form, setForm] = useState({ name: "", trollies: "", extras: "" });

  // TODO - handle invalid customer entry
  function handleCreate() {
    if (form.name.length < 1) {
      alert("needs a name");
    }
    setCustomerList([...customerList, form]);
    setCustomer({});
    setForm({ name: "", trollies: "", extras: "" });
  }

  function handleFormInputs(event, key) {
    setCustomer({ ...customer, [key]: event.target.value });
    setForm({ ...form, [key]: event.target.value });
  }
  return (
    <div className=" rounded-3xl ml-2 lg:ml-0 lg:min-w-60 bg-light-customer-input dark:bg-dark-customer-input">
      <form className="grid grid-cols-1 grid-rows-3 mt-4 ml-4">
        <div className="w-full flex flex-col">
          <label className="flex mb-1 ">Customer Name</label>
          <input
            className="mb-2 lg:w-2/3 w-11/12 rounded border-2 border-black dark:border-white p-1 bg-transparent hover:border-blue-800"
            value={form.name}
            type="text"
            name="name"
            placeholder="Landscapers"
            onChange={(event) => handleFormInputs(event, "name")}
          />
        </div>
        <div className="w-full flex flex-col ">
          <label className="flex mb-1">Extras</label>
          <input
            className="mb-2 lg:w-2/3 w-11/12 rounded  border-2  border-black dark:border-white p-1 bg-transparent hover:border-blue-800"
            value={form.extras}
            type="text"
            name="extras"
            placeholder="10 Comp"
            onChange={(event) => handleFormInputs(event, "extras")}
          />
        </div>
        <div className="w-full flex  flex-col ">
          <label className="flex mb-1 ">Trollies</label>
          <input
            className="mb-2 w-14 rounded border-2  border-black dark:border-white p-1 bg-transparent hover:border-blue-800"
            value={form.trollies}
            min="0"
            type="number"
            name="trollies"
            placeholder="4T"
            onChange={(event) => handleFormInputs(event, "trollies")}
          />
        </div>
        <button
          type="button"
          className=" rounded-xl lg:w-2/3 w-11/12 mb-3 h-8 border-2 bg-black text-white hover:text-black hover:bg-yellow-400"
          onClick={() => handleCreate()}
        >
          create
        </button>
      </form>
    </div>
  );
}

export default NewCustomerButton;
