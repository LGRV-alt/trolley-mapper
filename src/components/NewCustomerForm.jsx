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
    <div className="border-2 border-white min-w-60 ">
      <form className="grid grid-cols-1 grid-rows-3 mt-4 ml-4">
        <div className="w-full flex flex-col">
          <label className="flex ">Customer Name</label>
          <input
            className="mb-2 w-2/3 rounded"
            value={form.name}
            type="text"
            name="name"
            placeholder="Landscapers"
            onChange={(event) => handleFormInputs(event, "name")}
          />
        </div>
        <div className="w-full flex flex-col ">
          <label className="flex">Extras</label>
          <input
            className="mb-2 w-2/3"
            value={form.extras}
            type="text"
            name="extras"
            placeholder="10 Comp"
            onChange={(event) => handleFormInputs(event, "extras")}
          />
        </div>
        <div className="w-full flex  flex-col ">
          <label className="flex ">Trollies</label>
          <input
            className="mb-2 w-1/3"
            value={form.trollies}
            type="number"
            name="trollies"
            placeholder="4T"
            onChange={(event) => handleFormInputs(event, "trollies")}
          />
        </div>
        <button
          type="button"
          className=" w-2/3 mb-3 h-8 bg-black text-white hover:bg-white hover:text-black"
          onClick={() => handleCreate()}
        >
          create
        </button>
      </form>
    </div>
  );
}

export default NewCustomerButton;
