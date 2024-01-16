function Header({ printMode }) {
  return (
    <div className="flex justify-between items-center border-b-2 lg:mb-4 text-2xl h-16 ">
      <div className="flex justify-center items-center">
        <img src="/src/assets/logo.svg" alt="" className="lg:ml-4 ml-2" />
        <h1
          className=""
          onClick={() => {
            console.log("clicked");
          }}
        >
          Trolley Mapper
        </h1>
      </div>

      <div className="lg:mr-5 mr-2 flex gap-2">
        {printMode ? (
          <a href="https://www.google.com/maps" target="blank">
            <img src="/src/assets/google-maps.svg" alt="" />
          </a>
        ) : (
          <img src="/src/assets/pdf.svg" alt="" />
        )}
      </div>
    </div>
  );
}

export default Header;
