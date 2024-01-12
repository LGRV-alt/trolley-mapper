// TODO - add a number value on the customers which changes the order that they appear

function Customer({ customerList, onClick }) {
  return (
    <div>
      {customerList.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick([item.name])}
          className="border-2 border-white w-1/2"
        >
          <h3>{item.name}</h3>
          {item.trollies.length > 0 ? <p>{item.trollies}T</p> : null}
          <p>{item.extras}</p>
        </div>
      ))}
    </div>
  );
}

// {item.name} {item.trollies} {item.extras}

export default Customer;
