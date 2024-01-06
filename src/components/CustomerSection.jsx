import NewCustomerButton from "./NewCustomerButton";

function CustomerSection({ customerName, onClick }) {
  return (
    <div>
      <NewCustomerButton />
      <h3>Customers</h3>
      <h3 onClick={() => onClick("lewis")}>Lewis</h3>
      <h3 onClick={() => onClick("Jen")}>Jen</h3>
      <h3>{customerName}</h3>
    </div>
  );
}

export default CustomerSection;
