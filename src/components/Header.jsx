function Header() {
  return (
    <div className="flex justify-between items-center border-b-2 lg:mb-4 text-white text-2xl h-16 bg-[#161617] ">
      <div className="flex justify-center items-center">
        <img src="/src/assets/logo.svg" alt="" className="ml-4" />
        <h1
          className=""
          onClick={() => {
            console.log("clicked");
          }}
        >
          Trolley Mapper
        </h1>
      </div>

      <div className="mr-5 flex gap-2">
        <img src="/src/assets/pdf.svg" alt="" />
        <a href="https://www.google.com/maps" target="blank">
          <img src="/src/assets/google-maps.svg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Header;
