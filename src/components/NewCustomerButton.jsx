import { useState } from "react";

function NewCustomerButton() {
  const [customer, setCustomer] = useState({});

  function handleCreate() {
    setCustomer({});
  }
  return (
    <div className="border-2 border-white w-full h-12 mb-8">
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Landscapers"
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
        </label>
        <label>
          Trollies:
          <input
            type="number"
            name="trollies"
            placeholder="4T"
            onChange={(e) =>
              setCustomer({ ...customer, trollies: e.target.value })
            }
          />
        </label>
        <label>
          Extras:
          <input type="text" name="extras" placeholder="10 Comp" />
        </label>
      </form>
      <button onClick={() => handleCreate()}>create</button>
      <p>{customer.name}</p>
      <p>{customer.trollies}</p>
    </div>
  );
}

export default NewCustomerButton;
