function PersonalDetailsInput(person, onChange) {
  return (
    <div>
      <h2>Personal Details</h2>
      <input type="text" onChange={onChange} />
    </div>
  );
}

export default PersonalDetailsInput;
