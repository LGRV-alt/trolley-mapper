import { useState } from "react";

function NewCustomerButton({ setCustomerList, customerList }) {
  const [customer, setCustomer] = useState({});
  const [form, setForm] = useState({});

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
    <div className="border-r-2  min-w-60 bg-slate-700 text-white">
      <form className="grid grid-cols-1 grid-rows-3 mt-4 ml-4">
        <div className="w-full flex flex-col">
          <label className="flex mb-1 ">Customer Name</label>
          <input
            className="mb-2 w-2/3 rounded border-black border-2 p-1 bg-transparent hover:border-blue-800"
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
            className="mb-2 w-2/3  border-black border-2 p-1 bg-transparent hover:border-blue-800"
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
            className="mb-2 w-14  border-black border-2 p-1 bg-transparent hover:border-blue-800"
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
          className=" rounded w-2/3 mb-3 h-8 bg-black text-white hover:text-black hover:bg-yellow-400"
          onClick={() => handleCreate()}
        >
          create
        </button>
      </form>
    </div>
  );
}

export default NewCustomerButton;
