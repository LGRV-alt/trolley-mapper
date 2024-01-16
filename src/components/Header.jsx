import { GoogleMapsLogo } from "./GoogleMapsLogo.jsx";
import { Logo } from "./logo.jsx";
import { PdfLogo } from "./PdfLogo.jsx";

function Header({ printMode, targetRef, downloadPdf }) {
  return (
    <div
      ref={targetRef}
      className="flex justify-between items-center border-b-2 lg:mb-4 text-2xl h-16 "
    >
      <div className="flex justify-center items-center">
        <Logo />
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
            <GoogleMapsLogo />
          </a>
        ) : (
          <button>
            <div className="cursor-pointer" onClick={() => downloadPdf()}>
              <PdfLogo />
            </div>
            <img
              src="/src/assets/pdf.svg"
              alt=""
              onClick={() => downloadPdf()}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
