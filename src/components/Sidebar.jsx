import PersonalDetailsInput from "./PersonDetailsInput";

function Sidebar(person, onChange) {
  return (
    <div className=" w-full border-white-700 border-4">
      <header className="w-full p-4 text-2xl text-white border-white-700 border-4  flex place-content-center">
        CV Builder
      </header>
      <PersonalDetailsInput person={person} onChange={onChange} />
      <input type="text" value={person} onChange={onChange}></input>
    </div>
  );
}

export default Sidebar;
