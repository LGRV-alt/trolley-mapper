import { useState } from "react";

function NewCustomerButton() {
  const [customer, setCustomer] = useState({});
  const [form, setForm] = useState({});

  function handleCreate() {
    setCustomer({});
    setForm({ name: "" });
  }

  function handleFormInputs(event, inputName) {
    setCustomer({ ...customer, [inputName]: event.target.value });
    setForm({ ...form, name: event.target.value });
  }
  return (
    <div className="border-2 border-white w-full h-12 mb-8">
      <form>
        <label>
          Name:
          <input
            value={form.name}
            type="text"
            name="name"
            placeholder="Landscapers"
            onChange={(event) => handleFormInputs(event)}
          />
        </label>
        <label>
          Trollies:
          <input
            value={form.trollies}
            type="number"
            name="trollies"
            placeholder="4T"
            onChange={(event) => handleFormInputs(event)}
          />
        </label>
        <label>
          Extras:
          <input
            value={form.extras}
            type="text"
            name="extras"
            placeholder="10 Comp"
            onChange={(event) => handleFormInputs(event, extras)}
          />
        </label>
      </form>
      <button onClick={() => handleCreate()}>create</button>
      <p>{customer.name}</p>
      <p>{customer.trollies}</p>
      <p>Extras: {customer.trollies}</p>
    </div>
  );
}

export default NewCustomerButton;
