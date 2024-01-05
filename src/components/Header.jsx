function Header() {
  return (
    <div className="flex justify-between items-center  text-xl h-16 bg-yellow-400 outline outline-black outline-4">
      <h1
        className="ml-6"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Trolly Mapper
      </h1>

      <ul>
        <li className="mr-6 text-sm  ">button</li>
      </ul>
    </div>
  );
}

export default Header;
