import "./App.css";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className=" grid h-full min-h-screen bg-red-500 grid-cols-2 gap-4">
        <Sidebar />
        <h1 className="  border-white-700 border-4 text-white-400 bg-green-500 h-16 w-30 flex items-center justify-center">
          u on after school
        </h1>
      </div>
    </>
  );
}

export default App;
