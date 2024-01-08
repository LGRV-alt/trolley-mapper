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
    <div className="border-2 border-white ">
      <form className="flex flex-col justify mt-4 ml-4">
        <label className="flex justify-between w-full">
          Name:
          <input
            className="mb-4 mr-6"
            value={form.name}
            type="text"
            name="name"
            placeholder="Landscapers"
            onChange={(event) => handleFormInputs(event, "name")}
          />
        </label>
        <label className="flex justify-between">
          Trollies:
          <input
            className=" mb-4 mr-6"
            value={form.trollies}
            type="number"
            name="trollies"
            placeholder="4T"
            onChange={(event) => handleFormInputs(event, "trollies")}
          />
        </label>
        <label className="flex justify-between mb-4">
          Extras:
          <input
            className="mr-6"
            value={form.extras}
            type="text"
            name="extras"
            placeholder="10 Comp"
            onChange={(event) => handleFormInputs(event, "extras")}
          />
        </label>
      </form>
      <button
        className=" w-full bg-black text-white "
        onClick={() => handleCreate()}
      >
        create
      </button>
    </div>
  );
}

export default NewCustomerButton;
