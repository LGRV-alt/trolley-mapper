import { useState } from "react";

function NewCustomerButton({ setCustomerList, customerList }) {
  const [customer, setCustomer] = useState({});
  const [form, setForm] = useState({});

  function handleCreate() {
    setCustomerList([...customerList, form]);
    setCustomer({});
    setForm({ name: "", trollies: "", extras: "" });
  }

  function handleFormInputs(event, key) {
    setCustomer({ ...customer, [key]: event.target.value });
    console.log(customer);
    setForm({ ...form, [key]: event.target.value });
  }
  return (
    <div className="border-2 border-white w-full h-12 mb-60">
      <form>
        <label>
          Name:
          <input
            value={form.name}
            type="text"
            name="name"
            placeholder="Landscapers"
            onChange={(event) => handleFormInputs(event, "name")}
          />
        </label>
        <label>
          Trollies:
          <input
            value={form.trollies}
            type="number"
            name="trollies"
            placeholder="4T"
            onChange={(event) => handleFormInputs(event, "trollies")}
          />
        </label>
        <label>
          Extras:
          <input
            value={form.extras}
            type="text"
            name="extras"
            placeholder="10 Comp"
            onChange={(event) => handleFormInputs(event, "extras")}
          />
        </label>
      </form>
      <button onClick={() => handleCreate()}>create</button>
      <p>Name:{customer.name}</p>
      <p>Trollies:{customer.trollies}</p>
      <p>Extras: {customer.extras}</p>
    </div>
  );
}

export default NewCustomerButton;
