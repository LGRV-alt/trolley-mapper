import VechicleSection from "./VechicleSection";
import CustomerSection from "./CustomerSection";

function Content() {
  return (
    <div className="outline h-full grid grid-cols-2 grid-rows-1 outline-black outline-4  bg-blue-400">
      <CustomerSection />
      <VechicleSection />
    </div>
  );
}

export default Content;
