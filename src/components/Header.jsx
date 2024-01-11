function Header() {
  return (
    <div className="flex justify-between items-center border-b-4 text-white text-2xl h-16 bg-[#161617] ">
      <h1
        className="ml-6"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Trolly Mapper
      </h1>
    </div>
  );
}

export default Header;
